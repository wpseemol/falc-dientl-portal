import { Outlet } from 'react-router-dom';
import DashboardMenu from '../../Components/DashboardMenu/DashboardMenu';

export default function Dashboard() {
    return (
        <div className="flex gap-4 bg-[#F8F6F8] ">
            <DashboardMenu />

            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}
