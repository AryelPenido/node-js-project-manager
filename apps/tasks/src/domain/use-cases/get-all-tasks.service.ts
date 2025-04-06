
import { Injectable } from '@nestjs/common';

import { ITask } from '../interfaces/task.interface';
import { BaseUseCase } from 'libs/common/interfaces/base-use-case';
import { TasksRepositoryService } from '../../infrastructure/database/tasks.repository.service';

@Injectable()
export class GetAllTasksService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(userId: number): Promise<ITask[]> {
    const tasks = await this.tasksRepository.findAll(userId);

    return tasks;
  }
}
