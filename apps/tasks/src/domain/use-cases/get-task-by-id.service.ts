
import { Injectable } from '@nestjs/common';

import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '../../infrastructure/database/tasks.repository.service';
import { BaseUseCase } from 'libs/common/interfaces/base-use-case';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(taskId: number, userId: number): Promise<ITask> {
    const task = await this.tasksRepository.findById(taskId, userId);

    return task;
  }
}