import React from 'react';

const Todo = props => {
    return (
        <div className={`todo-style${props.tasks.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.tasks.id)}>
            <div className="hOneDiv">
                <h1>{props.tasks.task}</h1>
            </div>
            
        </div>
    )
}

export default Todo
