import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task | undefined;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  deleteTask(){
    console.log("Tarea eliminada: ", this.task?.title);
    this.delete.emit(this.task);
  }

}
