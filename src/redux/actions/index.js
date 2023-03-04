import React from "react";
import axios from "axios";

import { ADDNEW_TODO, GETALL_TODO  , TOGGLE_TODO , UPDATE_TODO , DELETE_TODO, TOGGLE_TABS} from "./type";

const API_URL = "http://localhost:8000";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addnewtodo", error.message);
  }
};
// that todo in axiospost is known as endpoints
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAlltodos", error.message);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAlltodos", error.message);
  }
};
export const updateTodo = (id , data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}` , {data});

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAlltodos", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);

    dispatch({type : DELETE_TODO , payload : res.data})
    
  } catch (error) {
    console.log("Error while calling deleteTodo" , error.message);
  }
}
export const toogleTabs = (tab) => async (dispatch) => {
  try {
    dispatch({type : TOGGLE_TABS  , selected : tab})
  } catch (error) {
    console.log("Error while connecting to the toggle tabs" , error.message)
  }
}