import { Component, OnInit } from '@angular/core';
import { globalEventBus } from '../event-bus-experiments/event-bus';
import { Observer } from 'rxjs';
import { Lesson } from '../shared/model/lessons';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() { 
    console.log('Lessons list component is registered as an observer ...');
    globalEventBus.registerObserver(this); 
  }

  ngOnInit() {
  }

  notify(data: Lesson[]){
    console.log('Lessons list component received data ...');
    this.lessons = data;
  }

}
