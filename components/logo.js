/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "../components/link";
import LogoImage from "../assets/images/logo.png";
import { isMobile } from "react-device-detect";

export default function Logo({ isSticky, footer, ...props }) {
  return <Link path="/" sx={styles.logo} {...props}></Link>;
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};
