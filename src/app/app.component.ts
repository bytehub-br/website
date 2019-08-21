import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { disableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  constructor(){
    
    setTimeout(()=>{
      const targetElement = document.querySelector(".slide Webdev");
    console.log(targetElement)
    disableBodyScroll(targetElement);
    }, 3000)
   
  }
  
  ngOnInit() {
    //document.body.ontouchmove = (e) => { e.preventDefault(); return false; }
    

  }//
  title = 'Bytehub/';
}
