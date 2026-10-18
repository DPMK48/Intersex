import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const navItems = [
  {
    label: "Home",
    key: "nav.home",
    url: "/",
  },
  {
    label: "About Us",
    key: "nav.aboutUs",
    url: "#",
    subLabels: [
      {
        name: "what is intersex",
        key: "nav.whatIsIntersex",
        url: "/about-us/what-is-intersex",
      },
      {
        name: "About Intersex Nigeria",
        key: "nav.aboutIntersexNigeria",
        url: "/about-us/about-intersex-nigeria",
      },
      {
        name: "meet the team",
        key: "nav.meetTheTeam",
        url: "/about-us/meet-the-team",
      },
    ],
  },
  {
    label: "Resources",
    key: "nav.resources",
    url: "#",
    subLabels: [
      {
        name: "epublications",
        key: "nav.epublications",
        url: "/resources/epublications",
      },
      {
        name: "toolkits",
        key: "nav.toolkits",
        url: "/resources/toolkit",
      },
      {
        name: "articles",
        key: "nav.articles",
        url: "/resources/articles",
      },
      {
        name: "Annual Reports",
        key: "nav.annualReports",
        url: "/resources/annual-reports",
      },
      {
        name: "Our Programs",
        key: "nav.ourPrograms",
        url: "/resources/programs",
      },
    ],
  },
  {
    label: "Gallery",
    key: "nav.gallery",
    url: "/gallery",
  },
  {
    label: "Career",
    key: "nav.career",
    url: "/career/join-the-team",
  },
  {
    label: "News",
    key: "nav.news",
    url: "#",
    subLabels: [
      { name: "news", key: "nav.newsSub", url: "/news" },
      { name: "memo", key: "nav.memo", url: "/news/memo" },
    ],
  },
  {
    label: "Contact",
    key: "nav.contact",
    url: "#",
    subLabels: [
      { name: "Contact Us", key: "nav.contactUs", url: "/contact" },
      {
        name: "Reports at Intersex Nigeria",
        key: "nav.reportsAtIntersex",
        url: "/reports-at-intersex-nigeria",
      },
    ],
  },
];

export const topNavItems = [
  {
    icon: FaLocationDot,
    text: "Address : Lagos & Abuja",
    key: "common.addressText",
  },
  {
    icon: FaPhone,
    text: "Call : +2349129057794",
    key: "common.callText",
  },
  {
    icon: FaEnvelope,
    text: "Email: info@intersexnigeria.org",
    key: "common.emailText",
  },
];
