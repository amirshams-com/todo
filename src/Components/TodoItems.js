import React from "react"
import {Component} from "react"
import TodoItem from "./TodoItem"
import todoStore from "../stores/TodoStore";
import TodoLogs from "./TodoLogs";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component{
    completeditems=0;
    selectsort=(code)=>{
      
         switch(code){
            case "All":
               this.setState({"sort":null});
               return null;
            break;
            case "Active":
               this.setState({"sort":false});
               return false;
            break;
            case "Completed":
               this.setState({"sort":true});
               return true;
               
            break;
         }
      }
      state={
         "sort":null
      }
      
    render(){
   
       this.completeditems=todoStore.todos.filter(todo=>todo.completed===false).length;
       return( todoStore.todos.length>0 &&
         [
             <ul className="todo-list">
              
         
                  {
                   this.state.sort===null ? 
                    todoStore.todos.map(todo=>{
                    
                       return <TodoItem todo={todo}  remove={()=>{todoStore.remove(todo.id); }}/>
                       
                    })
                    :
                    todoStore.todos.filter(todo=>todo.completed==this.state.sort).map(todo=>{
                    
                     return <TodoItem todo={todo}  remove={()=>{todoStore.remove(todo.id); }}/>
                     
                  })
                 }
             
                </ul>
                ,
              
                <TodoLogs leftitem={this.completeditems} clear={()=>{todoStore.clearcompleted()}} sort={this.selectsort}/>
        ]
        )
    }
}
export default TodoItems;