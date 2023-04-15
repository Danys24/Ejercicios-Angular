import { Component } from '@angular/core';
import { Task, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  task1: Task = {
    title: 'Tarea_1',
    description: 'Tarea de prueba 1',
    completed: false,
    level: Levels.Info
  }

  task2: Task = {
    title: 'Tarea_2',
    description: 'Tarea de prueba 2',
    completed: true,
    level: Levels.Urgent
  }

  deleteTask(evento: Task){
    alert(`la ${evento.title} sera eliminada`);
  }

}
