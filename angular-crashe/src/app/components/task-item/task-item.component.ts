import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task !: Task ;
  @Output() onDeletetask: EventEmitter<Task>=new EventEmitter;
  @Output() onTogglereminder: EventEmitter<Task>=new EventEmitter;
  faTimes = faTimes;
  ngOnInit(): void {
  }
  onDelete(task: any){
   this.onDeletetask.emit(task);
  }
  onToggle(task: any){
    this.onTogglereminder.emit(task);
   }

}
