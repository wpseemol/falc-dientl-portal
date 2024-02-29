import { useContext } from 'react';
import { ErrorContext } from './ErrorMassageContext';

export function useErrorContext() {
    return useContext(ErrorContext);
}
