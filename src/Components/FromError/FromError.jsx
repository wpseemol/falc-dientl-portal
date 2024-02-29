import { useEffect } from 'react';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { useErrorContext } from '../../context/ErrorMassageContext';

export default function FromError() {
    const { isError, setIsError, errorMassage } = useErrorContext();

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setIsError(false);
        }, 8000);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [isError, setIsError]);

    return (
        <div
            className={`${
                isError ? 'left-0 duration-500' : '-left-[260rem] duration-500'
            } absolute -top-20 bg-[#291013] text-[#d39e9e] py-2 `}>
            <div className="w-screen sm:w-96 px-6 relative">
                <div className="absolute right-2 top-0">
                    <button
                        onClick={() => setIsError(false)}
                        className="text-xl">
                        <MdClose />
                    </button>
                </div>
                <p className="flex items-center gap-2 text-xl">
                    <span>
                        <MdErrorOutline />
                    </span>
                    Error
                </p>
                <p className="text-md">{errorMassage}</p>
            </div>
        </div>
    );
}
