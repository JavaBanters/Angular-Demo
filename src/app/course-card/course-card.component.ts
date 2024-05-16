import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

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
  source:string;

  @Input()
  course_description:string;

  @Output()
  courseClicked = new EventEmitter<Course>();

  ngOnInit(): void {
    
  }

  onButtonClicked(){
    this.courseClicked.emit(this.course)
  }

}
