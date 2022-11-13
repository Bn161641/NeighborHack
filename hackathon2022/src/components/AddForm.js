import "./AddForm.css"
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function AddForm(){
  const [type, setType] = useState("event")

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
  <div>
    <form>
    {/* <TextField
          select
          label="Select"
          value={type}
          onChange={handleChange}
          helperText="Select Feed Type"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  </div>);
};