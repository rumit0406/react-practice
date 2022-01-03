import React from "react";

function ToDoItem(props) {
  return (
    <span>
      <input
        type = "checkbox"
        checked = {props.checked}
        onChange = {() => props.changeHandler(props.id)}
      />
        {props.task}
        <br/>
    </span>
  )
}

export default ToDoItem;