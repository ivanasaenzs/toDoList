import * as React from "react";

import { Box, Button, Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import SelectLabels from "./Select";

import { IoAddCircle } from "react-icons/io5";

export default function BasicTextFields({ addTask, tasks, setFilteredTasks }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: "all",
  });

  // Handles the adding of a new task with react-hook-form's data element and resets the input field
  const onSubmit = (data) => {
    addTask(data.taskDescription);
    reset({ taskDescription: "" });
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="taskDescription"
          placeholder="Enter your task"
          id="outlined-basic"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            width: "450px",
            height: "40px",
            "& .MuiOutlinedInput-root": {
              height: "40px",
              "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <Button
                type="submit"
                sx={{
                  minWidth: 0,
                  padding: 0,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IoAddCircle size={35} style={{ color: "orange" }} />
              </Button>
            ),
          }}
          error={!!errors.taskDescription}
          helperText={
            errors.taskDescription ? errors.taskDescription.message : ""
          }
          {...register("taskDescription", {
            required: "You can't send an empty task",
            maxLength: {
              value: 50,
              message: "The task is too long",
            },
          })}
        />
        <SelectLabels tasks={tasks} setFilteredTasks={setFilteredTasks} />
      </Box>
    </Container>
  );
}
