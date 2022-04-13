import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import RefreshIcon from "@material-ui/icons/Refresh";
import { DataGrid,GridSearchIcon  } from "@mui/x-data-grid";
import { deleteCustomers, editCustomers, getData, AdvanceSrch } from "../../services/data";
import { useState, useEffect } from "react";
import AddCustomers from "../add/AddCustomers";
import EditCustomers from "../edit/EditCustomers";
import DeleteCustomers from "../delete/DeleteCustomers";
import Advance from "../advance/Advance";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledButtons";
import "./StyledButtons.jsx";

var column = [
  { title: "sl_no", field: "sl_no" },
  { title: "business_code", field: "business_code", width: 150 },
  { title: "cust_number", field: "cust_number", width: 150 },
  { title: "clear_date", field: "clear_date", width: 150 },
  { title: "buisness_year", field: "buisness_year", width: 150 },
  { title: "doc_id", field: "doc_id", width: 150 },
  { title: "posting_date", field: "posting_date", width: 150 },
  {
    title: "document_create_date",
    field: "document_create_date",
    width: 150,
  },
  { title: "due_in_date", field: "due_in_date", width: 150 },
  { title: "invoice_currency", field: "invoice_currency", width: 150 },
  { title: "document_type", field: "document_type", width: 150 },
  { title: "posting_id", field: "posting_id", width: 150 },
  { title: "total_open_amount", field: "total_open_amount", width: 150 },
  {
    title: "baseline_create_date",
    field: "baseline_create_date",
    width: 150,
  },
  { title: "cust_payment_terms", field: "cust_payment_terms", width: 150 },
  { title: "invoice_id", field: "invoice_id", width: 150 },
];

function Buttons() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    setData(await getData());
  }, []);

  //EDIT
  const [open, setOpen] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [edit, setEdit] = useState({
    invoice_currency: "",
    cust_payment_terms: "",
  });

  const { invoice_currency, cust_payment_terms } = edit;

  const handleClickOpen = () => {
    if (selectedRows.length === 1) {
      setOpen({
        open: true,
      });

      setEdit({
        sl_no: selectedRows[0].sl_no,
        invoice_currency: selectedRows[0].invoice_currency,
        cust_payment_terms: selectedRows[0].cust_payment_terms,
      });
    } else {
      alert("Please select 1 row at a time");
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleClose = async (update) => {
    if (update) {
      let response = await editCustomers(edit);
    }
    setOpen(false);
  };

  //DELETE
  const [dltOpen, setDltOpen] = React.useState(false);
  const handleClickDltOpen = () => {
    if (selectedRows.length > 0) {
      setDltOpen({
        dltOpen: true,
      });
      setEdit({
        sl_no: selectedRows.sl_no,
      });
    } else {
      alert("No rows selected");
    }
  };

  const handleDltClose = async (update) => {
    if (update) {
      let response = await deleteCustomers(edit.sl_no);
    }
    setDltOpen(false);
  };

  //ADVANCE SEARCH

  const [advOpen, setAdvOpen] = React.useState(false);

  const [advance, setAdvance] = useState({
    cust_number: "",
    buisness_year: "",
    doc_id: "",
    invoice_id: "",
  });

  const { cust_number, buisness_year, doc_id, invoice_id } = advance;

  const changeAdvHandler = (e) => {
    const { name, value } = e.target;
    setAdvance({ ...advance, [name]: value });
  };

  const submitAdvHandler = async (e) => {
    e.preventDefault();
    let response = await AdvanceSrch(advance);
    console.log(response);
    if (response) {
      let data = response.customers;
      setData(data.map((customer, index) => ({ ...customer, id: index })));
      setAdvance({
        cust_number: "",
        buisness_year: "",
        doc_id: "",
        invoice_id: "",
      });
    }
  };

  const handleClickAdvOpen = () => {
    setAdvOpen(true);
  };

  const handleAdvClose = () => {
    setAdvOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#283d4a",
        padding: "1rem 0.8rem",
        "& > *": {
          m: 1,
        },
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button
              variant="contained"
              sx={{ color: "#eceff1", width: "11vw" }}
            >
              PREDICT
            </Button>
            <Button sx={{ color: "#eceff1", width: "10vw" }}>
              ANALYTICS VIEW
            </Button>
            <Advance
              cust_number={cust_number}
              buisness_year={buisness_year}
              doc_id={doc_id}
              invoice_id={invoice_id}
              changeAdvHandler={changeAdvHandler}
              submitAdvHandler={submitAdvHandler}
              advOpen={advOpen}
              handleClickAdvOpen={handleClickAdvOpen}
              handleAdvClose={handleAdvClose}
            />
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            sx={{ width: "3vw", height: "0.93cm" }}
            onClick={() => {
              window.location.reload(false);
            }}
          ></Button>
        </Grid>

        <Search sx={{ width: "33%" }}>
          <SearchIconWrapper>
            <GridSearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Customer ID"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Grid item xs={4}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <AddCustomers />

            <EditCustomers
              open={open}
              invoice_currency={invoice_currency}
              cust_payment_terms={cust_payment_terms}
              changeHandler={changeHandler}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
            />

            <DeleteCustomers
              dltOpen={dltOpen}
              handleClickDltOpen={handleClickDltOpen}
              handleDltClose={handleDltClose}
            />
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 550, width: "100" }}>
            <DataGrid
              sx={{
                "& .MuiToolbar-root": {
                  color: "white",
                },
                border: "none",
                backgroundColor: "#283d4a",
                color: "white",
                "& .MuiDataGrid-columnSeparator--sideRight": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  color: "white",

                  textOverflow: "clip",
                  whiteSpace: "break-spaces",
                  lineHeight: 1,
                  margin: "7px",
                },
              }}
              getRowId={(row) => row.sl_no}
              rows={data}
              columns={column}
              rowsPerPageOptions={[5, 10, 15, 50, 100]}
              checkboxSelection
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRowsdata = data.filter((row) =>
                  selectedIDs.has(row.sl_no)
                );
                setSelectedRows(selectedRowsdata);
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Buttons;