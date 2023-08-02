import React, { useState } from 'react';
import { Todo } from '../../model/todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { addTodo } from '../../redux/modules/todos';
import shortid from 'shortid';

interface FormProps {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Input = () => {
    // const todos = useSelector((state: RootState) => {
    //     return state.todoList;
    // });
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');

    // onChange
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     if (e.target.name === 'title') {
    //         setTitle(e.target.value);
    //     }
    //     if (e.target.name === 'contents') {
    //         setContents(e.target.value);
    //     }
    // };
    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newTodo: Todo = {
            id: shortid.generate(),
            title: title,
            contents: contents,
            isDone: false
        };
        dispatch(addTodo(newTodo));

        setTitle('');
        setContents('');
    };
    return (
        <form onSubmit={submitHandler}>
            <label>제목</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <label>내용</label>
            <input
                type="text"
                name="contents"
                value={contents}
                onChange={(e) => {
                    setContents(e.target.value);
                }}
            />
            <button>등록</button>
        </form>
    );
};

export default Input;
