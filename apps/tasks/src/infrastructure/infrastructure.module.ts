import { Module } from '@nestjs/common';
import { TasksRepositoryService } from './database/tasks.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { ProjectEntity } from '@project-manager-api/infrastructure/database/entities/project.entity';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity, ProjectEntity, UserEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [TasksRepositoryService],
  exports: [TasksRepositoryService],
})
export class InfrastructureModule {}