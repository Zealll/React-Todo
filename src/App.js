import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
// import TodoList from './components/TodoComponents/TodoList'


const todos = []
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: todos,
      task: "",
      // id: Date.now(),
      // completed: false,
    }
  }

  // addTask = e => {
  //   e.preventDefault();
  //   // console.log(e.target);

  //   const newTask = {
  //     task: this.state.task,
  //   }
  // };

  // this.setState({
  //   todos: [...this.state.todos, newTask],
  // });
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
