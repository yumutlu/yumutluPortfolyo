/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import SectionHeading from "../components/section-heading";
import aboutme from "../assets/images/about-me.jpg";

const AboutMe = () => {
  return (
    <Box as="section" id="about-me" variant="section.about-me">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={aboutme} alt="aboutme" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Yuksel Umutlu: Front End Developer"
            />
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;

const styles = {
  section: {
    mt: [30],
  },
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ["block", "block", "grid", "flex", "grid"],
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    flexDirection: ["column-reverse"],
  },
  illustration: {
    display: ["none", "none", "block"],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ["center", null, null, null, "left"],
    mb: [30],
    ml: ["auto", null, null, null, 0],
    h2: {
      fontSize: ["28px", "28px", "28px", "36px", "32px", "36px", "48px"],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: "-1px",
    },
    img: {
      maxWidth: ["24px", "24px", "24px", "30px", "30px", "30px", "100%"],
      top: ["4px", "8px"],
    },
  },
};
