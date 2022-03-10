import axios from "axios";

export const fetchTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");

export const fetchTodo = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
