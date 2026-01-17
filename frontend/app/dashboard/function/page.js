"use client"
import { IoIosArrowRoundBack } from "react-icons/io"
import { SlRefresh } from "react-icons/sl"
import CreateFunction from "@/components/createFunction"
import { useRouter } from "next/navigation"
import { FaTrash } from "react-icons/fa6"
import { MdEdit } from "react-icons/md"
import ConfirmModal from "@/components/modal"
import { useState } from "react"
import EditFunctionModal from "@/components/editFunctionModal"

const Page = () => {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)

    const onConfirm = () => {
        router.push("/dashboard")
    }

    const onCancel = () => {
        setOpen(false);
    }

    const onClose = () => {
        setEditOpen(false)
    }

    const onSubmit = () => {
        router.push("/dashboard")
    }
    return (
        <div>
            <div className="flex justify-between mx-5 md:mx-10 pt-3">
                <IoIosArrowRoundBack onClick={() => router.push("/dashboard")} className="text-black text-4xl cursor-pointer" />
                <div className="p-3 bg-white shadow-md rounded-xl">
                    <SlRefresh className="text-black text-xl" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 mx-2 md:mt-10 md:mx-10 gap-3">
                <div className="w-full md:w-1/2 bg-[#f6f6f6] h-118 md:h-130 rounded-4xl">
                    <CreateFunction />
                </div>
                <div className="w-full md:w-1/1 bg-[#f6f6f6] h-130 rounded-4xl">

                    <div className="overflow-x-auto mx-3 my-8 md:m-8 rounded-t-2xl">
                        <table className="min-w-full text-black">
                            <thead className="bg-[#ffe692] h-15">
                                <tr>
                                    <th className="px-4 py-2 text-start">Sl.No</th>
                                    <th className="px-4 py-2 text-start">Name</th>
                                    <th className="px-4 py-2 text-start">Date</th>
                                    <th className="px-4 py-2 text-start">Time</th>
                                    <th className="px-4 py-2 text-start">Location</th>
                                    <th className="px-4 py-2 text-start">Edit</th>
                                    <th className="px-4 py-2 text-start">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-100 h-15">
                                    <td className="px-4 py-2 text-start">1</td>
                                    <td className="px-4 py-2 text-start">Maduram vepp</td>
                                    <td className="px-4 py-2 text-start">15-09-2025</td>
                                    <td className="px-4 py-2 text-start">09.10 AM</td>
                                    <td className="px-4 py-2 text-start">Prumbavoor</td>
                                    <td className="px-4 py-2 text-center"><MdEdit onClick={() => setEditOpen(true)} className="text-2xl text-blue-700 cursor-pointer" /></td>
                                    <td className="px-4 py-2 text-center"><FaTrash onClick={() => setOpen(true)} className="text-xl text-red-700 cursor-pointer" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {
                        open
                        &&
                        <ConfirmModal
                            message={"Are you sure you want to delete this item?"}
                            title={"Delete Confirmation"}
                            onConfirm={onConfirm}
                            onCancel={onCancel}
                        />
                    }

                    {
                        editOpen
                        &&
                        <EditFunctionModal 
                            open={editOpen}
                            onClose={onClose}
                            onSubmit={onSubmit} 
                            // defaultValues = {}
                        />
                    }

                </div>
            </div>
        </div>
    )
}

export default Page
