import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SingUp/SingUp';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="sing-up" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
}
