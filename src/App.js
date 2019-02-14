import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './app.css'


const todos = []
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: todos,
      task: "", 
      
    }
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }
    
    this.setState({
      todos: [...this.state.todos, newTask],
      task: "",
    });
  
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 
  
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
        />
        <TodoList 
          list={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
