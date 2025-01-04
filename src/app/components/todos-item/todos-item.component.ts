import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos-item',
  imports: [],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss',
})
export class TodosItemComponent {
  @Input() todo!: {
    id: number;
    title: string;
    completed: boolean;
  };
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();

  onToggleComplete() {
    this.toggleComplete.emit(this.todo.id);
  }

  onDeleteTodo() {
    this.deleteTodo.emit(this.todo.id);
  }
}
