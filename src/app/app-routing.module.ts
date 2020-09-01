import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoShellComponent } from './modules/todo/components/todo-shell/todo-shell.component';
import { APP_BASE_HREF } from '@angular/common';
import { CounterShellComponent } from './modules/counter/counter-shell/counter-shell.component';

const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodoShellComponent,
  },
  {
    path: 'counter',
    component: CounterShellComponent,
  },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ]
})
export class AppRoutingModule { }
