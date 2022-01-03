import React from 'react';
// import Navbar from './components/Navbar'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
import './App.css'
// import Checkboxes from './components/Checkboxes'
// import ContactCard from './components/ContactCard';
// import contacts from './objects/contacts'
// import JokeCard from './components/JokeCard';
// import jokes from './objects/jokes'
import toDoItems from './objects/toDoItems'
import ToDoItem from './components/ToDoItem'
class App extends React.Component {
  constructor() {
    super();
    this.state = toDoItems[0]; //todoitems is an array
    this.changeHandler = this.changeHandler.bind(this);
    console.log(this.state);
  }

  changeHandler(id) {
    console.log(this.state)
    this.setState(prevState => {
      return {
        // id: prevState.id,
        // task: prevState.task,
        completed: !prevState.completed
      }
    })
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Inside app.js</h1>
        <input type="checkbox" id={this.state.id} checked={this.state.completed}
        onChange={this.changeHandler}/>
        <label for={this.state.id}>{this.state.task}</label>
      </div>
    )
  }
}

export default App;
