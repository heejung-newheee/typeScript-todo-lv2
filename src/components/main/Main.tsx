import TodoList from '../todoList/TodoList';
import Input from '../common/Input';

const Main = () => {
    return (
        <main>
            <Input />
            <div>
                <TodoList isDone={false} />
                <TodoList isDone={true} />
            </div>
        </main>
    );
};

export default Main;
