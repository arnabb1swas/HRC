import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

//?Styling for the main add/delete/delete buttons

const Search = styled("div")(({ theme }) => ({
  color: "#fefefe",
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha("#fefefe", 0.3),
  "&:hover": {
    backgroundColor: alpha("#fefefe", 0.5),
  },
  marginRight: "2rem",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 0.6rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "0.5rem 0.5rem 0.5rem 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1rem + 0.7*3rem)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };