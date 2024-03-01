import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Application from './Components/Application/Application';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import NewApplication from './Components/NewApplication/NewApplication';
import ProfileSetting from './Components/ProfileSetting/ProfileSetting';
import Support from './Components/Support/Support';
import Dashboard from './Pages/Dashboard/Dashboard';
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
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<DashboardComponent />} />
                        <Route
                            path="/dashboard/application"
                            element={<Application />}
                        />
                        <Route
                            path="/dashboard/new-application"
                            element={<NewApplication />}
                        />
                        <Route
                            path="/dashboard/profile-setting"
                            element={<ProfileSetting />}
                        />
                        <Route
                            path="/dashboard/support"
                            element={<Support />}
                        />
                    </Route>
                </Route>
                <Route element={<ErrorMassageContext />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="sing-up" element={<SingUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
