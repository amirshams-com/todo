import {observable, action} from 'mobx'
import { observer } from 'mobx-react'

export default class TodoModel {
    id
    store
    @observable title
    @observable completed

    constructor(store,title,completed,id){
        this.store=store;
        this.title=title;
        this.completed=completed;
        this.id=id;

    }
    
    @action toggle(){
        this.completed=!this.completed;
    }
}

