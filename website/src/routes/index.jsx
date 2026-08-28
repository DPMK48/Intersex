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
import { Helmet } from "react-helmet-async";
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
            <Helmet>
              <title>
                Intersex Nigeria: Advocating for Intersex People in
                Nigeria
              </title>
              <meta
                name="description"
                content="Intersex Nigeria is an NGO that raises awareness and advocate for the sexual reproductive health and overall human rights of intersex persons in Nigeria."
              />
              <meta
                property="og:title"
                content={
                  "Intersex Nigeria: Advocating for Intersex People in Nigeria"
                }
              />
              <meta
                property="og:description"
                content={
                  "Intersex Nigeria is an NGO that raises awareness and advocate for the sexual reproductive health and overall human rights of intersex persons in Nigeria."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org"}
              />
              <meta
                name="twitter:title"
                content={
                  "Intersex Nigeria: Advocating for Intersex People in Nigeria"
                }
              />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Intersex Nigeria is an NGO that raises awareness and advocate for the sexual reproductive health and overall human rights of intersex persons in Nigeria."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(homePageSchema)}
              </script>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: Routes.about,
        element: (
          <>
            <Helmet>
              <title>About Intersex Nigeria</title>
              <meta
                name="description"
                content="Learn about Intersex Nigeria, founded to raise awareness about intersex persons, combat stigmas, advocate for intersex rights and promote bodily autonomy."
              />
              <meta
                property="og:title"
                content={"About Intersex Nigeria"}
              />
              <meta
                property="og:description"
                content={
                  "Learn about Intersex Nigeria, founded to raise awareness about intersex persons, combat stigmas, advocate for intersex rights and promote bodily autonomy"
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/about-us/about-intersex-nigeria"
                }
              />
              <meta
                name="twitter:title"
                content={"About Intersex Nigeria"}
              />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Learn about Intersex Nigeria, founded to raise awareness about intersex persons, combat stigmas, advocate for intersex rights and promote bodily autonomy"
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(aboutPageSchema)}
              </script>
            </Helmet>
            <Intersex />
          </>
        ),
      },
      {
        path: Routes.intersex,
        element: (
          <>
            <Helmet>
              <title>What is Intersex</title>
              <meta name="description" content="What is Intersex" />
              <meta
                property="og:title"
                content={"What is Intersex"}
              />
              <meta
                property="og:description"
                content={"What is Intersex"}
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/about-us/about-intersex-nigeria"
                }
              />
              <meta
                name="twitter:title"
                content={"What is Intersex"}
              />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={"What is Intersex"}
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(aboutPageSchema)}
              </script>
            </Helmet>
            <WhatIsIntersex />
          </>
        ),
      },
      {
        path: Routes.team,
        element: (
          <>
            <Helmet>
              <title>Meet the Team</title>
              <meta
                name="description"
                content="Meet the team at Intersex Nigeria, committed to advocating for the rights, health, and autonomy of intersex people."
              />
              <meta property="og:title" content={"Meet the team"} />
              <meta
                property="og:description"
                content={
                  "Meet the team at Intersex Nigeria, committed to advocating for the rights, health, and autonomy of intersex people."
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/about-us/meet-the-team"
                }
              />
              <meta name="twitter:title" content={"Meet the team"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Meet the team at Intersex Nigeria, committed to advocating for the rights, health, and autonomy of intersex people."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(teamPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Careers</title>
              <meta
                name="description"
                content="Be part of a diverse team working towards creating a more inclusive society for intersex persons. Join our mission at Intersex Nigeria!"
              />
              <meta property="og:title" content={"Careers"} />
              <meta
                property="og:description"
                content={
                  "Be part of a diverse team working towards creating a more inclusive society for intersex persons. Join our mission at Intersex Nigeria!"
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/career/join-the-team"
                }
              />
              <meta name="twitter:title" content={"Careers"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Be part of a diverse team working towards creating a more inclusive society for intersex persons. Join our mission at Intersex Nigeria!"
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(careersPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Reports at Intersex Nigeria</title>
              <meta
                name="description"
                content="Submit safeguarding reports or report intersex human rights violations and cases to Intersex Nigeria. Your submissions are safe, secure, and confidential."
              />
              <meta property="og:title" content={"Reports at Intersex Nigeria"} />
              <meta
                property="og:description"
                content="Submit safeguarding reports or report intersex human rights violations and cases to Intersex Nigeria. Your submissions are safe, secure, and confidential."
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/reports-at-intersex-nigeria"}
              />
              <meta name="twitter:title" content={"Reports at Intersex Nigeria"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content="Submit safeguarding reports or report intersex human rights violations and cases to Intersex Nigeria. Your submissions are safe, secure, and confidential."
              />
            </Helmet>
            <ReportsLanding />
          </>
        ),
      },
      {
        path: Routes.safeguarding,
        element: (
          <>
            <Helmet>
              <title>Safeguarding at Intersex Nigeria</title>
              <meta
                name="description"
                content="Safeguarding is everyone's duty at Intersex Nigeria. Report abuse, harassment, boundary violations or other concerns confidentially."
              />
              <meta property="og:title" content={"Safeguarding at Intersex Nigeria"} />
              <meta
                property="og:description"
                content="Safeguarding is everyone's duty at Intersex Nigeria. Report abuse, harassment, boundary violations or other concerns confidentially."
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/reports-at-intersex-nigeria/safeguarding"}
              />
              <meta name="twitter:title" content={"Safeguarding at Intersex Nigeria"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content="Safeguarding is everyone's duty at Intersex Nigeria. Report abuse, harassment, boundary violations or other concerns confidentially."
              />
            </Helmet>
            <Report />
          </>
        ),
      },
      {
        path: Routes.intersexViolations,
        element: (
          <>
            <Helmet>
              <title>Intersex Violations and Cases</title>
              <meta
                name="description"
                content="Report intersex human rights violations and cases to Intersex Nigeria. Your submission is confidential and protected."
              />
              <meta property="og:title" content={"Intersex Violations and Cases"} />
              <meta
                property="og:description"
                content={
                  "Report intersex human rights violations and cases to Intersex Nigeria. Your submission is confidential and protected."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/reports-at-intersex-nigeria/violations-and-cases"}
              />
              <meta name="twitter:title" content={"Intersex Violations and Cases"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Report intersex human rights violations and cases to Intersex Nigeria. Your submission is confidential and protected."
                }
              />
            </Helmet>
            <ReportRightsViolation />
          </>
        ),
      },

      {
        path: Routes.contact,
        element: (
          <>
            <Helmet>
              <title>Contact Us</title>
              <meta
                name="description"
                content="Have questions or want to contribute to our cause? Contact Intersex Nigeria to learn more, make inquiries, or support our advocacy for intersex rights."
              />
              <meta property="og:title" content={"Contact Us"} />
              <meta
                property="og:description"
                content={
                  "Have questions or want to contribute to our cause? Contact Intersex Nigeria to learn more, make inquiries, or support our advocacy for intersex rights."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/contact"}
              />
              <meta name="twitter:title" content={"Contact Us"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Have questions or want to contribute to our cause? Contact Intersex Nigeria to learn more, make inquiries, or support our advocacy for intersex rights."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(contactPageSchema)}
              </script>
            </Helmet>
            <Contact1 />
          </>
        ),
      },
      {
        path: Routes.gallery,
        element: (
          <>
            <Helmet>
              <title>Gallery</title>
              <meta
                name="description"
                content="A Photo Gallery of Intersex Nigeria’s Advocacy, Events, and Community Impact"
              />
              <meta property="og:title" content={"Gallery"} />
              <meta
                property="og:description"
                content={
                  "A Photo Gallery of Intersex Nigeria’s Advocacy, Events, and Community Impact"
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/gallery"}
              />
              <meta name="twitter:title" content={"Gallery"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "A Photo Gallery of Intersex Nigeria’s Advocacy, Events, and Community Impact"
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(galleryPageSchema)}
              </script>
            </Helmet>
            <Gallery />
          </>
        ),
      },
      {
        path: Routes.news,
        element: (
          <>
            <Helmet>
              <title>News</title>
              <meta
                name="description"
                content="Stay updated with the latest news, stories, and updates from Intersex Nigeria."
              />
              <meta property="og:title" content={"News"} />
              <meta
                property="og:description"
                content={
                  "Stay updated with the latest news, stories, and updates from Intersex Nigeria."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org/news"}
              />
              <meta name="twitter:title" content={"News"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Stay updated with the latest news, stories, and updates from Intersex Nigeria."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(newsPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Our Programs</title>
              <meta
                name="description"
                content="Discover how Intersex Nigeria advocates for the rights, visibility, and inclusion of intersex people through education, outreach, and awareness campaigns."
              />
              <meta property="og:title" content={"Our Programs"} />
              <meta
                property="og:description"
                content={
                  "Discover how Intersex Nigeria advocates for the rights, visibility, and inclusion of intersex people through education, outreach, and awareness campaigns."
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/resources/programs"
                }
              />
              <meta name="twitter:title" content={"Our Programs"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Discover how Intersex Nigeria advocates for the rights, visibility, and inclusion of intersex people through education, outreach, and awareness campaigns."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(advocacyPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Annual Reports</title>
              <meta
                name="description"
                content="Explore Intersex Nigeria's annual reports for updates on advocacy, campaigns, and capacity development for intersex rights and visibility in Nigeria."
              />
              <meta property="og:title" content={"Annual Reports"} />
              <meta
                property="og:description"
                content={
                  "Explore Intersex Nigeria's annual reports for updates on advocacy, campaigns, and capacity development for intersex rights and visibility in Nigeria."
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/resources/annual-reports"
                }
              />
              <meta name="twitter:title" content={"Annual Reports"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Explore Intersex Nigeria's annual reports for updates on advocacy, campaigns, and capacity development for intersex rights and visibility in Nigeria."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(reportsPageSchema)}
              </script>
            </Helmet>
            <AnnualReports />
          </>
        ),
      },
      {
        path: Routes.articles,
        element: (
          <>
            <Helmet>
              <title>Articles</title>
              <meta
                name="description"
                content="Explore insightful articles from Intersex Nigeria covering advocacy, intersex rights, health, and community stories, promoting awareness and inclusion."
              />
              <meta property="og:title" content={"Articles"} />
              <meta
                property="og:description"
                content={
                  "Explore insightful articles from Intersex Nigeria covering advocacy, intersex rights, health, and community stories, promoting awareness and inclusion."
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/resources/articles"
                }
              />
              <meta name="twitter:title" content={"Articles"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Explore insightful articles from Intersex Nigeria covering advocacy, intersex rights, health, and community stories, promoting awareness and inclusion."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(articlesPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Epublications</title>
              <meta
                name="description"
                content="Explore societal perceptions of intersex persons in our ePublications, addressing attitudes, biases, and harmful practices."
              />
              <meta property="og:title" content={"Epublications"} />
              <meta
                property="og:description"
                content={
                  "Explore societal perceptions of intersex persons in our ePublications, addressing attitudes, biases, and harmful practices."
                }
              />
              <meta
                property="og:url"
                content={
                  "https://intersexnigeria.org/resources/epublications"
                }
              />
              <meta name="twitter:title" content={"Epublications"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "Explore societal perceptions of intersex persons in our ePublications, addressing attitudes, biases, and harmful practices."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(epubPageSchema)}
              </script>
            </Helmet>
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
            <Helmet>
              <title>Toolkit</title>
              <meta
                name="description"
                content="An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
              />
              <meta property="og:title" content={"Toolkit"} />
              <meta
                property="og:description"
                content={
                  "An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org"}
              />
              <meta name="twitter:title" content={"Toolkit"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(toolkitPageSchema)}
              </script>
            </Helmet>
            <Toolkits />
          </>
        ),
      },
      {
        path: Routes.faq,
        element: (
          <>
            <Helmet>
              <title>Frequently Asked Questions</title>
              <meta
                name="description"
                content="An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
              />
              <meta property="og:title" content={"Toolkit"} />
              <meta
                property="og:description"
                content={
                  "An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
                }
              />
              <meta
                property="og:url"
                content={"https://intersexnigeria.org"}
              />
              <meta name="twitter:title" content={"Toolkit"} />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:description"
                content={
                  "An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons."
                }
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <script type="application/ld+json">
                {JSON.stringify(toolkitPageSchema)}
              </script>
            </Helmet>
            <Faq />
          </>
        ),
      },
      {
        path: Routes.getToKnow,
        element: (
          <>
            <Helmet>
              <title>Intersex Get To Know Questions | Intersex Nigeria</title>
              <meta
                name="description"
                content="Intersex Nigeria Getting To Know Questions For Intersex Persons. A safe and affirming space to connect with the intersex community in Nigeria."
              />
              <meta property="og:title" content="Intersex Get To Know Questions" />
              <meta
                property="og:description"
                content="Intersex Nigeria Getting To Know Questions For Intersex Persons. A safe and affirming space to connect with the intersex community."
              />
              <meta
                property="og:url"
                content="https://intersexnigeria.org/get-to-know"
              />
              <meta name="twitter:title" content="Intersex Get To Know Questions" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:description"
                content="Intersex Nigeria Getting To Know Questions For Intersex Persons."
              />
              <meta
                property="og:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
              <meta
                name="twitter:image"
                content="https://intersexnigeria.org/images/intersex%20logo.webp"
              />
            </Helmet>
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
