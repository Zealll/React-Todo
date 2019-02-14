import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input 
                type="text"
                onChange={props.handleChange}
                value={props.value}
                name="task"
                placeholder="...ToDo"
            />
            <button type="submit">Add List</button>
        </form>
    )
}

export default TodoForm