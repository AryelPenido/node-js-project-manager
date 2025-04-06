import { Injectable } from "@nestjs/common";
import { DataSource, DeepPartial, Repository } from "typeorm";
import { TaskEntity } from "../../infrastructure/entities/task.entity";
import { ITasksRepository } from "./tasks-repository.interface";
import { ITask } from "../../domain/interfaces/task.interface";



@Injectable()
export class TasksRepositoryService
    extends Repository<TaskEntity>
    implements ITasksRepository {
    constructor(dataSource: DataSource) {
        super(TaskEntity, dataSource.createEntityManager());
    }
    findAll(userId: number): Promise<ITask[]> {
        return this.findBy({ user: { id: userId } });
    }
    
    findById(id: number, userId: number): Promise<ITask> {
        return this.findOneByOrFail({ id, user: { id: userId } });
    }

    add(payload: DeepPartial<ITask>): Promise<ITask> {
        return this.save(payload) as Promise<ITask>;
    }

    updateById(payload: DeepPartial<ITask>) {
        if (!payload.id) {
            throw new Error("ID is required to update a task.");
        }
        return this.update(payload.id, payload);
    }

}