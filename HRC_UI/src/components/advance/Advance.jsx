import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import "./Advance.css";

function Advance({
  cust_number,
  buisness_year,
  doc_id,
  invoice_id,
  changeAdvHandler,
  submitAdvHandler,
  advOpen,
  handleClickAdvOpen,
  handleAdvClose,
}) {
  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "white", width: "11vw" }}
        onClick={handleClickAdvOpen}
      >
        ADVANCE SEARCH
      </Button>
      <Dialog open={advOpen} onClose={handleAdvClose}>
        <DialogTitle
          className="modalbackground"
          style={{
            color: "white",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          Advance Search
        </DialogTitle>
        <DialogContent
          className="modalbackground"
          style={{
            color: "white",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <input
            autoFocus
            name="doc_id"
            margin="dense"
            id="doc_id"
            label="Document ID"
            type="text"
            onChange={changeAdvHandler}
            value={doc_id}
            variant="standard"
            placeholder="Document Id"
            className="Edit-txtBox"
            style={{
              background: "rgb(232, 241, 250)",
              width: "6cm",
              height: "1cm",
              borderRadius: "5px",
              margin: "2px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            size="small"
          />
          <input
            autoFocus
            name="invoice_id"
            margin="dense"
            id="invoice_id"
            label="Invoice ID"
            type="text"
            onChange={changeAdvHandler}
            value={invoice_id}
            variant="standard"
            placeholder="Invoice Id"
            lassName="Edit-txtBox"
            style={{
              background: "rgb(232, 241, 250)",
              width: "6cm",
              height: "1cm",
              borderRadius: "5px",
              margin: "2px",
              marginLeft: "6px",
              marginTop: "15px",
            }}
            size="small"
          />
          <input
            autoFocus
            name="cust_number"
            margin="dense"
            id="cust_number"
            label="Customer Number"
            type="text"
            onChange={changeAdvHandler}
            value={cust_number}
            variant="standard"
            placeholder="Customer Number"
            lassName="Edit-txtBox"
            style={{
              background: "rgb(232, 241, 250)",
              width: "6cm",
              height: "1cm",
              borderRadius: "5px",
              margin: "2px",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "15px",
            }}
            size="small"
          />
          <input
            autoFocus
            name="buisness_year"
            margin="dense"
            id="buisness_year"
            label="Invoice Currency"
            type="text"
            onChange={changeAdvHandler}
            value={buisness_year}
            variant="standard"
            placeholder="Business Year"
            lassName="Edit-txtBox"
            style={{
              background: "rgb(232, 241, 250)",
              width: "6cm",
              height: "1cm",
              borderRadius: "5px",
              margin: "2px",
              marginLeft: "6px",
            }}
            size="small"
          />
          <DialogActions className="modalbackground">
            <Button
              onClick={submitAdvHandler}
              style={{
                color: "white",
                width: "8cm",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleAdvClose(false)}
              autoFocus
              style={{
                color: "white",
                width: "8cm",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Advance;