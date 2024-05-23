import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from '../../db-data';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{

  @Input()
  course:Course;

  @Input()
  title:string;

  @Input()
  icon:string;

  @Input()
  description:string;

  @Output()
  courseClicked = new EventEmitter<Course>();

  ngOnInit(): void {
    
  }

  onButtonClicked(){
    
  }

}
