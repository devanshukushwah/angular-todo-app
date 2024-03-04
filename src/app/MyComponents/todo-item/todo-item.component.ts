import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Model/Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  handleOnClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }
}
