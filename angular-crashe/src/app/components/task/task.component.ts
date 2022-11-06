import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

import { TaskService } from 'src/app/services/task.service';
import { TASKS } from 'src/app/mock.task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [] ;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>this.tasks=tasks);
  }
  deleteTask(task:Task){
    this.taskService
    .deleteTask(task)
    .subscribe(()=>this.tasks=this.tasks.filter((t) => t.id!==task.id));
  }
  toggleRemidner(task: Task){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  Addtask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }

}
