import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import "./DeleteCustomers.css";

export default function DeleteCustomers({
  dltOpen,
  handleClickDltOpen,
  handleDltClose,
}) {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickDltOpen}
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        sx={{ color: "#eceff1", width: "10vw" }}
      >
        DELETE
      </Button>
      <Dialog
        open={dltOpen}
        onClose={handleDltClose}
        className="DltmodalContainer"
      >
        <DialogTitle>Delete Records?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete these record[s]?
          </DialogContentText>
          <input
            type="button"
            value="CANCEL"
            onClick={() => handleDltClose(false)}
          />
          <input
            type="button"
            value="DELETE"
            onClick={() => handleDltClose(true)}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
