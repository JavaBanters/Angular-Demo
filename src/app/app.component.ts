import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  course = COURSES[0];

  course1 = COURSES[0]; 
  course2 = COURSES[1];
  course3 = COURSES[2];

  onAppClicked(course:Course){
    console.log(course);
  }

}
