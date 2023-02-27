import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Task {
  title: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  tasks: Task[] = [];

  constructor() {}

  addTask(t: Task) {
    this.tasks.push(t);
  }

  removeTask(index: number) {
    this.tasks = this.tasks.filter((val, i) => i !== index);
  }

  toggleTaskStatus(index: number) {
    if (this.tasks[index]) {
      this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    }
  }

  getTodoList() {
    return this.tasks;
  }
}
