"use client"
import { TextField, MenuItem } from "@mui/material"
import { useState } from "react"
import { FaRegCaretSquareUp } from "react-icons/fa"

const CreateGuest = () => {

    const [functions, setFunctions] = useState([])
    const [relation, setRelation] = useState("")
    const [foodPreference, setFoodPreference] = useState("")
    const [mobile, setMobile] = useState("")

    return (
        <form className="mx-0 md:mx-8 my-6 md:my-12 space-y-5">
            <h1 className="hidden md:block text-lg font-semibold md:text-2xl md:font-light text-gray-800">Create New Guest</h1>

            <div className="text-sm">
                <TextField
                    fullWidth
                    label="Full Name"
                    id="fullWidth"
                    required
                    // helperText="This field is required"
                    // error
                    color="black"
                    className=""
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white" } }}
                />
            </div>

            <div>
                <TextField
                    fullWidth
                    select
                    label="Relation"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    required
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 4,
                            backgroundColor: "white",
                            cursor: "pointer",
                        },
                    }}
                >
                    <MenuItem disabled value="">
                        Select Relation
                    </MenuItem>
                    <MenuItem value="father">Friend</MenuItem>
                    <MenuItem value="mother">Relative</MenuItem>
                    <MenuItem value="brother">Close Relative</MenuItem>
                    <MenuItem value="sister">Naibours</MenuItem>
                </TextField>
            </div>

            <div>
                <TextField
                    fullWidth
                    select
                    label="Functions"
                    value={functions}
                    onChange={(e) => setFunctions(e.target.value)}
                    SelectProps={{
                        multiple: true,
                        renderValue: (selected) => {
                            return selected.join(", ")
                        },
                    }}
                    required
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 4,
                            backgroundColor: "white",
                        },
                    }}
                >
                    <MenuItem disabled value="">
                        Select Functions
                    </MenuItem>
                    <MenuItem value="Father">Father</MenuItem>
                    <MenuItem value="Mother">Mother</MenuItem>

                </TextField>
            </div>

            <div>
                <TextField
                    fullWidth
                    label="Number of peoples"
                    inputProps={{
                        min: 1,
                        step: 1,
                    }}
                    id="fullWidth"
                    type="number"
                    required
                    // helperText="This field is required"
                    // error
                    color="black"
                    className=""
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
                />
            </div>

            <div>
                <TextField
                    fullWidth
                    select
                    label="Food Preference"
                    value={foodPreference}
                    onChange={(e) => setFoodPreference(e.target.value)}
                    required
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 4,
                            backgroundColor: "white",
                            cursor: "pointer",
                        },
                    }}
                >
                    <MenuItem disabled value="">
                        Select Food Preference
                    </MenuItem>
                    <MenuItem value="father">Veg <FaRegCaretSquareUp className="ml-3 text-green-500"/></MenuItem>
                    <MenuItem value="mother">Non Veg <FaRegCaretSquareUp className="ml-3 text-red-500"/></MenuItem>
                </TextField>
            </div>

            <div>
                <TextField
                    fullWidth
                    label="Mobile Number"
                    type="tel"
                    value={mobile}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                        setMobile(value)
                    }}
                    placeholder="Enter 10-digit mobile number"
                    required
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 4,
                            backgroundColor: "white",
                            cursor: "pointer",
                        },
                    }}
                />
            </div>

            <div>
                <TextField
                    fullWidth
                    label="Address"
                    id="fullWidth"
                    type="text"
                    required
                    // helperText="This field is required"
                    // error
                    color="black"
                    className=""
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
                />
            </div>

            <div>
                <button className="w-full mt-2 h-14 bg-[#505050] md:bg-[#fdd860] hover:bg-[#ebb400] text-white md:text-black rounded-2xl text-base font-bold md:font-light md:text-lg">Create Guest</button>
            </div>

        </form>
    )
}

export default CreateGuest
