import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import FromBg from '../../Components/FromBg/FromBg';
import LogoSection from '../../Components/LogoSection/LogoSection';

export default function SingUp() {
    const [isPassShow, setIsPassShow] = useState(false);

    return (
        <>
            <FromBg>
                <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm -mt-3">
                    {/* this is logo section */}
                    <LogoSection />

                    <form action="">
                        <label
                            htmlFor="fName"
                            className="text-sm font-light px-6 mt-2">
                            First Name
                        </label>
                        <br />

                        <input
                            type="text"
                            name="fName"
                            id="fName"
                            placeholder="Benjamin"
                            className="focus:outline-none px-6 py-1 mb-1 text-xl w-screen sm:w-96"
                        />

                        <hr />

                        <label
                            htmlFor="lName"
                            className="text-sm font-light px-6 mt-2">
                            Last Name
                        </label>
                        <br />

                        <input
                            type="text"
                            name="lName"
                            id="lName"
                            placeholder="James"
                            className="focus:outline-none px-6 py-1 mb-1 text-xl w-screen sm:w-96"
                        />

                        <hr />

                        <label
                            htmlFor="email"
                            className="text-sm font-light px-6 mt-2">
                            E-mail
                        </label>
                        <br />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@any.com"
                            className="focus:outline-none px-6 py-1 mb-1 text-xl w-screen sm:w-96"
                        />

                        <hr />

                        <label
                            htmlFor="password"
                            className="text-sm font-light px-6 mt-2">
                            Password
                        </label>

                        <br />

                        <div className="relative group">
                            <input
                                type={isPassShow ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder={isPassShow ? 'password' : '******'}
                                className="focus:outline-none px-6 py-1 text-xl mb-1 w-screen sm:w-96 "
                            />
                            <span
                                onClick={() => {
                                    setIsPassShow(!isPassShow);
                                }}
                                className="absolute right-6 top-2 hidden group-hover:inline-block cursor-pointer text-xl">
                                {isPassShow ? <BiSolidHide /> : <BiSolidShow />}
                            </span>
                        </div>

                        <hr />
                        <input
                            type="submit"
                            value="Login"
                            className="w-full py-4 bg-[#03AEF0] text-white font-bold"
                        />
                    </form>
                    <div className="text-[#03AEF0] text-sm py-3 text-center">
                        {`Have account`}{' '}
                        <Link to="/login" className="font-bold">
                            Login
                        </Link>
                    </div>
                </div>
            </FromBg>
        </>
    );
}
