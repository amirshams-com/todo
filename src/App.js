import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import todoStore from "./stores/TodoStore";
// import sections
import TodoEntry from "./Components/TodoEntry";
import TodoItems from "./Components/TodoItems";


@observer
class App extends Component {
    render() {
        return [
            <div id="todoapp" className="todoapp">
                {/* your code here */}
               <TodoEntry/>
               <TodoItems/>
             
            </div>,
            <footer className="info">
                <p>Written by <a href="#">Amir Shams</a></p>
                <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
            </footer>
        ]
    }
}


export default App;
