import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return data;
};

export const getTodo = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return data;
};
