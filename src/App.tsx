import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageGeneratorApp from '@/components/PageGeneratorApp';

import './styles.css';

function App() {
    return (
        <>
            <ToastContainer />
            <PageGeneratorApp />
        </>
    );
}

export default App;
