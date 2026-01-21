import TextField from "@mui/material/TextField"

const CreateFunction = () => {
    return (
        <form className="mx-0 md:mx-8 my-6 md:my-12 space-y-5">
            <h1 className="hidden md:block text-lg font-semibold md:text-2xl md:font-light text-gray-800">Create New Function</h1>

            <div className="text-sm">
                <TextField
                    fullWidth
                    label="Function Name"
                    InputLabelProps={{ shrink: true }}
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
                    label="Function Date"
                    InputLabelProps={{ shrink: true }}
                    id="fullWidth"
                    type="date"
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
                    label="Function Time"
                    InputLabelProps={{ shrink: true }}
                    id="fullWidth"
                    type="time"
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
                    label="Location"
                    InputLabelProps={{ shrink: true }}
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
                <button className="w-full mt-2 h-14 bg-[#505050] md:bg-[#fdd860] hover:bg-[#ebb400] text-white md:text-black rounded-2xl text-base font-bold md:font-light md:text-lg">Create Function</button>
            </div>

        </form>
    )
}

export default CreateFunction
