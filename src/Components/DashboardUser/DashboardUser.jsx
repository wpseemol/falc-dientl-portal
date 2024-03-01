import PropTypes from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

export default function DashboardUser({ drawer }) {
    const [user] = useAuthState(auth);

    const profilePicture =
        user?.photoURL || 'https://i.ibb.co/wBfQjTy/user-Image.png';

    const imgAlt = user?.displayName || 'Avatar';

    return (
        <div
            className={`${
                drawer ? 'p-0 m-0 duration-200' : 'p-4 m-2 duration-300'
            } flex justify-center items-center bg-[#37383b] rounded-sm overflow-hidden`}>
            <div className="">
                <figure className="w-20 h-20 rounded-full mx-auto">
                    <img src={profilePicture} alt={imgAlt} />
                </figure>
                <div className="mt-2">
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    );
}

DashboardUser.propTypes = { drawer: PropTypes.bool };
