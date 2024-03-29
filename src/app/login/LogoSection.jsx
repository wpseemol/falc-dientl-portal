import logo from '@/assets/image/luckin-coffee.svg';
import Image from 'next/image';

export default function LogoSection() {
    return (
        <div className="flex justify-center items-center py-14 bg-[#E7FCFF]">
            <figure>
                <Image
                    src={logo}
                    alt="sit logo"
                    className="w-16 h-16 object-cover object-center"
                />
            </figure>
        </div>
    );
}
