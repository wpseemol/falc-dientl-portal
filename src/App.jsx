import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SingUp/SingUp';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import ErrorMassageContext from './context/ErrorMassageContext/ErrorMassageContext';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivetRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<ErrorMassageContext />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="sing-up" element={<SingUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
