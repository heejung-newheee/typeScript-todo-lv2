import TodoList from '../todoList/TodoList';
import Input from '../common/Input';
import Layout from '../common/Layout';
import { styled } from 'styled-components';

const Main = () => {
    return (
        <StMain>
            <Layout>
                <Input />
                <TodoList isDone={false} />
                <TodoList isDone={true} />
            </Layout>
        </StMain>
    );
};

export default Main;

const StMain = styled.main``;
