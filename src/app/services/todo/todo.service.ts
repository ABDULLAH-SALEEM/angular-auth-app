import { inject, Injectable } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  http = inject(HttpClient);
  constructor() {}

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
