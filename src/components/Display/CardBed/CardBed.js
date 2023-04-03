import React from "react";
import PropType from "prop-types";

// MUI
import {
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

// Components
import CurrentPrice from "../Price/CurrentPrice/CurrentPrice";
import CrossedPrice from "../Price/CrossedPrice/CrossedPrice";
import { RoundedButton } from "../../Controls/Buttons";

// Styles
import "./styles.css";

const CardBed = (props) => {
  const { bed } = props;
  return (
    <Card elevation={0} sx={{ position: "relative" }}>
      <CardMedia component="img" image={bed.image} alt="Bed" />

      <CardContent sx={{ display: "flex" }}>
        <Grid container gap={1}>
          <Grid>
            <Typography variant="body1">{bed.title}</Typography>
          </Grid>
          <Grid container gap={1}>
            <Grid item>
              <CurrentPrice>{bed.price}</CurrentPrice>
            </Grid>
            <Grid item className="crossed-price-wrapper">
              <CrossedPrice>{bed.price}</CrossedPrice>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <RoundedButton>+</RoundedButton>
      {/* <Button className="card-bed-btn">+</Button> */}
    </Card>
  );
};

CardBed.propTypes = {
  bed: PropType.object,
};

export default CardBed;
