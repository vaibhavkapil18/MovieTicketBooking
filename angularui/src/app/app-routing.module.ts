import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LocationSelectorComponent } from './location-selector/location-selector.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { TheaterListComponent } from './components/theater-list/theater-list.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'',component: LoginComponent},
  {path:'location-selector',component:LocationSelectorComponent},
  {path:'imageslider',component:ImageSliderComponent},
  {path:'theatrelist',component:TheaterListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
