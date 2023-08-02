import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/config/configStore';
import { Todo } from '../model/todo';
import Layout from '../components/common/Layout';
import Button, { BtnStyle, BtnType } from '../components/common/Button';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { delTodo, switchTodo } from '../redux/modules/todos';

const Detail = () => {
    const dispatch = useDispatch();
    const switchTodoHandler = (id: string): void => {
        dispatch(switchTodo(id));
    };

    const delTodoHandler = (id: string): void => {
        dispatch(delTodo(id));
    };
    const params = useParams();
    console.log(params);

    const todo = useSelector((state: RootState) => state.todoList.find((item: Todo) => item.id === params.id));
    if (!todo) {
        return <div>요청하신 todo는 없습니다</div>;
    }
    return (
        <>
            <Layout>
                <StBackBtn to="/">
                    <img src="/home.svg" alt="" /> 홈으로
                </StBackBtn>
                <StWrap>
                    <StTodoSection>
                        <p>제목</p>
                        <StContent>{todo.title}</StContent>
                        <p>내용</p>
                        <StContent>{todo.contents}</StContent>
                        <StState>완료 여부 : {todo?.isDone ? '완료' : '미완료'}</StState>
                        <StBtnWrap>
                            <Button
                                type="button"
                                btnType={BtnType.BTN_DELETE}
                                btnStyle={BtnStyle.BTN_BASIC}
                                onClick={() => {
                                    delTodoHandler(todo.id);
                                }}>
                                삭제
                            </Button>

                            {todo.isDone ? (
                                <Button
                                    type="button"
                                    btnType={BtnType.BTN_CANCEL}
                                    btnStyle={BtnStyle.BTN_BASIC}
                                    onClick={() => {
                                        switchTodoHandler(todo.id);
                                    }}>
                                    취소
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    btnType={BtnType.BTN_DONE}
                                    btnStyle={BtnStyle.BTN_BASIC}
                                    onClick={() => {
                                        switchTodoHandler(todo.id);
                                    }}>
                                    완료
                                </Button>
                            )}
                        </StBtnWrap>
                    </StTodoSection>
                    <StOtherTodo>
                        <ul>
                            <li>목록 다른 투두 리스트</li>
                            <li>목록 다른 투두 리스트</li>
                            <li>목록 다른 투두 리스트</li>
                        </ul>
                    </StOtherTodo>
                </StWrap>
            </Layout>
        </>
    );
};

export default Detail;
const StWrap = styled.div`
    min-height: calc(100vh - 350px);
    display: flex;
    gap: 20px;
`;
const StBackBtn = styled(Link)`
    display: block;
    padding: 0 0 20px;
`;
const StTodoSection = styled.div`
    padding: 30px;
    background-color: #f6f6f6;
    border-radius: 20px;
    position: relative;
    width: calc(75% - 20px);
`;

const StContent = styled.div`
    padding: 15px 0;
`;
const StState = styled.div`
    position: absolute;
    bottom: 30px;
`;

const StBtnWrap = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    display: flex;
    gap: 10px;
    margin: 10px 0 0;
`;
const StOtherTodo = styled.div`
    width: 25%;
    padding: 30px;
    border-radius: 20px;
    border: solid 3px #ddd;
`;
