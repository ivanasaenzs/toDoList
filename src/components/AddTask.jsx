import * as React from "react";
import { Box, Button, Container, TextField } from "@mui/material";

import SelectLabels from "./Select";

import { IoAddCircle } from "react-icons/io5";

export default function BasicTextFields() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Input text is changing!: ", e.target.value);
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleSubmit}
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
        />
        <SelectLabels />
      </Box>
    </Container>
  );
}
