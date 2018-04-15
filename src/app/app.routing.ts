import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TreesComponent } from './trees/trees.component';
import { MapComponent } from './map/map.component';
import { ResquestTreeComponent } from './resquest-tree/resquest-tree.component';
import { AuthGuard } from './login/auth.guard';


const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'resquestTree', component: ResquestTreeComponent, canActivate: [AuthGuard] },
  { path: 'trees', component: TreesComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
