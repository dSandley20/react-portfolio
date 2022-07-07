import { Grid, Button } from "@mui/material";
import { iconStyle, iconStyleMobile } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState, useEffect, useMemo } from "react";

export default function Socials(props) {
  const twitterUrl = "https://twitter.com/NotBluePost";
  const githubUrl = "https://github.com/dSandley20";
  const linkedinUrl = "https://www.linkedin.com/in/dsandley20/";

  const urlHandler = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useMemo(() => {
    setIsMobile(width <= 768);
  }, [width]);

  return (
    <>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item xs>
          <Button
            variant="socialBtn"
            onClick={() => {
              urlHandler(twitterUrl);
            }}
          >
            <TwitterIcon sx={isMobile ? iconStyleMobile : iconStyle} />
            {isMobile ? "" : "Twitter"}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="socialBtn"
            onClick={() => {
              urlHandler(githubUrl);
            }}
          >
            <GitHubIcon sx={isMobile ? iconStyleMobile : iconStyle} />
            {isMobile ? "" : "Github"}
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="socialBtn"
            onClick={() => {
              urlHandler(linkedinUrl);
            }}
          >
            <LinkedInIcon sx={isMobile ? iconStyleMobile : iconStyle} />
            {isMobile ? "" : "LinkedIn"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
