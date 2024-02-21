import bgAmbulancePicture from '@/assets/image/bg-ambulance-picture.jpg';
import Image from 'next/image';
import LoginFrom from './LoginFrom';

export default function Login() {
    return (
        <main className="relative">
            <figure className="">
                <Image
                    src={bgAmbulancePicture}
                    alt="bg picture"
                    className="w-screen h-screen object-cover object-center"
                />
                <div className="absolute top-0 left-0 bg-slate-300/70 w-full h-full"></div>
            </figure>

            <LoginFrom />
        </main>
    );
}
