import { Component, Input } from '@angular/core';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';
import { TaskGroups } from '../../../models/task-groups';

@Component({
  selector: 'app-task-group-list',
  standalone: false,
  
  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent  {
   tasksGroups:TaskGroups[] = TASKGROUPSLIST;
  
  
}


