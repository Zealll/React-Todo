import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addList}>
            <input 
                type="text"
                value={props.task}
                placeholder="...ToDo"
            />
            <button type="submit">Add List</button>
        </form>
    )
}

export default TodoForm