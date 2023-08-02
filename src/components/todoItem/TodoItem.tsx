import React from 'react';
import { Todo } from '../../model/todo';
import { useDispatch } from 'react-redux';
import { delTodo, switchTodo } from '../../redux/modules/todos';
import Button, { BtnStyle, BtnType } from '../common/Button';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

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
        <StTodoItem>
            <StTitle>{todo.title}</StTitle>
            <StConArea>{todo.contents}</StConArea>
            <StDetailBtn to={`/detail/${todo.id}`}>상세보기</StDetailBtn>
            <StBtnWrap>
                <Button
                    type="button"
                    btnType={BtnType.BTN_DELETE}
                    btnStyle={BtnStyle.BTN_HALF}
                    onClick={() => {
                        delTodoHandler(todo.id);
                    }}>
                    삭제
                </Button>

                {todo.isDone ? (
                    <Button
                        type="button"
                        btnType={BtnType.BTN_CANCEL}
                        btnStyle={BtnStyle.BTN_HALF}
                        onClick={() => {
                            switchTodoHandler(todo.id);
                        }}>
                        취소
                    </Button>
                ) : (
                    <Button
                        type="button"
                        btnType={BtnType.BTN_DONE}
                        btnStyle={BtnStyle.BTN_HALF}
                        onClick={() => {
                            switchTodoHandler(todo.id);
                        }}>
                        완료
                    </Button>
                )}
            </StBtnWrap>
        </StTodoItem>
    );
};

export default TodoItem;
const StTodoItem = styled.div`
    width: calc((100% - 30px) / 4);
    border: solid 1px #ddd;
    padding: 10px;
    border-radius: 10px;
`;
const StTitle = styled.h3`
    padding: 5px 0;
`;
const StConArea = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-height: 2.8em;
    min-height: 2.8em;
    line-height: 1.4em;
    margin: 10px 0;
`;
const StDetailBtn = styled(Link)`
    font-weight: bold;
    margin-bottom: 20px;
    width: 100px;
`;
const StBtnWrap = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0 0;
`;
