import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseDetailPageComponent } from './house-detail-page/house-detail-page.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'listing',component:ListingComponent},
  {path:'house-detail',component:HouseDetailPageComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
