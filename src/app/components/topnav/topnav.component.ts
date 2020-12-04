import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  route:string = "";

  constructor(private router: Router, private location: Location) { 

    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path().replace("/", "");
      } else {
        this.route = "Home";
      }
    });

  }

  ngOnInit(): void {


  }

}
