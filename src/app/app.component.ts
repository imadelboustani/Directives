import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers = [1,3,5,7];
  onlyOdd = true;
  evenNumbers = [2,4,6,8] ;
}
