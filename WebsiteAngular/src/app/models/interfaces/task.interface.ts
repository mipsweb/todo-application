import { TaskStatus } from "../enums";

export interface ITask {
    id: string;
    headline: string;
    description?: string;
    status: TaskStatus;
    dateCreated: Date;
    dateModified?: Date;
    dateCompleted?: Date;
}