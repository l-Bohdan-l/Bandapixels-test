import { configureStore } from '@reduxjs/toolkit';
// import {createSlice} from '@reduxjs/toolkit';
import { todoListApi } from '../services/todoListApi';

export const store = configureStore({
    reducer: {
        [todoListApi.reducerPath]: todoListApi.reducer
        // users: {},
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoListApi.middleware),
});

// export const todoListSlice = createSlice({
//     name: 'todoList',
//     initialState: {
//         todoList: [{
//             id: 1,
//             title: 'Todo 1',
//         }],
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         getTodoListRequest: (state) => {
//             state.loading = true;
//         },
//         getTodoList: (state, action) => {
//             state.todoList = action.payload;
//             state.loading = false;
//         },
//         getTodoListFailure: (state, action) => {
//             state.error = action.payload;
//             state.loading = false;
//         }
//     }
// }
// );

// export  const { getTodoListRequest, getTodoList, getTodoListFailure } = todoListSlice.actions;

// export const store = configureStore({
//     reducer: {
//         todoList: todoListSlice.reducer,
//     }
// });
    