import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

export default function Home() {
    const [user] = useAuthState(auth);

    const [signOut, loading] = useSignOut(auth);

    console.log(user);

    return (
        <main>
            <div className="text-center font-bold text-3xl mt-5">
                <p>Welcome to out website {user?.email}</p>
                <button
                    className="bg-slate-700 text-white p-2 rounded-md m-2"
                    onClick={async () => {
                        await signOut();
                    }}>
                    <span>{loading ? 'Loading...' : 'Logout'}</span>
                </button>
            </div>
        </main>
    );
}
