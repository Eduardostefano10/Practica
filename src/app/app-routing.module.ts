import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home',              component:HomeComponent},
  { path: 'register',              component:RegisterComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
