import React from "react"
import {Component} from "react"
import {observer} from "mobx-react"

 class TodoLogs extends Component{
    sorts=["All","Active","Completed"];
    activesort="All";
    render(){
        return(
            <div className="footer">
               <span class="todo-count"><strong>{this.props.leftitem}</strong> item left</span>
               
                <ul class="filters">
                    {
                        this.sorts.map(data=>{
                            return (
                               this.activesort===data ?
                               <li><a href="#" className="selected" onClick={()=>{this.props.sort(data)}} >{data}</a></li>
                               :
                               <li><a href="#" onClick={()=>{this.props.sort(data);this.activesort=data}} >{data}</a></li>
                            )
                        })
                    }
                </ul>
                <button class="clear-completed" onClick={this.props.clear}>Clear completed</button>
              
            </div>
        )
    }
}
export default TodoLogs;