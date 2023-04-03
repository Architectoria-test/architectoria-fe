import React, { useState } from "react";

// MUI
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
// Icons
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import PercentIcon from "@mui/icons-material/Percent";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

// Styles
import "./styles.css";

const BottomFixedMenu = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper className="bottom-menu-paper">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="bottom-menu-paper-button"
          label="Изделия"
          icon={<BedOutlinedIcon />}
        />
        <BottomNavigationAction label="Акции" icon={<PercentIcon />} />
        <BottomNavigationAction
          label="Расчеты"
          icon={<CalculateOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomFixedMenu;
