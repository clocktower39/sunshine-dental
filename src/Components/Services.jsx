import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Services({ services }) {
  return (
    <Box
      id="services"
      sx={{
        margin: "25px 0",
        padding: "25px 0",
        textAlign: "center",
        backgroundColor: "#009BE5",
        color: "#FFF",
      }}
    >
      <Container maxWidth="lg" sx={{ paddingBottom: "15px" }}>
        <Typography variant="h4" textAlign="center" sx={{ padding: "25px 0" }}>
          Our Services
        </Typography>
        <Grid container item flexDirection="row" spacing={6}>
          {services.map((service, index) => (
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={4}
              flexDirection="column"
              textAlign="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #00bfe0", fontFamily: "Poppins" }}
              >
                {service.title}
              </Typography>
              <Typography fontFamily="Poppins" textAlign="left">
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
