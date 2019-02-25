import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ""
    };
  }

  addTask = e => {
    e.preventDefault();
    if (this.state.input === '' ) {
    return null
    }
      
    const newTask = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask],
      input: ""
    });
  };

  toggleTask = taskId => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (taskId === task.id) {
          return {...task, completed: !task.completed}
        }
        return task;
      })
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearTask = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="appDiv">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTask={this.addTask}
          handleChange={this.handleChange}
          clearTask={this.clearTask}
          input={this.state.input}
        />
        <TodoList list={this.state.todos} toggleTask={this.toggleTask} />             
      </div>
    );
  }
}

export default App;
