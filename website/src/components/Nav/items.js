import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "#",
    subLabels: [
      { name: "what is intersex", url: "/about-us/what-is-intersex" },
      {
        name: "About Intersex Nigeria",
        url: "/about-us/about-intersex-nigeria",
      },
      { name: "meet the team", url: "/about-us/meet-the-team" },
    ],
  },
  {
    label: "Resources",
    url: "#",
    subLabels: [
      { name: "epublications", url: "/resources/epublications" },
      { name: "toolkits", url: "/resources/toolkit" },
      { name: "articles", url: "/resources/articles" },
      { name: "Annual Reports", url: "/resources/annual-reports" },
      { name: "Our Programs", url: "/resources/programs" },
    ],
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Career",
    url: "/career/join-the-team",
  },
  {
    label: "News",
    url: "#",
    subLabels: [
      { name: "news", url: "/news" },
      { name: "memo", url: "/news/memo" },
    ],
  },
  // {
  //   label: "FAQs",
  //   url: "/frequently-asked-questions",
  // },
  {
    label: "Contact",
    url: "#",
    subLabels: [
      { name: "Contact Us", url: "/contact" },
      { name: "Reports at Intersex Nigeria", url: "/reports-at-intersex-nigeria" },
    ],
  },
];

export const topNavItems = [
  { icon: FaLocationDot, text: "Address : Lagos & Abuja" },
  { icon: FaPhone, text: "Call : +2349129057794" },
  { icon: FaEnvelope, text: "Email: info@intersexnigeria.org" },
];
