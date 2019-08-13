import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { map, filter} from 'rxjs/operators';
import { Observable} from 'rxjs/observable';
import { Location } from '@angular/common';

@Component({
  template: `<H1>Passing Dynamic Data Demo</H1>
  {{ product | json }}`
})
export class DynamicComponent implements OnInit {

  product;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private location:Location) {
    
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    console.log(history.state);
    //console.log(this.location.getState());
    //Does not work in Angular 7
    this.product=history.state;
  }

}