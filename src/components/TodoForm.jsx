import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
//Redux is helpful for storing data
const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));
    setText('')
  };
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="What's on your mind today?"
          onChange={onInputChange}
          value={text}
        />
      </form>
    </div>
  );
};

export default TodoForm;
