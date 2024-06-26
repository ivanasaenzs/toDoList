import * as React from "react";
import { Button, Box, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ isOpen, handleClose, handleDelete }) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: "Wix Madefor Text, sans-serif",
              textAlign: "center",
            }}
          >
            CONFIRM DELETION
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            Are you sure you want to delete this task?
          </Typography>
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Button
              onClick={handleDelete}
              sx={{
                marginRight: "5px",
                color: "#000",
                backgroundColor: "#c22b35",
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Delete
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                color: "#000",
                backgroundColor: "#c22b35",
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
