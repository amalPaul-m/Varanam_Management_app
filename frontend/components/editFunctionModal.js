"use client";

import TextField from "@mui/material/TextField";

const EditFunctionModal = ({ open, onClose, onSubmit, defaultValues = {} }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4">
      <div className="w-full max-w-md bg-[#ffffff] rounded-3xl shadow-xl animate-slideInRight">

        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold md:font-light text-gray-800">Edit Function</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>


        <form
          onSubmit={onSubmit}
          className="px-6 py-6 space-y-10 md:space-y-6"
        >
          <div>
          <TextField
            fullWidth
            label="Function Name"
            InputLabelProps={{ shrink: true }}
            defaultValue={defaultValues.name}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                backgroundColor: "white",
              },
            }}
          />
          </div>

          <div>
          <TextField
            fullWidth
            label="Function Date"
            type="date"
            defaultValue={defaultValues.date}
            InputLabelProps={{ shrink: true }}
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
            label="Function Time"
            type="time"
            defaultValue={defaultValues.time}
            InputLabelProps={{ shrink: true }}
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
            label="Location"
            InputLabelProps={{ shrink: true }}
            defaultValue={defaultValues.location}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                backgroundColor: "white",
              },
            }}
          />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer w-1/2 h-12 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer w-1/2 h-12 rounded-xl bg-[#505050] md:bg-[#fdd860] hover:bg-[#ebb400] text-white md:text-black"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFunctionModal;
