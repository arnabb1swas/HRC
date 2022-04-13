import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { addCustomers, getData } from "../../services/data";
import "./AddCustomers.css";

function AddCustomers() {
  const [user, setUser] = useState({
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });

  const {
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  } = user;

  const clickHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = addCustomers(user);
    if (response) {
      setUser({
        business_code: "",
        cust_number: "",
        clear_date: "",
        buisness_year: "",
        doc_id: "",
        posting_date: "",
        document_create_date: "",
        due_in_date: "",
        invoice_currency: "",
        document_type: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: "",
      });
    }
  };

  const [data, setData] = useState([]);

  useEffect(async () => {
    setData(await getData());
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        sx={{ color: "#eceff1", width: "10vw" }}
        size="medium"
      >
        ADD
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>ADD</DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <div className="add-form">
            <form noValidate autoComplete="off">
              <div className="btn-row-1">
                <input
                  className="cust-btn"
                  type="text"
                  name="business_code"
                  value={business_code}
                  onChange={clickHandler}
                  placeholder="business_code"
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="cust_number"
                  value={cust_number}
                  onChange={clickHandler}
                  placeholder="cust_number"
                />
                <input
                  className="cust-btn-date"
                  type="date"
                  name="clear_date"
                  value={clear_date}
                  onChange={clickHandler}
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="buisness_year"
                  value={buisness_year}
                  onChange={clickHandler}
                  placeholder="buisness_year"
                />
              </div>
              <div className="btn-row-2">
                <input
                  className="cust-btn"
                  type="text"
                  name="doc_id"
                  value={doc_id}
                  onChange={clickHandler}
                  placeholder="doc_id"
                />
                <input
                  className="cust-btn-date"
                  type="date"
                  name="posting_date"
                  value={posting_date}
                  onChange={clickHandler}
                />
                <input
                  className="cust-btn-date"
                  type="date"
                  name="document_create_date"
                  value={document_create_date}
                  onChange={clickHandler}
                />
                <input
                  className="cust-btn-date"
                  type="date"
                  name="due_in_date"
                  value={due_in_date}
                  onChange={clickHandler}
                />
              </div>
              <div className="btn-row-3">
                <input
                  className="cust-btn"
                  type="text"
                  name="invoice_currency"
                  value={invoice_currency}
                  onChange={clickHandler}
                  placeholder="invoice_currency"
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="document_type"
                  value={document_type}
                  onChange={clickHandler}
                  placeholder="document_type"
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="posting_id"
                  value={posting_id}
                  onChange={clickHandler}
                  placeholder="posting_id"
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="total_open_amount"
                  value={total_open_amount}
                  onChange={clickHandler}
                  placeholder="total_open_amount"
                />
              </div>
              <div className="btn-row-4">
                <input
                  className="cust-btn-date"
                  type="date"
                  name="baseline_create_date"
                  value={baseline_create_date}
                  onChange={clickHandler}
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="cust_payment_terms"
                  value={cust_payment_terms}
                  onChange={clickHandler}
                  placeholder="cust_payment_terms"
                />
                <input
                  className="cust-btn"
                  type="text"
                  name="invoice_id"
                  value={invoice_id}
                  onChange={clickHandler}
                  placeholder="invoice_id"
                />
              </div>
              <input
                className="submit-form"
                type="submit"
                value="ADD"
                onClick={submitHandler}
              />
              <input
                className="cust-btn close"
                type="button"
                value="CANCEL"
                onClick={clickClose}
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCustomers;
