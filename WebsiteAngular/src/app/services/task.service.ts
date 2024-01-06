import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { CommonService } from ".";
import { ITask } from "../models/interfaces";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TaskService {
    httpClient = inject(HttpClient);
    commonService = inject(CommonService);

    loadList(): Promise<ITask[]> {
        return new Promise<ITask[]>((resolve, reject) => {
            resolve(this.buildTaskList());
        });
    }

    private buildTaskList(): ITask[] {
        let taskList: ITask[] = [];

        for (let i = 0; i < 100; i++) {
            let randomStatus = Math.floor((Math.random() * 4) + 1);

            taskList.push({
                id: uuidv4(),
                headline: `Task ${i}`,
                description: `Task ${i} description`,
                status: randomStatus,
                dateCreated: new Date()
            });
        }

        return taskList;
    }
}