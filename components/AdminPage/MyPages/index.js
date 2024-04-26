import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

const MyPages = () => {
  const pages = [
    { pageName: "Главная страница", endPoint: "mainPage" },
    { pageName: "Разработка сайтов", endPoint: "webPage" },
    { pageName: "Продвижение сайтов", endPoint: "webAdPage" },
    { pageName: "Ведение соц.сетей", endPoint: "smm" },
    { pageName: "Продвижение соц.сетей", endPoint: "smmAds" },
  ];

  return (
    <>
      <Typography variant="h5" sx={{ mt: 2, textAlign: "center" }}>
        Мои страницы
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {pages.map((page, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Link
              href={`/admin/pages/${page.endPoint}`}
              passHref
            >
              <Button variant="outlined" fullWidth style={{ height: "100px" }}>
                {page.pageName}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyPages;
