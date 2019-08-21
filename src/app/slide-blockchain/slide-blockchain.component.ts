import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-blockchain',
  templateUrl: './slide-blockchain.component.html',
  styleUrls: ['./slide-blockchain.component.less']
})
export class SlideBlockchainComponent implements OnInit {
 
  constructor(public router : Router) { }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigate([route])
  }

}
