import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit{
  title = 'Bytehub/';
  targetElement;
  ngOnInit(){
    this.targetElement = document.querySelector(".mainPage");
    disableBodyScroll(this.targetElement);
  }
}
