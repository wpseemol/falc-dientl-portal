import LogoSection from './LogoSection';

export default function LoginFrom() {
    return (
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm -mt-3">
            {/* this is logo section */}
            <LogoSection />

            <form action="">
                <label htmlFor="email" className="text-xs font-light px-6 mt-2">
                    E-mail
                </label>
                <br />

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@any.com"
                    className="focus:outline-none px-6 py-1 text-xl"
                />

                <hr />

                <label
                    htmlFor="password"
                    className="text-xs font-light px-6 mt-2">
                    Password
                </label>

                <br />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******"
                    className="focus:outline-none px-6 py-1 text-xl"
                />

                <hr />
                <input
                    type="submit"
                    value="Login"
                    className="w-full py-4 bg-[#03AEF0] text-white font-bold"
                />
            </form>
            <div className="text-[#03AEF0] text-sm py-3 text-center">
                {`Don't have an account?`} <button>Sing Up</button>
            </div>
        </div>
    );
}
