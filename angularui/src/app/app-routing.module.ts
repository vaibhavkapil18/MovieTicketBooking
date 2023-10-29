import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LocationSelectorComponent } from './location-selector/location-selector.component';
import { CinemaComponent } from './components/cinema/cinema.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'',component: LoginComponent},
  {path:'location-selector',component:LocationSelectorComponent},
  {path:'cinema',component:CinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
