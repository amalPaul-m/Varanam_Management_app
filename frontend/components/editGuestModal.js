"use client";

import { useState } from "react";
import { TextField, MenuItem } from "@mui/material"
import { FaRegCaretSquareUp } from "react-icons/fa"

const EditGuestModal = ({ open, onClose, onSubmit, defaultValues = {} }) => {

  const [fullName, setFullName] = useState(defaultValues.fullName || "");
  const [relation, setRelation] = useState(defaultValues.relation || "");
  const [functions, setFunctions] = useState(defaultValues.functions || []);
  const [numGuests, setNumGuests] = useState(defaultValues.numGuests || 1);
  const [foodPreference, setFoodPreference] = useState(defaultValues.foodPreference || "");
  const [mobile, setMobile] = useState(defaultValues.mobile || "");
  const [address, setAddress] = useState(defaultValues.address || "");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass all values to parent
    onSubmit({ fullName, relation, functions, numGuests, foodPreference, mobile, address });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4">
      <div className="w-full max-w-md bg-[#ffffff] rounded-3xl shadow-xl animate-slideInRight">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold md:font-light text-gray-800">
            Edit Guest
          </h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          
          <div>
          <TextField
            fullWidth
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
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
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
          >
            <MenuItem value="">Select Relation</MenuItem>
            <MenuItem value="Friend">Friend</MenuItem>
            <MenuItem value="Relative">Relative</MenuItem>
            <MenuItem value="Close Relative">Close Relative</MenuItem>
            <MenuItem value="Neighbours">Neighbours</MenuItem>
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
              renderValue: (selected) => selected.join(", "),
            }}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white" } }}
          >
            <MenuItem value="Bachelor Party">Bachelor Party</MenuItem>
            <MenuItem value="Madhuram Vepp">Madhuram Vepp</MenuItem>
            <MenuItem value="Wedding">Wedding</MenuItem>
          </TextField>
          </div>

          <div>
          <TextField
            fullWidth
            label="Number of Guests"
            type="number"
            inputProps={{ min: 1, step: 1 }}
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            required
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
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
          >
            <MenuItem value="">Select Food Preference</MenuItem>
            <MenuItem value="Veg">Veg <FaRegCaretSquareUp className="ml-3 text-green-500"/></MenuItem>
            <MenuItem value="Non Veg">Non Veg <FaRegCaretSquareUp className="ml-3 text-red-500"/></MenuItem>
          </TextField>
          </div>

          <div>
          <TextField
            fullWidth
            label="Mobile Number"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="Enter 10-digit mobile number"
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
          />
          </div>

          <div>
          <TextField
            fullWidth
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: "white", cursor: "pointer" } }}
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
              Update Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGuestModal;
