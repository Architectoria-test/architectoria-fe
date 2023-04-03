import React from "react";

// MUI
import { Grid } from "@mui/material";

// Components
import BottomFixedMenu from "../../BottomFixedMenu";
import { BackButton } from "../../Controls/Buttons";

// Icons
import LogoIconSVG from "../../Icons/LogoIconSVG/LogoIconSVG";

// Styles
import "./styles.css";

const MenuLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Grid container flexDirection="column">
        <Grid className="logo-icon-wrapper">
          <LogoIconSVG className="logo-icon" />
        </Grid>
        <Grid p={2}>
          <BackButton>Кровати</BackButton>
        </Grid>
        <Grid className="content-wrapper">{children}</Grid>
      </Grid>
      <BottomFixedMenu />
    </>
  );
};

export default MenuLayout;
