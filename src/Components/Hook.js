import { useState } from 'react'
import TodoItem from './TodoItem'
import { Button} from 'react-bootstrap';
function Hook() {
    const [todos, setTodos] = useState([])
    const [addTodos, setAddTodos] = useState("")

    const addItem = (addTodos) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                value: addTodos
            }
        ])
    }
    const deleteItem = (todo) => {
        setTodos(todos.filter((e) => e.id !== todo.id))
    }
    return (
        <div>
            <div>
                <h3>Add an Item...</h3>
                <br />
                <input
                    type="text"
                    placeholder='Type item here...'
                    required="required"
                    value={addTodos}
                    onChange={(event) => setAddTodos(event.target.value)}
                />
                <Button variant="success"
                    onClick={(e) => {
                        addItem(addTodos)
                        setAddTodos("")
                    }
                    }
                >
                    Add
                </Button>
                <br />
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteItem={deleteItem}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Hook;