import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Todo from "./Todo";
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos);
  const currentTabs = useSelector((state) => state.currentTabs);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos =  () => {
    if(currentTabs === ALL_TODOS) {
      return todos;
    }
    else if(currentTabs === ACTIVE_TODOS) {
      return todos.filter(todo => !todo.done);
    }
    else if(currentTabs === DONE_TODOS) {
      return todos.filter(todo => todo.done)
    }
  }
  const removeDoneTodos = () => {
    todos.forEach(({done , _id}) => {
      if(done) {
        dispatch(deleteTodo(_id))
      }
    })
  }
  return (
    <article>
      <div>
        <Tabs currentTabs={currentTabs} />
        {
          //some() method tests whether at least one element in the array passes the test implemented by the provided function
          todos.some(todo => todo.done) ? (
            <button className="button clear"
            onClick={removeDoneTodos}>
              Remove done works
            </button>
          ) : null
        }
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
