import * as React from "react";
import { MenuItem, FormHelperText, FormControl, Select } from "@mui/material";

export default function SelectLabels({ tasks, setFilteredTasks }) {
  const [typeTask, setTypeTask] = React.useState("all");

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setTypeTask(selectedOption);

    let filteredTasks = [];

    if (selectedOption === "completed") {
      filteredTasks = tasks.filter((task) => task.completed);
    } else if (selectedOption === "uncompleted") {
      filteredTasks = tasks.filter((task) => !task.completed);
    } else {
      filteredTasks = tasks;
    }

    setFilteredTasks(filteredTasks);
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
        onChange={handleSelectChange}
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
