import {Component} from '@angular/core';
import {todoService} from '../../services/todo.service';

@Component({
  selector: 'todos',
  template: `
    <h1>My Todos</h1>
    <h2>IFS</h2>
    <div *ngIf='things'>{{things}}</div>
    <div *ngIf='!things'>You lazy</div>
    <h2>Switches</h2>
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'John'">
      John
      </div>
      <div *ngSwitchCase="'Bob'">
        Bob
      </div>
      <div *ngSwitchDefault>
        Something Else
      </div>
    </div>
    <h1> Two way data binding using an input and array</h1>
    <div>
      <div *ngIf="errorMsg">
        <div class="alert alert-danger">{{errorMsg}}</div>
      </div>
      <div *ngIf="successMsg">
        <div class="alert alert-success">{{successMsg}}</div>
      </div>
      <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addTodo()" />
      <br />
    </div>
    <ul class="list-group">
      <li *ngFor="let todo of todos" class="list-group-item">{{todo}}</li>
      <a href="#" (dblclick)="removeTodo(todo)">{{todo}}</a>
    </ul>
    <button class="btn btn-default" (click)="resetTodos()">Reset</button>
    `,
    providers: [todoService]
})
export class TodosComponent{
  things;
  name;
  todos;
  newTodo;
  errorMsg;
  successMsg;

  constructor(private todoService: todoService){
    this.name = '';
    this.todos = todoService.getToDos();
  }

  addTodo(){
    if(!this.newTodo || this.newTodo.length < 3){
      this.errorMsg = 'To must be at least 3 chars';
      this.successMsg = '';
      this.newTodo = '';
    }
    else{
      this.successMsg='you added ' + this.newTodo;
      this.errorMsg = '';
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(todo){
    this.todoService.removeTodo(todo);
  }

  resetTodos(){
    this.todoService.resetTodos();
    this.successMsg = 'Todos cleared';
    this.newTodo = '';
    this.errorMsg = '';
  }
}
