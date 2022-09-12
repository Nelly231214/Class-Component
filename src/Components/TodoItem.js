import React from 'react'
import { Button,ListGroup } from 'react-bootstrap';

function TodoItem({todo, deleteItem}) {
  return (
    <div>
          <ListGroup.Item variant="light">
                    <li>
                        {todo.value}
                        <Button variant="outline-success"
                        onClick={()=>deleteItem(todo)}
                        >
                            X
                        </Button>
                    </li>
            
        </ListGroup.Item>
    </div>
  )
}

export default TodoItem