import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Phone as PhoneIcon } from "@mui/icons-material";
import WebsiteNavbar from "../Components/WebsiteNavbar";
import Team from "../Components/Team";
import ContactInfo from "../Components/ContactInfo";
import GoogleMaps from "../Components/GoogleMaps";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import useWindowWidth from "../Hooks/WindowWidth";
import SunshineDentalCardImg from "../img/sunshine_dental_card.jpg";
import sunshineDentalBannerImg from "../img/sunshine_dental_banner.jpg";
import "../App.css";

const teamMembers = [
  {
    firstName: "Hai",
    lastName: "Trang",
    title: "Dentist",
    degree: ["DDS"],
  },
//   {
//     firstName: "Jessee",
//     lastName: "",
//     title: "Hygienist",
//     degree: [],
//   },
//   {
//     firstName: "Amy",
//     lastName: "Cho",
//     title: "IDK",
//     degree: [],
//   },
];

const cardInfo = {
  business: "Sunshine Dental",
  doctor: {
    firstName: "Hai",
    lastName: "Trang",
    title: "DDS",
  },
  address: {
    street1: "1761 E. Warner Rd.",
    street2: "Suite A-14",
    city: "Tempe",
    state: "AZ",
    zipcode: "85284",
  },
  phone: "(480) 755-3320",
  fax: "(480) 755-0536",
  email: "sunshinedental14@gmail.com",
};

const services = [
  {
    title: "Fillings",
    description:
      "At our practice, we use dental fillings to restore your teeth to their natural health and function. By removing decayed or damaged areas and carefully filling the cavity, we not only protect your tooth from further damage but also ensure a seamless, natural look. This simple procedure can make a big difference in preserving your smile for years to come.",
  },
  {
    title: "Extractions",
    description:
      "Sometimes, removing a tooth is the best option for your overall oral health. Whether it’s a severely decayed tooth, an impacted wisdom tooth, or to make room for orthodontic treatment, we perform extractions with precision and care. Our focus is always on your comfort and ensuring a smooth recovery.",
  },
  {
    title: "Braces",
    description:
      "Braces are a time-tested solution for straightening teeth and aligning your bite. Whether you're a teen or an adult, orthodontic treatment can transform your smile and boost your confidence. We tailor our braces to your needs, ensuring effective and comfortable care every step of the way.",
  },
  {
    title: "Clear Aligner / Invisalign",
    description:
      "Clear aligners, like Invisalign, offer a discreet and convenient way to straighten your teeth. These nearly invisible trays are custom-designed for your smile, allowing you to achieve the results you want without the appearance of traditional braces. Plus, they’re removable, making it easy to maintain your daily routines.",
  },
  {
    title: "Implants",
    description:
      "Dental implants are a long-term solution for missing teeth, designed to look, feel, and function like your natural teeth. They not only restore your smile but also protect your jawbone from deterioration. Our advanced techniques ensure a durable and comfortable result, helping you regain confidence in your smile.",
  },
  {
    title: "All on Four",
    description:
      "The All-on-Four treatment is a game-changer for patients with significant tooth loss. With just four implants, we can securely anchor a full set of teeth, providing you with a stable, natural-looking smile. This permanent solution lets you eat, speak, and live confidently again.",
  },
  {
    title: "Cleanings",
    description:
      "Regular professional cleanings are the foundation of good oral health. During your cleaning, we remove plaque and tartar buildup, helping to prevent cavities and gum disease. Our gentle yet thorough approach leaves your teeth feeling fresh and your smile looking its best.",
  },
  {
    title: "Root Canal",
    description:
      "When a tooth’s pulp becomes infected or damaged, a root canal can save the tooth and relieve your pain. This procedure removes the infection, cleans the interior, and seals the tooth to prevent further issues. We make root canals as comfortable as possible, so you can get back to smiling pain-free.",
  },
  {
    title: "Crowns and Bridges",
    description:
      "Crowns and bridges are custom-designed to restore the strength, function, and appearance of your teeth. Whether you need to protect a damaged tooth or replace missing teeth, these durable solutions provide a seamless, natural look. Let us help you regain a full, beautiful smile.",
  },
];

const styles = (wide) => ({
  WelcomeBox: {
    backgroundPosition: "75%",
    minHeight: wide ? "calc(100vh - 234px)" : "calc(100vh - 191px)",
    textAlign: "center",
  },
});

export default function Home() {
  const wide = useWindowWidth(700);
  const classes = styles(wide);
  return (
    <>
      <WebsiteNavbar />

      <Box sx={classes.WelcomeBox}>
        <Container
          maxWidth="md"
          sx={{
            padding: "50px 0px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: { xs: "2.5em", sm: "3em" } }}
          >
            Welcome to Sunshine Dental!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: { xs: "1.1em", sm: "1.3em" },
            }}
          >
            We strive to provide the best possible care for our patients.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: { xs: "1.1em", sm: "1.3em" },
              paddingTop: "7.5px",
            }}
          >
            <PhoneIcon sx={{ verticalAlign: "middle" }} /> (480) 755-3320
          </Typography>
        </Container>

        <Box>
          <img
            src={sunshineDentalBannerImg}
            style={{
              width: "100%",
              maxHeight: wide ? "calc(100vh - 264px)" : "calc(100vh - 221px)",
            }}
          />
        </Box>
      </Box>

      <Team teamMembers={teamMembers} />

      <ContactInfo cardInfo={cardInfo} />

      <GoogleMaps />

      <Services services={services} />

      <Footer />
    </>
  );
}
