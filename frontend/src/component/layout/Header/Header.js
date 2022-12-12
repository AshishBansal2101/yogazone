import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.svg";
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Contact",
  link3Text: "About",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/contact",
  link3Url: "/about",
  link4Url: "/login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
