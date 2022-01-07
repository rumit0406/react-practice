import React from 'react';
// import Navbar from './components/Navbar'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import './App.css'
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
    this.state = {toDoItems}
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(itemid) {
    // console.log(itemid)
    this.setState(prevState => {
      const newState = prevState.toDoItems.map(item => {
        if (item.id === itemid) {
          item.completed = !item.completed
        } 
        return item;
      })
      return newState;
    })
    // console.log(this.state)
  }

  render() {
    const component = this.state.toDoItems.map(item => {
      return (
        <ToDoItem 
          checked = { item.completed}
          changeHandler = {this.changeHandler}
          task = {item.task}
          id = {item.id}
          key = {item.id}
        />
      )
    })
    // console.log(component);
    return component;
  }
}

export default App;
