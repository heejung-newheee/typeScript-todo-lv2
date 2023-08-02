import Layout from '../common/Layout';
import { styled } from 'styled-components';

const Footer = () => {
    return (
        <StFooter>
            <Layout>
                <StFootTit>React 6</StFootTit>
                <StFootInfo>
                    <span>TypeScript - React - lv.1</span>
                    <span>Yoo heejung</span>
                </StFootInfo>
            </Layout>
        </StFooter>
    );
};

export default Footer;

const StFooter = styled.footer`
    padding: 20px 0;
    margin-top: 30px;
    background-color: #efefef;
`;
const StFootTit = styled.h4``;
const StFootInfo = styled.p`
    display: flex;
    justify-content: space-between;
`;
