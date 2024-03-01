import { NavLink } from 'react-router-dom';

export default function DashboardMenu() {
    const dashboardMenus = [
        { id: 1, path: '/dashboard', menu: 'Dashboard' },
        { id: 2, path: '/dashboard/application', menu: 'Application' }, // Corrected menu name
        { id: 3, path: '/dashboard/new-application', menu: 'New Application' },
        { id: 4, path: '/dashboard/profile-setting', menu: 'Profile Setting' },
        { id: 5, path: '/dashboard/support', menu: 'Support' },
    ];

    return (
        <div className="bg-[#202024] p-2 text-neutral-300 h-screen">
            <ul className="">
                {dashboardMenus.map((menu) => (
                    <li key={menu.id} className="capitalize my-3">
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isActive ? 'active' : isPending ? 'pending' : ''
                            }
                            to={menu.path}>
                            {menu.menu}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
