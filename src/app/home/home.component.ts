import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { TodoService } from '../service/todos.service';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  displayedColumns = ['id', 'state', 'title'];
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
      this.sort()
    })
  }

  toggle(todo: Todo, event: boolean) {
    todo.state = event ? 'done' : 'undone';
    this.sort();
  }

  sort() {
    this.todos.sort((a, b) => a['id'] < b['id'] ? 1 : a['id'] === b['id'] ? 0 : -1);
    this.todos.sort((a, b) => a['state'] < b['state'] ? 1 : a['state'] === b['state'] ? 0 : -1);
    this.table.renderRows();
  }
}
