import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-app',
  templateUrl: './slide-app.component.html',
  styleUrls: ['./slide-app.component.less']
})
export class SlideAppComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigate([route])
  }

}
