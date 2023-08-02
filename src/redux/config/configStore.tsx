import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../modules/todos';

const store = configureStore({
    reducer: {
        todoList: todoListSlice
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
