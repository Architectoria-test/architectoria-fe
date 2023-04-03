import React from "react";

// MUI
import { Grid, Stack, Skeleton } from "@mui/material";

// Components
import CardBed from "../CardBed/CardBed";

// Hooks
import useFetch from "../../../hooks/useFetch";

// Styles
import "./styles.css";

const BEDS = [
  {
    title: "Кровать Олимпия",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "40500.00",
    slug: "olimpiya",
    created_at: "2023-04-01T13:35:10.781639Z",
    updated_at: "2023-04-01T13:35:10.781655Z",
  },
  {
    title: "Кровать Ла Скала",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "38000.00",
    slug: "la-skala",
    created_at: "2023-04-01T13:35:10.791216Z",
    updated_at: "2023-04-01T13:35:10.791229Z",
  },
  {
    title: "Кровать Пантеон",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "35500.00",
    slug: "krovat-panteon",
    created_at: "2023-04-01T13:35:10.799037Z",
    updated_at: "2023-04-01T13:35:10.799063Z",
  },
  {
    title: "Кровать Олимпия",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "40500.00",
    slug: "olimpiya",
    created_at: "2023-04-01T13:35:10.781639Z",
    updated_at: "2023-04-01T13:35:10.781655Z",
  },
  {
    title: "Кровать Ла Скала",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "38000.00",
    slug: "la-skala",
    created_at: "2023-04-01T13:35:10.791216Z",
    updated_at: "2023-04-01T13:35:10.791229Z",
  },
  {
    title: "Кровать Пантеон",
    image:
      "https://api.architektoria.ru/media/shop/product/gallery/0004/4440.jpg",
    price: "35500.00",
    slug: "krovat-panteon",
    created_at: "2023-04-01T13:35:10.799037Z",
    updated_at: "2023-04-01T13:35:10.799063Z",
  },
];

const ListBeds = () => {
  const [data, loading, error] = useFetch({
    url: "http://localhost:8000/api/v1/items/detail/",
  });
  return loading ? (
    <Stack>
      {Array(6).map(() => (
        <Skeleton variant="rectangular" width={210} height={60} />
      ))}
    </Stack>
  ) : (
    <Grid
      container
      spacing={{ xs: 2, md: 4, sm: 3 }}
      columns={{ xs: 4, sm: 6, md: 8 }}
    >
      {BEDS.map((bed, index) => (
        <Grid item xs={2} sm={2} md={2} key={index}>
          <CardBed bed={bed} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListBeds;
