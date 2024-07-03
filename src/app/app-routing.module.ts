/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { LayoutComponent } from './layouts/layout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { AuthGuard } from './core/guards/auth.guard';
// import { CollectionAppAccessComponent } from './collection-app-access/collection-app-access.component';
import { CategoryComponent, SearchComponent } from '@ctrl/ngx-emoji-mart';
import { TexttableComponent } from './texttable/texttable.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard]  },
  { path: 'auth', component: AuthlayoutComponent, loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'pages',component: AuthlayoutComponent, loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule)},
//  {path:'collectionAppAccess',component:CollectionAppAccessComponent},
{ path: 'chits', loadChildren: () => import('./chits/agent-products/chits/chits.module').then(m => m.ChitsModule) },

{path:'search1',component:SearchComponent},
{ path:'texttable',component:TexttableComponent},
  { path: 'administration', loadChildren: () => import('./Administration/administration/administration.module').then(m => m.AdministrationModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
