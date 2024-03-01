import { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../MenuIcon/MenuIcon';

export default function DashboardMenu() {
    const [isOpen, setIsClose] = useState(false);

    const dashboardMenus = [
        { id: 1, path: '/dashboard', menu: 'Dashboard' },
        { id: 2, path: '/dashboard/application', menu: 'Application' }, // Corrected menu name
        { id: 3, path: '/dashboard/new-application', menu: 'New Application' },
        { id: 4, path: '/dashboard/profile-setting', menu: 'Profile Setting' },
        { id: 5, path: '/dashboard/support', menu: 'Support' },
    ];

    return (
        <>
            <div
                className={`${
                    isOpen
                        ? 'w-0 duration-150'
                        : 'lg:w-2/12  md:w-2/5 sm:w-2/3 w-4/6 duration-300 p-2'
                } bg-[#202024] text-neutral-300 h-screen md:relative fixed top-0 left-0`}>
                <div
                    className=" border w-fit h-fit bg-neutral-100 p-3 sm:hidden
                    absolute -right-12 top-2 rounded-r-lg shadow-xl
                "
                    onClick={() => setIsClose(!isOpen)}>
                    <MenuIcon isTrue={!isOpen} />
                </div>

                <ul className="overflow-hidden ">
                    {dashboardMenus.map((menu) => (
                        <li key={menu.id} className="capitalize m-4 w-full">
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? 'active'
                                        : isPending
                                        ? 'pending'
                                        : 'hoverActive p-2 w-full'
                                }
                                to={menu.path}>
                                {menu.menu}
                            </NavLink>
                        </li>
                    ))}

                    <li className="capitalize m-4">
                        <button className="flex items-center gap-2 font-bold hoverActive p-2 w-full">
                            <span className="text-white">
                                <BiLogOutCircle />
                            </span>{' '}
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
