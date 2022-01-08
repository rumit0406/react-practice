import React from 'react';
import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import './App.css'
// import Checkboxes from './components/Checkboxes'
// import ContactCard from './components/ContactCard';
// import contacts from './objects/contacts'
// import JokeCard from './components/JokeCard';
// import jokes from './objects/jokes'
// import toDoItems from './objects/toDoItems'
// import ToDoItem from './components/ToDoItem'
// import TravelForm from './components/TravelForm'
import MemeGenerator from './components/MemeGenerator'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    )
  }
}

export default App;
