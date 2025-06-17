import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router";
import WebsiteNavbar from "../Components/WebsiteNavbar";
import Footer from "../Components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <WebsiteNavbar />
      <Grid container sx={{ alignContent: "center", height: "calc(100vh - 200px)" }}>
        <Grid container size={12} sx={{ alignItems: "center", justifyContent: "center" }}>
          <Typography textAlign="center" variant="h4">
            404: Page Not Found
          </Typography>
        </Grid>
        <Grid container size={12} sx={{ alignItems: "center", justifyContent: "center" }}>
          <Button component={Link} to="/">
            Go Home
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
