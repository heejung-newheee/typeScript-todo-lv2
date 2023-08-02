import { styled } from 'styled-components';
import Layout from '../common/Layout';

const Header = () => {
    return (
        <StHeader>
            <Layout>
                <h1>My Todo List</h1>
                <span>TypeScript - React - lv.2</span>
            </Layout>
        </StHeader>
    );
};

export default Header;

const StHeader = styled.header`
    background-color: aliceblue;
`;
