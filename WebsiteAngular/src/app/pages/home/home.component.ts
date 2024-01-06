import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../models/interfaces';
import { TaskService } from '../../services';
import {DateToStringPipe, StatusToIconPipe} from "../../pipes";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, DateToStringPipe, StatusToIconPipe],
  providers: [TaskService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  taskList = signal<ITask[]|undefined>(undefined);

  taskService = inject(TaskService);

  async ngOnInit(): Promise<void> {
    const _taskList = await this.taskService.loadList();
    this.taskList.set(_taskList);
  }
}