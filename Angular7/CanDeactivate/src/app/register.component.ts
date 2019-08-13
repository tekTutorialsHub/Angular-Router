import { Component } from '@angular/core';
import { IDeactivateComponent } from './decativate.guard';


@Component({
  template: `<h1>Register User</h1>
          <p> </p>`,
})
export class RegisterComponent    implements IDeactivateComponent
{

   //Check if there any unsaved data etc. If yes then as for confirmation 
  canExit() : boolean {

  if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
  
}