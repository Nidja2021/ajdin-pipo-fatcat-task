import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Home from '@/pages/Home';
import PostsPage from '@/pages/Posts';
import UsersPage from '@/pages/UsersPage';

import './styles.css';

function App() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </>
    );
}

export default App;
