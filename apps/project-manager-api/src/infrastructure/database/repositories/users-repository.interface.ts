import { DeepPartial } from 'typeorm';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

export interface IUsersRepository {
    findById(id: number): Promise<IUser|null>;
    add(payload: DeepPartial<IUser>): Promise<IUser>;
}