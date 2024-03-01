import { Outlet } from 'react-router-dom';
import DashboardMenu from '../../Components/DashboardMenu/DashboardMenu';

export default function Dashboard() {
    return (
        <div className="flex gap-3 ">
            <DashboardMenu />

            <div className="sm:flex sm:gap-2">
                <Outlet />
            </div>
        </div>
    );
}
