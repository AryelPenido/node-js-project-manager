import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../../../../../libs/common/src/interfaces/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from '../../infrastructure/database/tasks.repository.service';
import { UpdateTaskDto } from '../../gateways/controllers/dtos/update-task.dto';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(task: UpdateTaskDto, userId: number): Promise<ITask> {
    await this.tasksRepository.updateById(task);
    const taskData = await this.tasksRepository.findById(task.id, userId);

    return taskData;
  }
}