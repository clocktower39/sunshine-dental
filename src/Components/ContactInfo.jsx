import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Phone as PhoneIcon, Fax as FaxIcon, Email as EmailIcon } from "@mui/icons-material";

export default function ContactInfo({ cardInfo }) {
  return (
    <Box
      id="contact"
      sx={{
        margin: "25px 0",
        padding: "25px 0",
        textAlign: "center",
        backgroundColor: "#009BE5",
        color: "#FFF",
      }}
    >
      <Container maxWidth="md">
        <Grid container item flexDirection="row" spacing={5}>
          <Grid container item flexDirection="column" xs={12} sm={6}>
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Poppins"
              sx={{ padding: "7.5px 0" }}
            >
              Contact Us
            </Typography>
            <Typography fontFamily="Poppins">
              <PhoneIcon />: {cardInfo.phone}
            </Typography>
            <Typography fontFamily="Poppins">
              <FaxIcon />: {cardInfo.fax}
            </Typography>
            <Typography fontFamily="Poppins">
              <EmailIcon />: <a href={`mailto:${cardInfo.email}`}>{cardInfo.email}</a>
            </Typography>
            <Typography fontFamily="Poppins">
              {cardInfo.address.street1} {cardInfo.address.street2}{" "}
              {`${cardInfo.address.city}, ${cardInfo.address.state} ${cardInfo.address.zipcode}`}
            </Typography>
          </Grid>

          <Grid container item flexDirection="column" xs={12} sm={6}>
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Poppins"
              sx={{ padding: "5px 0" }}
            >
              Business Hours
            </Typography>
            <Grid container item justifyContent="center" sx={{}}>
              <ul
                style={{
                  fontSize: "16px",
                  paddingLeft: "0", // Remove default padding of the ul
                }}
              >
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Monday:</span>
                  <span style={{ paddingLeft: "25px" }}>9:00 AM - 6:00 PM</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Tuesday:</span>
                  <span>Closed</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Wednesday:</span>
                  <span style={{ paddingLeft: "25px" }}>9:00 AM - 6:00 PM</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Thursday:</span>
                  <span>Closed</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Friday:</span>
                  <span style={{ paddingLeft: "25px" }}>9:00 AM - 5:00 PM</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Saturday:</span>
                  <span>Closed</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
