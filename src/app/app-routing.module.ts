import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/components/main-component/main-component.component';
import { AdminComponent } from 'src/components/admin-component/admin-component';


const routes: Routes = [
  {
    path: 'Home',
    component: MainComponent,
  },
  {
    path: 'Admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
