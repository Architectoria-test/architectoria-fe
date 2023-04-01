import React from "react";

// Components
import BasePrice from "../BasePrice/BasePrice";

// Styles
import "./styles.css";

const CurrentPrice = (props) => {
  const { children } = props;
  return <BasePrice className="current-price">{children}</BasePrice>;
};

export default CurrentPrice;
