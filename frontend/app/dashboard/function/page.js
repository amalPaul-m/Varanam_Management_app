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
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useFunctionData } from "@/context/functionsContext"

const Page = () => {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [rotate, setRotate] = useState(false)

    const { data, loading, error } = useFunctionData()

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
                <div onClick={() => setRotate(!rotate)} className="p-3 bg-white shadow-md rounded-xl">
                    <SlRefresh className={`text-black text-xl transition-transform duration-500 ${rotate ? "rotate-180" : ""}`} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 mx-2 md:mt-10 md:mx-10 gap-3">
                <div className="hidden md:block w-full md:w-1/2 bg-[#ffffff] h-118 md:h-130 rounded-4xl">
                    <CreateFunction />
                </div>

            {/* mobile view */}

            <div className="block md:hidden w-full mx-auto rounded-2xl">
            <Accordion
                
                sx={{
                borderRadius: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                "&:before": { display: "none" },
                }}
            >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{
                    borderRadius: "24px",
                    px: 3,
                }}
                >
                <Typography fontWeight={800}>
                    Create New Function
                </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3, pb: 3 }}>

                <CreateFunction />
                
                </AccordionDetails>
            </Accordion>
            </div>

                <div className="w-full md:w-1/1 bg-[#ffffff] h-screen md:h-130 rounded-lg md:rounded-4xl">

                    <div className="overflow-x-auto mx-3 my-8 md:m-8 rounded-t-2xl">
                        <div className="hidden md:block">
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
                                {data.map((item,index) => (
                                <tr key={item.id} className="hover:bg-gray-100 h-15">
                                    <td className="px-4 py-2 text-start">{index}</td>
                                    <td className="px-4 py-2 text-start">{item.name}</td>
                                    <td className="px-4 py-2 text-start">{item.date}</td>
                                    <td className="px-4 py-2 text-start">{item.time}</td>
                                    <td className="px-4 py-2 text-start">{item.location}</td>
                                    <td className="px-4 py-2 text-center"><MdEdit onClick={() => setEditOpen(true)} className="text-2xl text-blue-700 cursor-pointer" /></td>
                                    <td className="px-4 py-2 text-center"><FaTrash onClick={() => setOpen(true)} className="text-xl text-red-700 cursor-pointer" /></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>

                        {/* mobile view */}
                        <div className="space-y-4">
                            {data.map((item) => (
                            <div key={item.id} className="block md:hidden w-full">
                                <div className="px-4 py-4 rounded-xl bg-[#e2e2e2] text-black text-sm flex items-center justify-between">
                                <div className="flex flex-col text-start">
                                    <p className="text-lg font-bold">{item.name}</p>
                                    <p className="text-sm opacity-90 mt-1">{item.date} | <span>{item.time}</span></p>
                                    <p className="text-sm opacity-90 mt-1">{item.location}</p>
                                </div>
                                <span className="text-lg font-semibold">
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><MdEdit onClick={() => setEditOpen(true)} className="text-xl text-black cursor-pointer" /></div>
                                    <div className="px-2 py-2 mt-4 text-center bg-[#ffffff] rounded-full"><FaTrash onClick={() => setOpen(true)} className="text-lg text-black cursor-pointer" /></div>
                                </span>
                                </div>
                            </div>
                            ))}

                        </div>
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
