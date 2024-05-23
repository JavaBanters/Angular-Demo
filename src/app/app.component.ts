import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  course1:Course = COURSES[9]; 

  onAppClicked(course:Course){
    console.log(course);
  }

  onClicked(event){
    alert('I was clicked')
    console.log("system out println");
    console.log(event.value)
  }

  onInput(event) {
    this.title = event;
  }

  title:string = 'Java';

}
