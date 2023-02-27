import { Component, OnInit } from '@angular/core';

import { Task, TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private ts: TodoServiceService) {}

  tasksList: Task[];

  ngOnInit(): void {
    this.tasksList = this.ts.getTodoList();
  }

  addddTask(task: string) {
    console.log(task);
    this.ts.addTask({
      title: task,
      isCompleted: false,
    });
  }

  DeleteTask(index: number) {
    this.ts.removeTask(index);
    this.tasksList = this.ts.getTodoList();
  }
}
