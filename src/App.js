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
// import toDoItems from './objects/toDoItems'
// import ToDoItem from './components/ToDoItem'
import TravelForm from './components/TravelForm'
import Alert from '@mui/material/Alert';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Rumit',
      lastName: 'Garg',
      age: 20,
      gender: 'male',
      location: 'Delhi',
      vegetarian: false,
      kosher: false,
      lactoseFree: false,
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(name, value)
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    // alert('A name was submitted: ' + this.state.firstName + this.state.lastName)
    this.setState({ submitted: true });
    event.preventDefault();
  }

  render() {
    const {firstName, lastName, age, gender, location} = this.state;
    return (
      <div>
        <TravelForm
          data = {this.state}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        { this.state.submitted && 
        <p>Your name is {firstName} {lastName} and your age is {age}. Your sex is {gender}. You are travelling to {location}.</p>}
      </div>
    )
  }
}

export default App;
