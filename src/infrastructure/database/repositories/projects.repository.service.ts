import { DataSource, DeepPartial, Repository } from "typeorm";
import { ProjectEntity } from "../entities/project.entity";
import { IProject } from "src/domain/interfaces/project.interface";
import { Injectable } from "@nestjs/common";
import { IProjectsRepository } from "./projects-repository.interface";

@Injectable()
export class ProjectsRepositoryService
    extends Repository<ProjectEntity>
    implements IProjectsRepository {
    constructor(dataSource: DataSource) {
        super(ProjectEntity, dataSource.createEntityManager());
    }
    findAll(userId: number): Promise<IProject[]> {
        return this.findBy({ user: { id: userId } });
    }
    findById(id: number): Promise<IProject | null> {
        return this.findOneBy({ id });
    }
    add(payload: DeepPartial<IProject>): Promise<IProject> {
        return this.save(payload);
    }
}