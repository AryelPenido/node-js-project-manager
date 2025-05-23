import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-project.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { CreateProjectService } from './create-project.service';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GetProjectByIdService, CreateProjectService, GetAllProjectsService],
  exports: [GetProjectByIdService, CreateProjectService, GetAllProjectsService],
})
export class ProjectsModule {}
