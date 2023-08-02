import React, { useState } from 'react';
import { Todo } from '../../model/todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import shortid from 'shortid';
import { styled } from 'styled-components';
import Button, { BtnStyle, BtnType } from './Button';

const Input = () => {
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
        <StInputForm onSubmit={submitHandler}>
            <StInputWrap>
                <StLabel>제목</StLabel>
                <StInput
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <StLabel>내용</StLabel>
                <StInput
                    type="text"
                    name="contents"
                    value={contents}
                    onChange={(e) => {
                        setContents(e.target.value);
                    }}
                />
                <Button type="submit" btnType={BtnType.BTN_SUBMIT} btnStyle={BtnStyle.BTN_BASIC}>
                    등록하기
                </Button>
            </StInputWrap>
        </StInputForm>
    );
};

export default Input;

const StInputForm = styled.form`
    background: #efefef;
    padding: 20px;
    border-radius: 5px;
`;
const StInputWrap = styled.div`
    margin: 10px 0;
`;
const StLabel = styled.label`
    /* display: none; */
    margin-right: 5px;
`;
const StInput = styled.input`
    padding: 15px 10px;
    margin-right: 15px;
    border: none;
    border: solid 1px #ddd;
    border-radius: 5px;
    &:active,
    &:focus {
        border: solid 1px #badf76;
    }
`;
