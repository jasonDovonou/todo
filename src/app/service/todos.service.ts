import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get(this.SERVER_URL + 'todos');
  }
  public getTodo(todoId) {
    return this.httpClient.get(`${this.SERVER_URL + 'todos'}/${todoId}`);
  }
  public createTodo(todo: Todo) {
    return this.httpClient.post(`${this.SERVER_URL + 'todos'}`, todo)
  }
  public deleteTodo(todoId) {
    return this.httpClient.delete(`${this.SERVER_URL + 'todos'}/${todoId}`)
  }
  public updateTodo(todo: Todo) {
    return this.httpClient.put(`${this.SERVER_URL + 'todos'}/${todo.id}`, todo)
  }

}