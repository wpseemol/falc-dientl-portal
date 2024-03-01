import siteLogo from '../../assets/image/luckin-coffee.svg';

export default function DashboardLogo() {
    return (
        <div
            className="bg-[#212370] m-2
     mb-6 overflow-hidden
    ">
            <figure className="w-32 mx-auto">
                <img src={siteLogo} alt="site-logo" />
            </figure>
        </div>
    );
}
