export class todoService{
  todos = ['Wash Dishes', 'Go to Diner'];

  getToDos(){
    return this.todos;
  }

  addTodo(newTodo){
    this.todos.push(newTodo);
  }

  removeTodo(todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  resetTodos(){
    this.todos.length = 0;
  }
}
