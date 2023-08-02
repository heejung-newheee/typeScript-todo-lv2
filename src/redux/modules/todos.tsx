import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../model/todo';
import shortid from 'shortid';

// export const __addTodo = createAsyncThunk('ADD_TODO', (payload: Todo[], thunkAPI) => {
//     setTimeout(() => {
//         thunkAPI.dispatch(addTodo(payload));
//     }, 3000);
// });

// export const __delTodo = createAsyncThunk('DEL_TODO', (payload: string, thunkAPI) => {
//     setTimeout(() => {
//         thunkAPI.dispatch(addTodo(payload));
//     }, 3000);
// });
// export const __switchTodo = createAsyncThunk('SWITCH_TODO', (payload: string, thunkAPI) => {
//     setTimeout(() => {
//         thunkAPI.dispatch(addTodo(payload));
//     }, 3000);
// });

const initialState: Todo[] = [
    {
        id: shortid.generate(),
        title: '타입스크립트 lv2과제',
        contents: '리덕스 툴킷 사용 Todo 리스트 typescript로 만들기',
        isDone: false
    },
    {
        id: shortid.generate(),
        title: '타입스크립트 lv1과제',
        contents: 'react lv1 과제 typescript로 만들기',
        isDone: true
    }
];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        //   }
        addTodo: (state, action) => {
            return [...state, action.payload];
        },
        delTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        switchTodo: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        }
    }
});

export default todoListSlice.reducer;
export const { addTodo, delTodo, switchTodo } = todoListSlice.actions;
