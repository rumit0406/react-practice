import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('inside toDoitem');
  }
  render() {
    console.log(this.state);
    return (
      <h1>asodifjdsoa</h1>
    )
  }
}

export default ToDoItem;