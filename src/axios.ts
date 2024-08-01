import axios, { AxiosResponse } from 'axios';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const todoData: Todo[] = [];

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    todoData.push(response.data);
    console.log(todoData);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

fetchData();
