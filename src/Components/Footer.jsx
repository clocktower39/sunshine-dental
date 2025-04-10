import React from "react";
import { Container, Grid, IconButton, Typography } from "@mui/material";

const styles = () => ({
  FooterContainer: { backgroundColor: "#FFF", borderTop: '1px solid black' },
  FooterText: { fontSize: "10px" },
  JustifyContentCenter: { justifyContent: "center" },
});

export default function Footer() {
  const classes = styles();

  return (
    <div style={classes.FooterContainer}>
      <Container maxWidth="md">
        <Grid container spacing={3} sx={{ ...classes.JustifyContentCenter }}>
          <Grid container size={12} sx={{ ...classes.JustifyContentCenter }}>
            <Typography variant="body1" sx={classes.FooterText}>
              Copyright © 2025 Sunshine Dental Tempe - All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
