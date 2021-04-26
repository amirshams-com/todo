import React from "react"
import {Component} from "react"
import {observer} from "mobx-react"
@observer
class TodoItem extends Component{
    state={
        display:"none"
    }
    toggle=()=>{
       this.props.todo.toggle()
    }

    render(){
       
        const todo=this.props.todo;
        return(
            <li   className={todo.completed===true ?  "completed"    :  "" }>
                        <div className="view" onMouseEnter={()=>{ this.setState({"display":"block"})}}  onMouseLeave={()=>{ this.setState({"display":"none"})}} >
                            <input type="checkbox" className="toggle" value="0"  checked={todo.completed} onChange={this.toggle}></input>
                            <label>{todo.title}</label>
                            <button className="destry" style={{display:this.state.display}} onClick={this.props.remove} >x</button>
                        </div>
                    </li>
        )
    }
}
export default TodoItem;