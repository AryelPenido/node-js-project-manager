import { DeepPartial } from "typeorm";
import { IProject } from "@project-manager-api/domain/interfaces/project.interface";

export interface IProjectsRepository {
    findAll(userId: number): Promise<IProject[]>;
    findById(id: number): Promise<IProject | null>;
    add(payload: DeepPartial<IProject>): Promise<IProject>;
}