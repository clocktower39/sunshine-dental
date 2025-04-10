import React from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

export default function Team({ teamMembers }) {
  return (
    <Box id="team">
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Poppins"
        sx={{ paddingBottom: "25px" }}
      >
        Meet Our Team
      </Typography>
      <Grid container flexDirection="row" justifyContent="space-around">
        {teamMembers.map((member) => (
          <Grid container size={3} flexDirection="column" textAlign="center" alignItems="center">
            <Avatar sx={{ width: 150, height: 150, }} />
            <Typography fontFamily="Poppins" sx={{ borderBottom: "2px solid #00bfe0" }}>
              {member.firstName} {member.lastName}
            </Typography>
            <Typography fontFamily="Poppins">{member.title}</Typography>
            {member.degree.length > 0 && (
              <Typography fontFamily="Poppins">{member.degree.join(", ")}</Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
