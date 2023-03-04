import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

import { toggleTodo , updateTodo , deleteTodo} from "../redux/actions";

const Todo = ({ todo }) => {
  const [text, setText] = useState(todo.data);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing(prevState => !prevState);

    dispatch(updateTodo(todo._id , text));
  }
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  // const handleOnClickTrash = (e) => {
  //   e.preventDefault();
  //   dispatch(deleteTodo(todo._id))
  // }

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form action="" style={{ display: editing ? "inline" : "none" }} onSubmit= {onFormSubmit}>
        <input
          type="text"
          value={text}
          onChange={onInputChange}
          className="edit-todo"
        />
      </form>
      <span className="icon">
        <FontAwesomeIcon
          icon="fa-solid fa-edit"
          onClick={() => setEditing((prevState) => !prevState)}
        />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => dispatch(deleteTodo(todo._id))}/>
      </span>
    </li>
  );
};

export default Todo;
