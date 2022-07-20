import { configureStore } from '@reduxjs/toolkit';
// import { todoListApi } from '../services/todoListApi';

// export const store = configureStore({
//     reducer: {
//         [todoListApi.reducerPath]: todoListApi.reducer
//         // users: {},
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(todoListApi.middleware),
// });

export const store = configureStore({
    reducer: {}
});
    