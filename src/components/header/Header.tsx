import { styled } from 'styled-components';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <StHeader>
            <Layout>
                <h1>
                    <Link to={'/'}>My Todo List</Link>
                </h1>
                <span>TypeScript - React - lv.2</span>
            </Layout>
        </StHeader>
    );
};

export default Header;

const StHeader = styled.header`
    background-color: aliceblue;
`;
