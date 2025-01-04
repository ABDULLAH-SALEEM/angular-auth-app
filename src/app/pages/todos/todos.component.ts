import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosItemComponent } from '../../components/todos-item/todos-item.component';
import { TodoService } from '../../services/todo/todo.service';
import { Todo } from '../../model/todo.type';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  imports: [TodosItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [TodoService],
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todos = signal<Todo[]>([]);
  ngOnInit(): void {
    this.todoService
      .getTodos()
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
