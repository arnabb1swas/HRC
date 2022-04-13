import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import "./EditCustomers.css";

function EditCustomers({
  open,
  invoice_currency,
  cust_payment_terms,
  changeHandler,
  handleClose,
  handleClickOpen,
}) {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        sx={{ color: "#eceff1", width: "10vw" }}
      >
        EDIT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="edit-container"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <input
            autoFocus
            name="invoice_currency"
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            onChange={changeHandler}
            value={invoice_currency}
            variant="standard"
            className="Edit-txtBox"
          />
          <input
            autoFocus
            name="cust_payment_terms"
            margin="dense"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            onChange={changeHandler}
            value={cust_payment_terms}
            variant="standard"
            className="Edit-txtBox"
          />
          <input
            type="button"
            value="EDIT"
            onClick={() => handleClose(true)}
            style={{ color: "white", borderColor: "white" }}
          />
          <input
            type="button"
            value="CANCEL"
            onClick={() => handleClose(false)}
            style={{ color: "white", borderColor: "white" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditCustomers;
