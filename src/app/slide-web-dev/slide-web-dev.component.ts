import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-web-dev',
  templateUrl: './slide-web-dev.component.html',
  styleUrls: ['./slide-web-dev.component.less']
})
export class SlideWebDevComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigate([route])
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
