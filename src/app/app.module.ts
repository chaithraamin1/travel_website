import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { HouseDetailPageComponent } from './house-detail-page/house-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    HouseDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
