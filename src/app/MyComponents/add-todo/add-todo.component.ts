import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Model/Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  title!: string;
  desc!: string;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  handleTodoAdd() {
    console.log('called handleTodoAdd');

    const newTodo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.addTodo.emit(newTodo);
  }
}
