import React from "react";

function ToDoItem(props) {
  const itemStyle = {};
  if (props.checked) {
    itemStyle.textDecoration = "line-through";
  }
  return (
    <span style = {itemStyle}>
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