import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodosStateService } from '../../services/todos-state.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private todosService: TodosStateService) {}

  ngOnInit() {}

  submit(form: NgForm) {
    const newTodo: Todo = {
      ...this.todo,
      ...form.value,
    };

    if (newTodo.id) {
      this.todosService.update(newTodo);
    } else {
      this.todosService.create(newTodo);
    }
  }

  delete() {
    this.todosService.delete(this.todo);
  }

  onClose() {
    this.todosService.clearSelectedTodo();
  }
}
