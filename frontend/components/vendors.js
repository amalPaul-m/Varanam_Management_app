import { HiArrowLongRight } from "react-icons/hi2"

const Vendors = () => {
    return (
        <div className='mx-4 md:mx-0 md:w-full min-w-90 h-auto md:h-90 bg-[#f7f7f7] md:bg-amber-100 rounded-4xl'>
            <h1 className='mx-4 mt-8 mb-5 text-gray-900 text-lg font-semibold md:font-light md:text-2xl'>Vendors Details</h1>
            <div className="hidden md:block overflow-x-auto mx-3 my-8 md:m-0 rounded-t-2xl">
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


            {/* mobile View */}
            <div className="md:hidden mx-3 my-3 h-[55vh] overflow-y-auto overscroll-contain space-y-3">

            <div className="w-full px-4 py-4 rounded-xl bg-white border border-gray-400 text-black flex items-center justify-between">
                <div className="flex flex-col">
                <p className="text-base font-bold">Food and Beverages</p>
                <p className="text-sm opacity-90">Blue Plate Catering</p>
                </div>

                <button
                className="group p-3 bg-white shadow-md rounded-full
                transition-all duration-300
                hover:scale-105 active:scale-95"
                >
                <HiArrowLongRight
                    className="text-xl transition-transform duration-300
                    group-hover:translate-x-1"
                />
                </button>
            </div>

            <div className="w-full px-4 py-4 rounded-xl bg-white border border-gray-400 text-black flex items-center justify-between">
                <div className="flex flex-col">
                <p className="text-base font-bold">Stage and Sounds</p>
                <p className="text-sm opacity-90">Kanavil events</p>
                </div>

                <button className="group p-3 bg-white shadow-md rounded-full
                transition-all duration-300
                hover:scale-105 active:scale-95">
                <HiArrowLongRight className="text-xl group-hover:translate-x-1 transition" />
                </button>
            </div>

            </div>

        </div>
    )
}

export default Vendors
