/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {ListJsModel} from './listjs.model';
import {ListJs} from './data';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './listjs-sortable.directive';

interface SearchResult {
  roles: ListJsModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  // startIndex: number;
  // endIndex: number;
  totalRecords: number;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(roles: ListJsModel[], column: SortColumn, direction: string): ListJsModel[] {
  if (direction === '' || column === '') {
    return roles;
  } else {
    return [...roles].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(role: ListJsModel, term: string, pipe: PipeTransform) {
  return role.name.toLowerCase().includes(term.toLowerCase())
  || role.code.toLowerCase().includes(term.toLowerCase())
  || role.reportingTo.toLowerCase().includes(term.toLowerCase())

}

@Injectable({providedIn: 'root'})
export class ListService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _roles$ = new BehaviorSubject<ListJsModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 8,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    // startIndex: 0,
    // endIndex: 9,
    totalRecords: 0
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._roles$.next(result.roles);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get roles$() { return this._roles$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  // get startIndex() { return this._state.startIndex; }
  // get endIndex() { return this._state.endIndex; }
  get totalRecords() { return this._state.totalRecords; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
  // set startIndex(startIndex: number) { this._set({ startIndex }); }
  // set endIndex(endIndex: number) { this._set({ endIndex }); }
  set totalRecords(totalRecords: number) { this._set({ totalRecords }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let roles = sort(ListJs, sortColumn, sortDirection);

    // 2. filter
    roles = roles.filter(role => matches(role, searchTerm, this.pipe));
    const total = roles.length;

    // 3. paginate
    // this.totalRecords = roles.length;
    // this._state.startIndex = (page - 1) * this.pageSize + 1;
    // this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    // if (this.endIndex > this.totalRecords) {
    //     this.endIndex = this.totalRecords;
    // }
    
    roles = roles;
    return of({roles, total});
  }
}
