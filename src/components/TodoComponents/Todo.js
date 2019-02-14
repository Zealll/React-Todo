import React from 'react';

const Todo = props => {
    return (
        <div className="todo-style">
            <h1>{props.tasks.task}</h1>
        </div>
    )
}

export default Todo
