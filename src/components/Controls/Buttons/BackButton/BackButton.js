import React from "react";

// MUI
import { Button, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

// Styles
import "./styles.css";

const BackButton = (props) => {
  const { children } = props;
  return (
    <Button className="back-btn" startIcon={<ArrowBackIosNewOutlinedIcon />}>
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default BackButton;
