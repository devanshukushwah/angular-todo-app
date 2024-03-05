import { Component } from '@angular/core';
import { Todo } from '../../Model/Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'titl1',
        desc: 'descriptoin',
        active: true,
      },
      {
        sno: 2,
        title: 'titl2',
        desc: 'descriptoin2',
        active: true,
      },
      {
        sno: 3,
        title: 'titl3',
        desc: 'descriptoin3',
        active: true,
      },
      {
        sno: 4,
        title: 'titl4',
        desc: 'descriptoin4',
        active: true,
      },
    ];
  }

  handleTodoDelete(todo: Todo) {
    // console.log(todo);
    this.todos = this.todos.filter((f) => f.sno !== todo.sno);
  }

  addTodo(todo: Todo) {
    const tempTodo = { ...todo, sno: this.todos.length + 1 };
    this.todos.push(tempTodo);
  }
}
