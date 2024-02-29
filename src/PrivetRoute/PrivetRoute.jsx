import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export default function PrivetRoute() {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <div className="w-screen h-screen flex justify-center items-start">
                <p>Loading...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="w-screen h-screen flex justify-center mt-20">
                <p>{error.message}</p>
            </div>
        );
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
}
