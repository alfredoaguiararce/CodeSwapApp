import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: MaincontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
