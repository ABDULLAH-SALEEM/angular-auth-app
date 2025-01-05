import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable()
export class TodoService {
  http = inject(HttpClient);
  todos = signal<Todo[]>([]);
  constructor() {}

  deleteTodoById(id: number) {
    const newTodos = this.todos().filter((todo: Todo) => todo.id !== id);
    this.todos.set(newTodos);
  }

  toggleTodoCompleteById(id: number) {
    const newTodos = this.todos().map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.todos.set(newTodos);
  }
  getTodos() {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((todos) => {
        this.todos.set(todos);
      });
  }
}
