import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
type TodoProps = {
    isDone: boolean;
};
const TodoList = ({ isDone }: TodoProps) => {
    const todoList = useSelector((state: RootState) => {
        return state.todoList;
    });
    return (
        <div>
            <h2>{isDone ? '✅ Done ' : '🟩 To Do '}</h2>
            <div>
                {todoList
                    .filter((todo) => todo.isDone === isDone)
                    .map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
            </div>
        </div>
    );
};

export default TodoList;
