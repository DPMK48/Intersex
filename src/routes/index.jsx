import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import Layout from "./Layout";
import Intersex from "../components/pages/AboutUs/Intersex";
import CareersPage from "../components/pages/Career/JoinTheTeam";
import Contact1 from "../components/pages/Contact/Contact1";
import Gallery from "../components/pages/Gallery/Gallery";
import NewsArticles from "../components/pages/News";
import Memos from "../components/pages/News/Memos";
import Memo from "../components/pages/News/Memo";
import AdvocacyProjects from "../components/pages/Resources/AdvocacyProjects";
import AnnualReports from "../components/pages/Resources/AnnualReports";
import Articles from "../components/pages/Resources/Articles";
import Epubs from "../components/pages/Resources/Epubs";
import Toolkits from "../components/pages/Resources/Toolkits";
import AnimationVideos from "../components/pages/Resources/AnimationVideos";
import Article from "../components/pages/Resources/Article";
import AdvocacyProject from "../components/pages/Resources/AdvocacyProject";
import Error from "../components/pages/ErrorPage/Error";
import Job from "../components/pages/Career/Job";
import TeamMembers from "../components/pages/AboutUs/TeamMembers";
import Team from "../components/pages/AboutUs/Team2";
import PageMeta from "../components/PageMeta";
import {
  aboutPageSchema,
  advocacyPageSchema,
  articlesPageSchema,
  careersPageSchema,
  contactPageSchema,
  epubPageSchema,
  galleryPageSchema,
  homePageSchema,
  newsPageSchema,
  reportsPageSchema,
  teamPageSchema,
  toolkitPageSchema,
} from "./schema";
import Faq from "../components/pages/Faqs/Faqs";
import WhatIsIntersex from "../components/pages/AboutUs/WhatIsIntersex";
import Intersectionality from "../components/pages/intersectionality";
import Resource from "../components/pages/intersectionality/Resource";
import Report from "../components/pages/Contact/Report";
import ReportRightsViolation from "../components/pages/Contact/ReportRightsViolation";
import ReportsLanding from "../components/pages/Contact/ReportsLanding";
import Home from "../components/pages/Home";
import GetToKnow from "../components/pages/GetToKnow/GetToKnow";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <PageMeta
              titleKey="meta.homeTitle"
              defaultTitle="Intersex Nigeria: Advocating for Intersex People in Nigeria"
              descKey="meta.homeDesc"
              defaultDesc="Intersex Nigeria is an NGO that raises awareness and advocate for the sexual reproductive health and overall human rights of intersex persons in Nigeria."
              url="https://intersexnigeria.org"
              schema={homePageSchema}
            />
            <Home />
          </>
        ),
      },
      {
        path: Routes.about,
        element: (
          <>
            <PageMeta
              titleKey="meta.aboutTitle"
              defaultTitle="About Intersex Nigeria"
              descKey="meta.aboutDesc"
              defaultDesc="Learn about Intersex Nigeria, founded to raise awareness about intersex persons, combat stigmas, advocate for intersex rights and promote bodily autonomy."
              url="https://intersexnigeria.org/about-us/about-intersex-nigeria"
              schema={aboutPageSchema}
            />
            <Intersex />
          </>
        ),
      },
      {
        path: Routes.intersex,
        element: (
          <>
            <PageMeta
              titleKey="meta.whatIsIntersexTitle"
              defaultTitle="What is Intersex"
              descKey="meta.aboutDesc"
              defaultDesc="What is Intersex"
              url="https://intersexnigeria.org/about-us/about-intersex-nigeria"
              schema={aboutPageSchema}
            />
            <WhatIsIntersex />
          </>
        ),
      },
      {
        path: Routes.team,
        element: (
          <>
            <PageMeta
              titleKey="meta.teamTitle"
              defaultTitle="Meet the Team"
              descKey="meta.teamDesc"
              defaultDesc="Meet the team at Intersex Nigeria, committed to advocating for the rights, health, and autonomy of intersex people."
              url="https://intersexnigeria.org/about-us/meet-the-team"
              schema={teamPageSchema}
            />
            <Team />
          </>
        ),
      },
      {
        path: Routes.person,
        element: <TeamMembers />,
      },
      {
        path: Routes.careers,
        element: (
          <>
            <PageMeta
              titleKey="meta.careersTitle"
              defaultTitle="Careers"
              descKey="meta.careersDesc"
              defaultDesc="Be part of a diverse team working towards creating a more inclusive society for intersex persons. Join our mission at Intersex Nigeria!"
              url="https://intersexnigeria.org/career/join-the-team"
              schema={careersPageSchema}
            />
            <CareersPage />
          </>
        ),
      },
      {
        path: Routes.job,
        element: <Job />,
      },
      {
        path: Routes.reportsLanding,
        element: (
          <>
            <PageMeta
              titleKey="meta.reportsTitle"
              defaultTitle="Reports at Intersex Nigeria"
              descKey="meta.reportsDesc"
              defaultDesc="Submit safeguarding reports or report intersex human rights violations and cases to Intersex Nigeria. Your submissions are safe, secure, and confidential."
              url="https://intersexnigeria.org/reports-at-intersex-nigeria"
            />
            <ReportsLanding />
          </>
        ),
      },
      {
        path: Routes.safeguarding,
        element: (
          <>
            <PageMeta
              titleKey="meta.safeguardingTitle"
              defaultTitle="Safeguarding at Intersex Nigeria"
              descKey="meta.safeguardingDesc"
              defaultDesc="Safeguarding is everyone's duty at Intersex Nigeria. Report abuse, harassment, boundary violations or other concerns confidentially."
              url="https://intersexnigeria.org/reports-at-intersex-nigeria/safeguarding"
            />
            <Report />
          </>
        ),
      },
      {
        path: Routes.intersexViolations,
        element: (
          <>
            <PageMeta
              titleKey="meta.violationsTitle"
              defaultTitle="Intersex Violations and Cases"
              descKey="meta.violationsDesc"
              defaultDesc="Report intersex human rights violations and cases to Intersex Nigeria. Your submission is confidential and protected."
              url="https://intersexnigeria.org/reports-at-intersex-nigeria/violations-and-cases"
            />
            <ReportRightsViolation />
          </>
        ),
      },
      {
        path: Routes.contact,
        element: (
          <>
            <PageMeta
              titleKey="meta.contactTitle"
              defaultTitle="Contact Us"
              descKey="meta.contactDesc"
              defaultDesc="Have questions or want to contribute to our cause? Contact Intersex Nigeria to learn more, make inquiries, or support our advocacy for intersex rights."
              url="https://intersexnigeria.org/contact"
              schema={contactPageSchema}
            />
            <Contact1 />
          </>
        ),
      },
      {
        path: Routes.gallery,
        element: (
          <>
            <PageMeta
              titleKey="meta.galleryTitle"
              defaultTitle="Gallery"
              descKey="meta.galleryDesc"
              defaultDesc="A Photo Gallery of Intersex Nigeria's Advocacy, Events, and Community Impact"
              url="https://intersexnigeria.org/gallery"
              schema={galleryPageSchema}
            />
            <Gallery />
          </>
        ),
      },
      {
        path: Routes.news,
        element: (
          <>
            <PageMeta
              titleKey="meta.newsTitle"
              defaultTitle="News"
              descKey="meta.newsDesc"
              defaultDesc="Stay updated with the latest news, stories, and updates from Intersex Nigeria."
              url="https://intersexnigeria.org/news"
              schema={newsPageSchema}
            />
            <NewsArticles />
          </>
        ),
      },
      {
        path: Routes.memos,
        element: <Memos />,
      },
      {
        path: Routes.memo,
        element: <Memo />,
      },
      {
        path: Routes.advocacy,
        element: (
          <>
            <PageMeta
              titleKey="meta.programsTitle"
              defaultTitle="Our Programs"
              descKey="meta.programsDesc"
              defaultDesc="Discover how Intersex Nigeria advocates for the rights, visibility, and inclusion of intersex people through education, outreach, and awareness campaigns."
              url="https://intersexnigeria.org/resources/programs"
              schema={advocacyPageSchema}
            />
            <AdvocacyProjects />
          </>
        ),
      },
      {
        path: Routes.project,
        element: <AdvocacyProject />,
      },
      {
        path: Routes.reports,
        element: (
          <>
            <PageMeta
              titleKey="meta.annualReportsTitle"
              defaultTitle="Annual Reports"
              descKey="meta.annualReportsDesc"
              defaultDesc="Explore Intersex Nigeria's annual reports for updates on advocacy, campaigns, and capacity development for intersex rights and visibility in Nigeria."
              url="https://intersexnigeria.org/resources/annual-reports"
              schema={reportsPageSchema}
            />
            <AnnualReports />
          </>
        ),
      },
      {
        path: Routes.articles,
        element: (
          <>
            <PageMeta
              titleKey="meta.articlesTitle"
              defaultTitle="Articles"
              descKey="meta.articlesDesc"
              defaultDesc="Explore insightful articles from Intersex Nigeria covering advocacy, intersex rights, health, and community stories, promoting awareness and inclusion."
              url="https://intersexnigeria.org/resources/articles"
              schema={articlesPageSchema}
            />
            <Articles />
          </>
        ),
      },
      {
        path: Routes.article,
        element: <Article />,
      },
      {
        path: Routes.epub,
        element: (
          <>
            <PageMeta
              titleKey="meta.epubTitle"
              defaultTitle="Epublications"
              descKey="meta.epubDesc"
              defaultDesc="Explore societal perceptions of intersex persons in our ePublications, addressing attitudes, biases, and harmful practices."
              url="https://intersexnigeria.org/resources/epublications"
              schema={epubPageSchema}
            />
            <Epubs />
          </>
        ),
      },
      {
        path: Routes.animationVideos,
        element: <AnimationVideos />,
      },
      {
        path: Routes.toolkits,
        element: (
          <>
            <PageMeta
              titleKey="meta.toolkitTitle"
              defaultTitle="Toolkit"
              descKey="meta.toolkitDesc"
              defaultDesc="An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
              url="https://intersexnigeria.org"
              schema={toolkitPageSchema}
            />
            <Toolkits />
          </>
        ),
      },
      {
        path: Routes.faq,
        element: (
          <>
            <PageMeta
              titleKey="meta.faqTitle"
              defaultTitle="Frequently Asked Questions"
              descKey="meta.homeDesc"
              defaultDesc="Find answers to some of the most common questions about intersex individuals, their rights, and how to support them."
              url="https://intersexnigeria.org/faqs"
              schema={toolkitPageSchema}
            />
            <Faq />
          </>
        ),
      },
      {
        path: Routes.getToKnow,
        element: (
          <>
            <PageMeta
              titleKey="meta.getToKnowTitle"
              defaultTitle="Intersex Get To Know Questions | Intersex Nigeria"
              descKey="meta.getToKnowDesc"
              defaultDesc="Intersex Nigeria Getting To Know Questions For Intersex Persons. A safe and affirming space to connect with the intersex community in Nigeria."
              url="https://intersexnigeria.org/get-to-know"
            />
            <GetToKnow />
          </>
        ),
      },
      {
        path: Routes.notFound,
        element: <Error />,
      },
    ],
  },
  {
    path: Routes.intersectionality,
    element: <Intersectionality />,
  },
  {
    path: Routes.intersectionalityResource,
    element: <Resource />,
  },
]);

export default router;
