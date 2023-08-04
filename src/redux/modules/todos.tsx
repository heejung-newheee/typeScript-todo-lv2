import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../model/todo';
import shortid from 'shortid';

const initialState: Todo[] = [
    {
        id: '1',
        title: '타입스크립트 lv2과제',
        contents: '리덕스 툴킷 사용 Todo 리스트 typescript로 만들기 - 머리속이 뒤죽박죽 너무 어렵따~~ 차근차근 정리를 해보자',
        isDone: false
    },
    {
        id: '2',
        title: '타입스크립트 lv1과제',
        contents: 'react lv1 과제 typescript로 만들기',
        isDone: true
    }
];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            // return [...state, action.payload];
            state.push(action.payload); // immer 기능
        },
        delTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        switchTodo: (state, action: PayloadAction<string>) => {
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
