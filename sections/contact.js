/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "../components/section-heading";
import {
  FacebookLoginButton,
  LinkedInLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const contact = () => {
  return (
    <Box
      as="section"
      id="contact"
      sx={styles.section}
      variant="section.contact"
    >
      <SectionHeading sx={styles.heading} title="İletişim" />
      <Container sx={styles.socialContaienr}>
        <FacebookLoginButton
          sx={styles.socialButton}
          onClick={() => alert("Hello")}
        >
          <span></span>
        </FacebookLoginButton>
        <LinkedInLoginButton
          sx={styles.socialButton}
          onClick={() => alert("Hello")}
        >
          <span></span>
        </LinkedInLoginButton>
        <GithubLoginButton
          sx={styles.socialButton}
          onClick={() => alert("Hello")}
        >
          <span></span>
        </GithubLoginButton>
      </Container>
    </Box>
  );
};

export default contact;

const styles = {
  heading: {
    textAlign: ["center", "center", "center", "center", "center"],
    mb: ["30px", "30px", "30px", "30px", 0],
    h2: {
      fontSize: ["24px", "24px", "24px", "28px", "32px", "36px"],
    },
    marginTop: 24,
  },
  socialContaienr: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButton: {
    maxWidth: ["44px", "44px", "54px", "58px", "62px", "66px"],
  },
  formGroup: {
    flexDirection: ["column", null, null, "row"],
  },
};
