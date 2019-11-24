import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/todos.service';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo = {
    id: 0,
    state: 'undone',
    title: '',
    description: ''
  };

  constructor(private router: Router, private service: TodoService) { }

  ngOnInit() {
    this.todo.id = Number(this.router.url.split(/[//]/)[2]);
    if (this.todo.id) this.service.getTodo(this.todo.id).subscribe((todo: Todo) => {
      this.todo = todo;
    })
    else this.service.getTodos().subscribe((data: Todo[]) => {
      this.todo.id = data.length + 1;
    })
  }

  save() {
    if (this.todo.id) this.service.updateTodo(this.todo).subscribe();
    else this.service.createTodo(this.todo)
    this.router.navigate(['/']);
  }
}
