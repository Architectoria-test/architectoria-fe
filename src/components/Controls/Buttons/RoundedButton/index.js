import React from "react";

import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRoundedButton = styled((props) => <IconButton {...props} />)(
  ({ theme }) => ({
    position: "absolute",
    backgroundColor: "#fff",
    top: "10px",
    right: "10px",
    padding: 0,
    color: "#263475",
    borderRadius: 100,
    [theme.breakpoints.up("md")]: {
      width: 53,
      height: 53,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 33,
      height: 33,
    },
    "&.MuiIconButton-root:hover": {},
  })
);

const RoundedButton = (props) => {
  const { children } = props;
  return <StyledRoundedButton {...props}>{children}</StyledRoundedButton>;
};

export default RoundedButton;
