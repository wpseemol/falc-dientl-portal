import { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import DashboardUser from '../DashboardUser/DashboardUser';
import MenuIcon from '../MenuIcon/MenuIcon';

import addApplication from '../../assets/icon/add-employee.png';
import dashboardIcon from '../../assets/icon/analysis.png';
import application from '../../assets/icon/monitor.png';
import setting from '../../assets/icon/process.png';
import support from '../../assets/icon/technical-support.png';

export default function DashboardMenu() {
    const [isOpen, setIsClose] = useState(false);

    const dashboardMenus = [
        { id: 1, path: '/dashboard', menu: 'Dashboard', icon: dashboardIcon },
        {
            id: 2,
            path: '/dashboard/application',
            menu: 'Application',
            icon: application,
        },
        {
            id: 3,
            path: '/dashboard/new-application',
            menu: 'New Application',
            icon: addApplication,
        },
        {
            id: 4,
            path: '/dashboard/profile-setting',
            menu: 'Profile Setting',
            icon: setting,
        },
        { id: 5, path: '/dashboard/support', menu: 'Support', icon: support },
    ];

    return (
        <>
            <div
                className={`${
                    isOpen
                        ? 'w-0 duration-150'
                        : '2xl:w-2/12 xl:w-3/12 lg:w-2/6  md:w-2/5 sm:w-2/3 w-4/6 duration-300 p-2'
                } bg-[#202024] text-neutral-300 h-screen md:relative fixed top-0 left-0`}>
                <div
                    className=" border w-fit h-fit bg-neutral-100 p-3 md:hidden
                    absolute -right-12 top-2 rounded-r-lg shadow-xl
                "
                    onClick={() => setIsClose(!isOpen)}>
                    <MenuIcon isTrue={!isOpen} />
                </div>

                <div className="h-full flex flex-col justify-between">
                    <div className="overflow-hidden">
                        <div className="bg-[#37383b]"></div>
                        <ul className=" ">
                            {dashboardMenus.map((menu) => (
                                <li key={menu.id} className="capitalize m-2 ">
                                    <NavLink
                                        className={`${({
                                            isActive,
                                            isPending,
                                        }) =>
                                            isActive
                                                ? 'active'
                                                : isPending
                                                ? 'pending'
                                                : ''} hoverActive p-2 pl-6 w-full flex items-center gap-2`}
                                        to={menu.path}>
                                        <figure className="w-5">
                                            <img
                                                src={menu.icon}
                                                alt={menu.menu}
                                            />
                                        </figure>

                                        <span>{menu.menu}</span>
                                    </NavLink>
                                </li>
                            ))}

                            <li className="capitalize m-2">
                                <button className="flex items-center gap-2 font-bold hoverActive p-2 pl-6 w-full">
                                    <span className="text-white">
                                        <BiLogOutCircle />
                                    </span>{' '}
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                    <DashboardUser drawer={isOpen} />
                </div>
            </div>
        </>
    );
}
