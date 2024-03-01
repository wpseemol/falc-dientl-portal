import { IoSearch } from 'react-icons/io5';
import TableHeaderTitle from '../TableHeaderTitle/TableHeaderTitle';

const tableHeader = [
    { id: 1, title: 'Status', status: 'no' },
    { id: 2, title: 'Type', status: 'no' },
    { id: 3, title: 'Origin', status: 'no' },
    { id: 4, title: 'Service', status: 'no' },
    { id: 5, title: 'Resource', status: 'no' },
];
export default function Application() {
    return (
        <div className="m-4 container mx-auto">
            <div>
                <h2 className="font-bold text-neutral-600 text-2xl">
                    Applications
                </h2>
            </div>

            <div className="flex justify-end mt-4">
                <form className="border bg-white rounded-md relative">
                    <input
                        type="text"
                        name="searchApplication"
                        id="searchApplication"
                        placeholder="Filter by status"
                        className="focus:outline-none bg-white pl-12 py-2 text-xl  "
                    />
                    <button className="absolute top-[10px] left-3">
                        <span className="text-2xl">
                            <IoSearch />
                        </span>
                    </button>
                </form>
            </div>

            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="text-xl">
                                <th>---//---</th>

                                {tableHeader.map((tHadTitle) => (
                                    <TableHeaderTitle
                                        key={tHadTitle.id}
                                        headTitle={tHadTitle}
                                    />
                                ))}
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="text-lg">1</td>
                                <td className="text-lg">Cy Ganderton</td>
                                <td className="text-lg">
                                    Quality Control Specialist
                                </td>
                                <td className="text-lg">
                                    Littel, Schaden and Vandervort
                                </td>
                                <td className="text-lg">Canada</td>
                                <td className="text-lg">12/16/2020</td>
                            </tr>
                            <tr>
                                <td className="text-lg">2</td>
                                <td className="text-lg">Hart Hagerty</td>
                                <td className="text-lg">
                                    Desktop Support Technician
                                </td>
                                <td className="text-lg">
                                    Zemlak, Daniel and Leannon
                                </td>
                                <td className="text-lg">United States</td>
                                <td className="text-lg">12/5/2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
