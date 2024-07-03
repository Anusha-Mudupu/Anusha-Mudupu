/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../store/Authentication/auth.models';
import { getFirebaseBackend } from 'src/app/authUtils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { GlobalComponent } from "../../global-component";
import { ToastrService } from 'ngx-toastr';
// Action
import { login, loginSuccess, loginFailure, logout, logoutSuccess, RegisterSuccess } from '../../store/Authentication/authentication.actions';

// Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';



const AUTH_API = GlobalComponent.AUTH_API;

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'responseType': 'text,application/json',
        'Access-Control-Allow-Origin': 'http://13.201.200.0/kapil-crm-api/api/auth/login',
        'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers': 'Content-Type,application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user!: User;
    currentUserValue: any;

    private currentUserSubject: BehaviorSubject<User>;

    private loginResponseSubject = new BehaviorSubject<any>(this.getUserDataFromLocalStorage());
    loginResponse$: Observable<any> = this.loginResponseSubject.asObservable();
    constructor(private http: HttpClient, private store: Store, private afAuth: AngularFireAuth, public toastService: ToastrService,) {

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    }


    // Sign in with Google provider
    signInWithGoogle(): Promise<User> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.signInWithPopup(provider);
    }

    // Sign in with Facebook provider
    signInWithFacebook(): Promise<User> {
        const provider = new firebase.auth.FacebookAuthProvider();
        return this.signInWithPopup(provider);
    }

    // Sign in with a popup for the specified provider
    private async signInWithPopup(provider: firebase.auth.AuthProvider): Promise<User> {
        try {
            const result = await this.afAuth.signInWithPopup(provider);
            const user = result.user;
            return {
                //     uid: user.uid,
                //     displayName: user.displayName,
                //     email: user.email,
                //     // Add other user properties as needed
            };
        } catch (error) {
            throw new Error('Failed to sign in with the specified provider.');
        }
    }

    // Sign out the current user
    signOut(): Promise<void> {
        return this.afAuth.signOut();
    }


    register(email: string, first_name: string, password: string) {
        return this.http.post(AUTH_API + 'signup', {
            email,
            first_name,
            password,
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;
                this.store.dispatch(RegisterSuccess({ user }));
                return user;
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                this.store.dispatch(loginFailure({ error: errorMessage }));
                return throwError(errorMessage);
            })
        );
    }

    login(userName: any, password: any) {
        this.store.dispatch(login({ userName, password }));

        return this.http.post(AUTH_API, {
            userName,
            password
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;

                this.store.dispatch(loginSuccess({ user }));
                console.log('login user detail', response);

                console.log('login user detail user', user);
                localStorage.setItem('userData', JSON.stringify(user));
                localStorage.setItem('bearertoken', user.data.token);
                localStorage.setItem('Rolename', response.data.accountUser.roles);
                localStorage.setItem('Rolenamedata', JSON.stringify(response.data.accountUser.accountRoles));

                if (response.data.accountUser.roles == "Super Admin") {
                    this.loginResponseSubject.next(user);

                    return user;
                }
                else {
                    localStorage.setItem('Rolenamedata', JSON.stringify(response.data.accountUser.accountRoles));


                    //     response.data.accountUser.accountRoles.forEach((item:any, index:any) => {
                    //         localStorage.setItem(`rolepermissionjson_${index}`, JSON.stringify(item.rolePermissions));
                    //     });
                    // //   localStorage.setItem('rolepermissionjson',JSON.stringify(response.data.accountUser.accountRoles[0].rolePermissions));
                    // response.data.accountUser.accountRoles.forEach((item:any, index:any) => {
                    //     localStorage.setItem(`vericalid_${index}`,item.verticalId);

                    // });
                    //   localStorage.setItem('vericalid',response.data.accountUser.accountRoles[0].verticalId);


                    this.loginResponseSubject.next(user);

                    return user;
                }
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                this.store.dispatch(loginFailure({ error: errorMessage }));
                // alert("Invalid Credentials, Please try again");
                this.showError()
                return throwError(errorMessage);
            })
        );
    }
    getUserDataFromLocalStorage(): any {
        const userDataString = localStorage.getItem('userData');
        return userDataString ? JSON.parse(userDataString) : null;
    }

    logout(): Observable<void> {
        this.store.dispatch(logout());
        // Perform any additional logout logic, e.g., calling an API to invalidate the token

        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null!);
        this.store.dispatch(logoutSuccess());

        // Return an Observable<void> indicating the successful logout
        return of(undefined).pipe(
            tap(() => {
                // Perform any additional logic after the logout is successful
            })
        );
    }

    resetPassword(email: string) {
        return this.http.post(AUTH_API + 'reset-password', { email }, httpOptions);
    }

    /**
 * Returns the current user
 */
    public currentUser(): any {
        return getFirebaseBackend()!.getAuthenticatedUser();
    }

    showError() {
        this.toastService.error('Invalid Credentials,Please try again');
    }




}