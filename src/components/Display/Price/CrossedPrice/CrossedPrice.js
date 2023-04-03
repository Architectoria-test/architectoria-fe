import React from "react";

// Components
import BasePrice from "../BasePrice/BasePrice";

// Styles
import "./styles.css";

const CrossedPrice = (props) => {
  const { children } = props;
  return <BasePrice className="crossed-price">{children}</BasePrice>;
};

export default CrossedPrice;
