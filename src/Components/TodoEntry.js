import React from "react"
import {Component} from "react"
import todoStore from "../stores/TodoStore"
import {observer} from "mobx-react"
export default class TodoEntry extends Component{
    state={
        value:""

    }


    render(){
        return(
            <div>
            <h1>Todo</h1>
                <input type="text" 
                onChange={event=>{this.setState({value:event.target.value})}}
                onKeyDown={
                    event=>{
                        if(event.keyCode===13){
                            event.preventDefault();
                            todoStore.addNew(this.state.value);
                            event.target.value="";
                        }
                    }
                    
                }
                className="new-todo" placeholder="what needs to be done?"
                ></input>
            </div>
        )
    }
}