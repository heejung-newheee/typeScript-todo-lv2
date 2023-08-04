import TodoItem from '../todoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { styled } from 'styled-components';
type TodoProps = {
    isDone: boolean;
};
const TodoList = ({ isDone }: TodoProps) => {
    const todoList = useSelector((state: RootState) => {
        return state.todoList;
    });
    return (
        <StListWrap>
            <StTitle>{isDone ? '✅ Done ' : '🟩 To Do '}</StTitle>
            <StItemWrap>
                {todoList
                    .filter((todo) => todo.isDone === isDone)
                    .map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
            </StItemWrap>
        </StListWrap>
    );
};

export default TodoList;

const StListWrap = styled.div`
    padding: 30px 0;
`;

const StTitle = styled.h2`
    padding: 25px 0 20px;
`;
const StItemWrap = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;
