import FromBg from '../../Components/FromBg/FromBg';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import FromError from '../../Components/FromError/FromError';
import LogoSection from '../../Components/LogoSection/LogoSection';
import { useErrorContext } from '../../context/ErrorMassageContext';

export default function Login() {
    const [isPassShow, setIsPassShow] = useState(false);

    const [inputObj, setInputObj] = useState({ email: '', password: '' });

    const { isError, setIsError, setErrorMassage } = useErrorContext();

    const handelLoginFromSubmit = (event) => {
        event.preventDefault();

        //form validation
        if (!inputObj.email && !inputObj.password) {
            setIsError(true);
            setErrorMassage('Please Input Email or Password');
            return;
        } else {
            if (!inputObj.password) {
                setIsError(true);
                setErrorMassage('Please Input Password');
                return;
            } else {
                if (inputObj.password.length <= 6) {
                    setIsError(true);
                    setErrorMassage('Password must be minimum 6 character');
                    return;
                }
            }

            if (!inputObj.email) {
                setIsError(true);
                setErrorMassage('Please Input Email');
                return;
            }
        }
        //form validation

        console.log(inputObj);

        //login function
    };

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputObj({ ...inputObj, [name]: value });

        if (isError) {
            setTimeout(() => {
                setIsError(false);
            }, 700);
        }
    };

    return (
        <FromBg>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FromError />

                <div className="bg-white rounded-sm ">
                    {/* this is logo section */}
                    <LogoSection />

                    <form action="" onSubmit={handelLoginFromSubmit}>
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
                            value={inputObj.email}
                            placeholder="example@any.com"
                            className="focus:outline-none px-6 w-screen sm:w-96 py-1 text-xl"
                            onChange={handelChange}
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
                                value={inputObj.password}
                                placeholder={isPassShow ? 'password' : '******'}
                                className="focus:outline-none px-6 py-1 text-xl w-screen sm:w-96"
                                onChange={handelChange}
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
                        {`Don't have an account?`}{' '}
                        <Link to="/sing-up" className="font-bold">
                            Sing Up
                        </Link>
                    </div>
                </div>
            </div>
        </FromBg>
    );
}
