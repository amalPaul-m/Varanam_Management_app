import { HiArrowLongRight } from "react-icons/hi2"

const Vendors = () => {
    return (
        <div className='mx-5 md:mx-0 md:w-full h-90 md:bg-amber-100 bg-[#fffcdc] rounded-4xl'>
            <h1 className='mx-4 mt-8 mb-5 text-gray-900 text-2xl'>Vendors Details</h1>
            <div className="overflow-x-auto mx-3 my-8 md:m-0 rounded-t-2xl">
                <table className="min-w-full text-black">
                    <tbody>
                        <tr className="hover:bg-gray-100 h-15 text-xl">
                            <td className="px-4 py-2 text-start">1</td>
                            <td className="px-4 py-2 text-start">Food and Beverages</td>
                            <td className="px-4 py-2 text-start">Blue Plate Catering</td>
                            <td className="px-4 py-2 text-start">
                                <button
                                    className="group px-10 py-3 bg-white shadow-md rounded-4xl cursor-pointer
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-xl active:scale-95"
                                >
                                    <HiArrowLongRight
                                        className="text-2xl transition-transform duration-300 ease-out
                                    group-hover:translate-x-2"
                                    />
                                </button>
                            </td>
                        </tr>

                        <tr className="hover:bg-gray-100 h-15 text-xl">
                            <td className="px-4 py-2 text-start">2</td>
                            <td className="px-4 py-2 text-start">Stage and Sounds</td>
                            <td className="px-4 py-2 text-start">Kanavil events</td>
                            <td className="px-4 py-2 text-start">
                                <button
                                    className="group px-10 py-3 bg-white shadow-md rounded-4xl cursor-pointer
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-xl active:scale-95"
                                >
                                    <HiArrowLongRight
                                        className="text-2xl transition-transform duration-300 ease-out
                                    group-hover:translate-x-2"
                                    />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vendors
