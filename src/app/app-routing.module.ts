import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* path: '',
component: RecruiterModuleComponent,

children: [
  {
    path: 'jobs',
    loadChildren: () =>
      import(`./recruiter-job-list/recruiter-job-list.module`).then(
        (m) => m.RecruiterJobListModule
      ),
  }, */

const routes: Routes = [
  { 
    path:'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
    //loadChildren: './pages/login/login.module#LoginModule'
  },
  { 
    path:'home', 
    loadChildren: () =>
      import(`./pages/home/home.module`).then(
        (m) => m.HomeModule
      ),
  },
  { path:'', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
