import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Routes } from "../../routes/baseRoutes";

export const footerItems = [
  {
    label: "Quick links",
    key: "footer.quickLinks",
    subLabels: [
      { name: "Home", key: "nav.home", url: "/" },
      { name: "About us", key: "nav.aboutUs", url: Routes.about },
      { name: "What is Intersex", key: "nav.whatIsIntersex", url: Routes.intersex },
      { name: "Gallery", key: "nav.gallery", url: Routes.gallery },
      { name: "News", key: "nav.news", url: Routes.news },
      { name: "Contact us", key: "nav.contactUs", url: Routes.contact },
      {
        name: "Reports at Intersex Nigeria",
        key: "nav.reportsAtIntersex",
        url: Routes.reportsLanding,
      },
      { name: "Get To Know", key: "nav.getToKnow", url: Routes.getToKnow },
    ],
  },
  {
    label: "Resources",
    key: "footer.resources",
    subLabels: [
      { name: "epublications", key: "nav.epublications", url: Routes.epub },
      { name: "toolkits", key: "nav.toolkits", url: Routes.toolkits },
      { name: "articles", key: "nav.articles", url: Routes.articles },
      { name: "Annual Reports", key: "nav.annualReports", url: Routes.reports },
      {
        name: "Our Programs",
        key: "nav.ourPrograms",
        url: Routes.advocacy,
      },
      {
        name: "Intersectional Knowledge",
        key: "nav.intersectionalKnowledge",
        url: Routes.intersectionality,
      },
    ],
  },
  {
    label: "Career",
    key: "footer.career",
    subLabels: [
      { name: "join the team", key: "nav.joinTheTeam", url: Routes.careers },
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
