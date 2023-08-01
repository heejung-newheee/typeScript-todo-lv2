import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
