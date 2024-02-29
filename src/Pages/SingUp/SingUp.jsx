import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import FromBg from '../../Components/FromBg/FromBg';
import FromError from '../../Components/FromError/FromError';
import LogoSection from '../../Components/LogoSection/LogoSection';
import { useErrorContext } from '../../context/ErrorMassageContext';

export default function SingUp() {
    const [isPassShow, setIsPassShow] = useState(false);

    const emptyInputObj = {
        fName: '',
        lName: '',
        email: '',
        password: '',
    };

    const [inputObj, setInputObj] = useState(emptyInputObj);

    const { isError, setIsError, setErrorMassage } = useErrorContext();

    const handelSingUpSubmit = (event) => {
        event.preventDefault();

        if (
            !inputObj.fName &&
            !inputObj.lName &&
            !inputObj.email &&
            !inputObj.password
        ) {
            setErrorMassage('Please input every file then try submit !');
            setIsError(true);
            return;
        } else {
            if (!inputObj.email) {
                setErrorMassage('Please input valid email!');
                setIsError(true);
                return;
            }
            if (!inputObj.password) {
                setErrorMassage('Please input your passWord');
                setIsError(true);
                return;
            } else {
                if (inputObj.password.length <= 6) {
                    setErrorMassage('Password must be minimum 6 character');
                    setIsError(true);
                    return;
                }
            }
        }

        console.log(inputObj);

        setInputObj(emptyInputObj);
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
        <>
            <FromBg>
                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FromError />

                    <div className="bg-white rounded-sm">
                        {/* this is logo section */}
                        <LogoSection />

                        <form action="" onSubmit={handelSingUpSubmit}>
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
                                onChange={handelChange}
                                value={inputObj.fName}
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
                                onChange={handelChange}
                                value={inputObj.lName}
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
                                onChange={handelChange}
                                value={inputObj.email}
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
                                    placeholder={
                                        isPassShow ? 'password' : '******'
                                    }
                                    className="focus:outline-none px-6 py-1 text-xl mb-1 w-screen sm:w-96 "
                                    onChange={handelChange}
                                    value={inputObj.password}
                                />
                                <span
                                    onClick={() => {
                                        setIsPassShow(!isPassShow);
                                    }}
                                    className="absolute right-6 top-2 hidden group-hover:inline-block cursor-pointer text-xl">
                                    {isPassShow ? (
                                        <BiSolidHide />
                                    ) : (
                                        <BiSolidShow />
                                    )}
                                </span>
                            </div>

                            <hr />
                            <input
                                type="submit"
                                value="Sing Up"
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
                </div>
            </FromBg>
        </>
    );
}
