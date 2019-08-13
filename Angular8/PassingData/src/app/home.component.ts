import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
     <ul>
       <li><a [routerLink]="['/static']">Static Data</a></li>
       <li><a [routerLink]="['/dynamic']" [state]=product>Dynamic Data</a></li> 
    </ul>
   
    <p>Id :   <input type="text" [(ngModel)]="product.id" > </p>
    <p>name :<input type="text" [(ngModel)]="product.name" > </p>
    <button (click)="gotoDynamic()" >Goto Dynamic Component</button>`
})
export class HomeComponent {
  
  public product = { id:'1', name:"Angular"};

  constructor(private router : Router) {
  }

  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/dynamic', { state: this.product });
  }
}


