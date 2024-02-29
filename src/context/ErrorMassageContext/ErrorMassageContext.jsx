import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const ErrorContext = createContext(null);

export default function ErrorMassageContext() {
    const [isError, setIsError] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');

    return (
        <ErrorContext.Provider
            value={{ isError, setIsError, errorMassage, setErrorMassage }}>
            <Outlet />
        </ErrorContext.Provider>
    );
}
