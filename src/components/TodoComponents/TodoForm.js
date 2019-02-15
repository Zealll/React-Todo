import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input 
                type="text"
                onChange={props.handleChange}
                value={props.input}
                name="input"
                placeholder="...ToDo"
            />
            <div className="buttonDiv">
                <button type="submit">Add List</button>
                <button onClick={props.clearTask}>Clear List</button>  
            </div>
        </form>
    )
}

export default TodoForm