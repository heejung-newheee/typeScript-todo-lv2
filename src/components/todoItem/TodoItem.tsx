import React from 'react';
import { Todo } from '../../model/todo';
import { useDispatch } from 'react-redux';
import { delTodo, switchTodo } from '../../redux/modules/todos';

type TodoItemProps = {
    todo: Todo;
};
const TodoItem = ({ todo }: TodoItemProps) => {
    const dispatch = useDispatch();
    const switchTodoHandler = (id: string): void => {
        dispatch(switchTodo(id));
    };

    const delTodoHandler = (id: string): void => {
        dispatch(delTodo(id));
    };
    return (
        <div>
            <div>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                    onClick={() => {
                        alert('dd');
                        delTodoHandler(todo.id);
                    }}>
                    삭제
                </button>
                <button
                    onClick={() => {
                        switchTodoHandler(todo.id);
                    }}>
                    {todo.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
