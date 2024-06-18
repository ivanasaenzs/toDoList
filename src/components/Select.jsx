import * as React from "react";
import { MenuItem, FormHelperText, FormControl, Select } from "@mui/material";

export default function SelectLabels() {
  const [typeTask, setTypeTask] = React.useState("");

  const handleChange = (e) => {
    setTypeTask(e.target.value);
    console.log("Select option changed!!");
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        height: "40px",
        "& .MuiInputBase-root": {
          height: "40px",
          minWidth: "150px",
        },
        "& .MuiSelect-select": {
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Select
        value={typeTask}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Choose task" }}
        sx={{
          width: "150px",
          backgroundColor: "#fff",
        }}
      >
        <MenuItem value={"all"}>
          <em>All</em>
        </MenuItem>
        <MenuItem value={"completed"}>Completed</MenuItem>
        <MenuItem value={"uncompleted"}>Uncompleted</MenuItem>
      </Select>
      <FormHelperText>Choose task!</FormHelperText>
    </FormControl>
  );
}
