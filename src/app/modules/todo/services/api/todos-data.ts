import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../../models/todo';

const INITIAL_ID = 1;

export class TodosData implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        title: 'TODO 1',
        isDone: false,
        isPrivate: true,
      },
      {
        id: 2,
        title: 'TODO 2',
        isDone: false,
      },
      {
        id: 3,
        title: 'TODO 3',
        isDone: true,
        isBusiness: true,
      },
    ];
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : INITIAL_ID;
  }
}
