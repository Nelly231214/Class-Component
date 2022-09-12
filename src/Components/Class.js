import React, {Component} from 'react'
import {Link } from "react-router-dom";
import { Button,ListGroup } from 'react-bootstrap';

class Class extends Component {
    state= {
        newItem:"",
        list:[]
    }
    updateInput(key,value) {
        this.setState({
            [key]:value
        })
    }
    addItem() {
        const newItem={
            id: 1+ Math.random(),
            value:this.state.newItem.slice()
        }
        const list= [...this.state.list]
        list.push(newItem)
        this.setState({
            list,
            newItem:""
        })
    }
    deleteItem(id) {
        const list= [...this.state.list]
        const updatedList=list.filter((item)=>item.id !==id)
        this.setState({list:updatedList})
    }
    render() {
        return (
            <div>
                <div>
                    <form>
                    <h3>Add an Item...</h3>
                    <br/>
                    <input 
                    type="text"
                    placeholder='Type item here...'
                    required="required"
                    value={this.state.newItem}
                    onChange={(event)=>this.updateInput("newItem", event.target.value)}
                    />
                    <Button variant="success"
                    onClick={()=>this.addItem()}
                    >
                        Add
                    </Button>
                    <br/>
                    <ListGroup.Item variant="light">
                        {this.state.list.map(item=> {
                            return (
                                <li key={item.id}>
                                    {item.value}
                                    <Button variant="outline-success"
                                    onClick={()=>this.deleteItem(item.id)}
                                    >
                                        X
                                    </Button>
                                </li>
                            )
                        })}
                    </ListGroup.Item>
                    <Button variant="success"> 
                        <Link to="/hook">Second Page</Link>
                    </Button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Class