import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {
  private taskGroupList:TaskGroups[] = TASKGROUPSLIST
  
  constructor() { }

  getTaskGroupsList():TaskGroups[]{
    return this.taskGroupList;
  }

}
