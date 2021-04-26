import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
@observable todos=[];
lastId=0;


@action 
addNew(title){
this.todos.push(new TodoModel(this,title,false,this.lastId++));
}

@action
remove(id){
    this.todos=this.todos.filter(todo=>todo.id!==id);
}

@action
clearcompleted(){
    this.todos=this.todos.filter(todo=>todo.completed!=true);
}
}

const todoStore = new TodoStore()
export default todoStore
