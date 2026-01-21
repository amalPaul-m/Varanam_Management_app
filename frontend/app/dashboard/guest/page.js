"use client"
import { IoIosArrowRoundBack } from "react-icons/io"
import { SlRefresh } from "react-icons/sl"
import CreateGuest from "@/components/createGuest"
import { useRouter } from "next/navigation"
import { FaTrash } from "react-icons/fa6"
import { MdEdit } from "react-icons/md"
import ConfirmModal from "@/components/modal"
import { useState } from "react"
import EditGuestModal from "@/components/editGuestModal"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FaRegCaretSquareUp } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { FaLocationArrow } from "react-icons/fa6"

const Page = () => {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [rotate, setRotate] = useState(false)

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
                <div className="hidden md:block w-full md:w-1/2 bg-[#ffffff] h-118 md:h-full rounded-4xl">
                    <CreateGuest/>
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
                    Create New Guest
                </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3, pb: 3 }}>

                <CreateGuest />
                
                </AccordionDetails>
            </Accordion>
            </div>

                <div className="w-full md:w-1/1 bg-[#ffffff] h-screen md:h-full rounded-lg md:rounded-4xl">

                    <div className="overflow-x-auto mx-3 my-8 md:m-8 rounded-t-2xl">
                        <div className="hidden md:block">
                        <table className="min-w-full text-black">
                            <thead className="bg-[#ffe692] h-15">
                                <tr>
                                    <th className="px-4 py-2 text-start">Sl.No</th>
                                    <th className="px-4 py-2 text-start">Full Name</th>
                                    <th className="px-4 py-2 text-start">Relation</th>
                                    <th className="px-4 py-2 text-start">Functions</th>
                                    <th className="px-4 py-2 text-start">Total Guest</th>
                                    <th className="px-4 py-2 text-start">Food Preference</th>
                                    <th className="px-4 py-2 text-start">Mobile Number</th>
                                    <th className="px-4 py-2 text-start">Address</th>
                                    <th className="px-4 py-2 text-start">Edit</th>
                                    <th className="px-4 py-2 text-start">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-100 h-15">
                                    <td className="px-4 py-2 text-start">1</td>
                                    <td className="px-4 py-2 text-start">Amal Paul</td>
                                    <td className="px-4 py-2 text-start">Close Relative</td>
                                    <td className="px-4 py-2 text-start">Bachelor party, madhuram vepp, wedding</td>
                                    <td className="px-4 py-2 text-start">5</td>
                                    <td className="px-4 py-2 text-start">Non Veg <FaRegCaretSquareUp className="ml-3 text-red-500"/></td>
                                    <td className="px-4 py-2 text-start">+91 8301877983</td>
                                    <td className="px-4 py-2 text-start">Prumbavoor</td>
                                    <td className="px-4 py-2 text-center"><MdEdit onClick={() => setEditOpen(true)} className="text-2xl text-blue-700 cursor-pointer" /></td>
                                    <td className="px-4 py-2 text-center"><FaTrash onClick={() => setOpen(true)} className="text-xl text-red-700 cursor-pointer" /></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                        {/* mobile view */}
                        <div className="space-y-4">
                            <div className="block md:hidden w-full">
                                <div className="px-4 py-4 rounded-xl bg-[#ebebeb] text-black text-sm flex items-center justify-between">
                                <div className="flex flex-col text-start">
                                <p className="text-lg font-bold flex items-center gap-1">
                                Amal Paul
                                <span className="flex items-center gap-1 text-sm font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                                    <FaRegCaretSquareUp className="text-red-500" />
                                    <span className="ml-2 px-3 py-1 bg-white shadow-sm rounded-full">5</span>
                                </span>
                                </p>                                    
                                <p className="text-sm opacity-90 mt-1">Close Relative</p>
                                <p className="text-sm opacity-90 mt-1">Bachelor party, madhuram vepp, wedding</p>
                                <p className="flex text-sm opacity-90 mt-4 items-center gap-2"><IoCall className="text-green-600"/> +91 8301877983</p>
                                <p className="flex text-sm opacity-90 mt-1 items-center gap-2"><FaLocationArrow className="text-blue-600"/> Perumbavoor</p>
                                </div>
                                <span className="text-lg font-semibold space-y-4">
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><IoCall className="text-xl text-black cursor-pointer"/></div>
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><MdEdit onClick={() => setEditOpen(true)} className="text-xl text-black cursor-pointer" /></div>
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><FaTrash onClick={() => setOpen(true)} className="text-lg text-black cursor-pointer" /></div>
                                </span>
                                </div>
                            </div>

                            <div className="block md:hidden w-full">
                                <div className="px-4 py-4 rounded-xl bg-[#ebebeb] text-black text-sm flex items-center justify-between">
                                <div className="flex flex-col text-start">
                                <p className="text-lg font-bold flex items-center gap-1">
                                Amal Paul
                                <span className="flex items-center gap-1 text-sm font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                                    <FaRegCaretSquareUp className="text-red-500" />
                                    <span className="ml-2 px-3 py-1 bg-white shadow-sm rounded-full">5</span>
                                </span>
                                </p>                                    
                                <p className="text-sm opacity-90 mt-1">Close Relative</p>
                                <p className="text-sm opacity-90 mt-1">Bachelor party, madhuram vepp, wedding</p>
                                <p className="flex text-sm opacity-90 mt-4 items-center gap-2"><IoCall className="text-green-600"/> +91 8301877983</p>
                                <p className="flex text-sm opacity-90 mt-1 items-center gap-2"><FaLocationArrow className="text-blue-600"/> Perumbavoor</p>
                                </div>
                                <span className="text-lg font-semibold space-y-4">
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><IoCall className="text-xl text-black cursor-pointer"/></div>
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><MdEdit onClick={() => setEditOpen(true)} className="text-xl text-black cursor-pointer" /></div>
                                    <div className="px-2 py-2 text-center bg-[#ffffff] rounded-full"><FaTrash onClick={() => setOpen(true)} className="text-lg text-black cursor-pointer" /></div>
                                </span>
                                </div>
                            </div>


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
                        <EditGuestModal 
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
