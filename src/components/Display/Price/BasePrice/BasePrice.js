import React from "react";

// MUI
import { Typography } from "@mui/material";

const BasePrice = (props) => {
  const { children } = props;
  return (
    <Typography variant="body2" {...props}>
      {`${children} ₽`}
    </Typography>
  );
};

export default BasePrice;
