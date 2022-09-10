import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    // console.log("Eliminar una tarea", this.task?.title);
    this.delete.emit(this.task); //notificamos al componente superior la tarea a eliminar
  }
}
