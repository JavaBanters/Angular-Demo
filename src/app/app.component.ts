import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  data = [
    {
      title : 'Shanti'
    },
    {
      title : 'Anant'
    }
  ]



  onClick() {
    alert("Hello I was clicked")
    console.log("Hello !!!!!!")
  }

  onInput(value:string){
    this.data[1].title = value;
  }

}
