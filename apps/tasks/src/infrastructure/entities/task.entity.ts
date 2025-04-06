import { IProject } from "@project-manager-api/domain/interfaces/project.interface";
import { IUser } from "@project-manager-api/domain/interfaces/user.interface";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { UserEntity } from '../../../../project-manager-api/src/infrastructure/database/entities/user.entity';
import { ProjectEntity } from "../../../../project-manager-api/src/infrastructure/database/entities/project.entity";
import { ITask } from "../../domain/interfaces/task.interface";

@Entity('tasks')
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'status', nullable: false })
  status: 'pending' | 'completed';

  @ManyToOne(() => ProjectEntity, (project) => project.tasks, {
    cascade: true,
    nullable: false,
  })
  project: IProject;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn()
  user: IUser;
}