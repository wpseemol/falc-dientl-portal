import bgAmbulancePicture from '../../assets/image/bg-ambulance-picture.jpg';

// eslint-disable-next-line react/prop-types
export default function FromBg({ children }) {
    return (
        <main className="relative">
            <figure className="">
                <img
                    src={bgAmbulancePicture}
                    alt="bg picture"
                    className="w-screen h-screen object-cover object-center"
                />
                <div className="absolute top-0 left-0 bg-slate-300/70 w-full h-full"></div>
            </figure>

            {children}
        </main>
    );
}
