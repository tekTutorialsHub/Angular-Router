import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
     template: `<h1>Passing Static Data Demo</h1>
         {{product  | json}}`
})
export class StaticComponent implements OnInit {

     product:any;
     constructor(private activatedroute:ActivatedRoute) {
     }

     ngOnInit() {

          this.activatedroute.data.subscribe(data => {
               this.product=data;
           })
    
     }
}