import { LiaInfoCircleSolid } from 'react-icons/lia';

export default function DashboardComponent() {
    return (
        <div className="bg-[#E6F6FF] border shadow-sm h-fit p-4 rounded-sm mt-4 container mx-auto">
            <div className="font-bold flex items-center gap-1 text-lg">
                <span className="text-xl">
                    <LiaInfoCircleSolid />
                </span>
                <p className="">Announcement</p>
            </div>
            <div className="ml-5">
                <p>
                    With social media, you can reach a bunch of people, but
                    delivering your message right into people’s inboxes with
                    email marketing gives you the best ROI.
                </p>
            </div>
        </div>
    );
}
