import { Component, OnInit } from '@angular/core';
import { Task, TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  taskList: Task[];

  constructor(private ts: TodoServiceService) {}

  ngOnInit(): void {
    this.taskList = this.ts.getTodoList();
  }

  changeTaskStatus(index: number) {
    this.ts.toggleTaskStatus(index);
  }
}
