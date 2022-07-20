import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getTodoList = async () => {
    const response = await axios.get('/todos');
    return response.data;
};

export const todoListApi = createApi({
  reducerPath: 'todoList',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getTodoList: builder.query({
      query: () => 'todos/',
    }),
  }),
})

// export const { useGetTodoListQuery } = todoListApi