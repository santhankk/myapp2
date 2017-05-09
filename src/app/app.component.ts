import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
 template:`
 <h1>Hi guys</h1>
 <button [disabled]="buttonStatus">My Button</button>
 <button (click)="myEvent($event)">My Button event</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Work!!';
  buttonStatus=false;
  myEvent(event){
    console.log(event);
    console.log('hello work!');
  }
}
