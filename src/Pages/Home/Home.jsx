import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

export default function Home() {
    const [user] = useAuthState(auth);

    console.log(user);

    return (
        <main>
            <div className="text-center font-bold text-3xl mt-5">
                <p>Welcome to out website {user?.email}</p>
            </div>
        </main>
    );
}
