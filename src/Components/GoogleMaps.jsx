import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function GoogleMaps() {
  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.4476831414477!2d-111.9114703669512!3d33.33325214371949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b06e4b7a2cc41%3A0x96403a75381fb0b1!2sSunshine%20Dental!5e0!3m2!1sen!2sus!4v1726646956196!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}
