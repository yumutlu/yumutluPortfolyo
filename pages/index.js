import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import MyProjects from "../sections/my-projects";
import AboutMe from "../sections/about-me";
import Comments from "../sections/comments";
import Contact from "../sections/contact"

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Yuksel Umutlu: Front End Developer"
          description="Built with Nextjs"
        />
        <AboutMe />
        <MyProjects />
        <Comments />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
