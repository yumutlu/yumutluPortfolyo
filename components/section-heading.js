/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from "theme-ui";

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Heading sx={styles.title}>{title}</Heading>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 660,
    margin: "0 auto 60px",
  },
  title: {
    fontFamily: "headingSerif",
    fontWeight: 600,
    fontSize: ["28px", "32px", null, null, null, null, "40px"],
    lineHeight: [1.33, 1.33, 1.26],
    img: {
      ml: ["15px"],
      position: "relative",
      top: "8px",
    },
  },
};
