import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleBtn() {
    var navBar: any = document.getElementById("navBar");
    navBar.classList.toggle("hidemenu")
  }

}
