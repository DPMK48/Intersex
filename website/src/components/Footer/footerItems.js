import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Routes } from "../../routes/baseRoutes";

export const footerItems = [
  {
    label: "Quick links",
    subLabels: [
      { name: "Home", url: "/" },
      { name: "About us", url: Routes.about },
      { name: "What is Intersex", url: Routes.intersex},
      { name: "Gallery", url: Routes.gallery },
      { name: "News", url: Routes.news },
      { name: "Contact us", url: Routes.contact },
      { name: "Reports at Intersex Nigeria", url: Routes.reportsLanding },
      { name: "Get To Know", url: Routes.getToKnow },
    ],
  },
  {
    label: "Resources",
    subLabels: [
      { name: "epublications", url: Routes.epub },
      { name: "toolkits", url: Routes.toolkits },
      { name: "articles", url: Routes.articles },
      { name: "Annual Reports", url: Routes.reports },
      {
        name: "Our Programs",
        url: Routes.advocacy,
      },
      {
        name: "Intersectional Knowledge",
        url: Routes.intersectionality,
      },
    ],
  },
  {
    label: "Career",
    subLabels: [
      { name: "join the team", url: Routes.careers },
      // {
      //   name: "volunteer with us",
      //   url: "https://docs.google.com/forms/d/e/1FAIpQLScYttqFyJ8FYvoO8aw27Y_9It35Td3IuXoqxv9lfdWTFSi7Fg/viewform",
      // },
    ],
  },
];

export const socials = [
  { icon: FaTwitter, link: "https://x.com/intersexnigeria" },
  {
    icon: FaYoutube,
    link: "https://youtube.com/@intersexnigeria?si=P6gXeRhN0xPxadoK",
  },
  {
    icon: PiInstagramLogoFill,
    link: "https://www.instagram.com/intersex_nigeria_",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/share/Rt5nz46FcETJTm7d/?mibextid=LQQJ4d",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/intersexnigeria/",
  },
];
