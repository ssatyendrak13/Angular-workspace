import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  data = "Satyendra"
  constructor(){
    setTimeout(()=>{
      this.title = "12";
    }, 2000)
  }
  getValue(){
    return "Get fuction data";
  }
}
