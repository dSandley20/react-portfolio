import { Grid, Button } from "@mui/material";
import { iconStyle, iconStyleMobile } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export default function Socials(props) {
  const twitterUrl = "https://twitter.com/NotBluePost";
  const githubUrl = "https://github.com/dSandley20";
  const linkedinUrl = "https://www.linkedin.com/in/dsandley20/";

  const urlHandler = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <>
      <Grid container spacing={1} sx={{ height: "100%" }}>
        <Grid item variant="socialItem">
          <Button
            variant="socialBtn"
            sx={props.isMobile ? "" : { height: "85%" }}
            onClick={() => {
              urlHandler(twitterUrl);
            }}
          >
            <TwitterIcon sx={props.isMobile ? iconStyleMobile : iconStyle} />
            {props.isMobile ? "" : "Twitter"}
          </Button>
        </Grid>
        <Grid item variant="socialItem">
          <Button
            variant="socialBtn"
            sx={props.isMobile ? "" : { height: "85%" }}
            onClick={() => {
              urlHandler(githubUrl);
            }}
          >
            <GitHubIcon sx={props.isMobile ? iconStyleMobile : iconStyle} />
            {props.isMobile ? "" : "Github"}
          </Button>
        </Grid>
        <Grid item variant="socialItem">
          <Button
            variant="socialBtn"
            sx={props.isMobile ? "" : { height: "85%" }}
            onClick={() => {
              urlHandler(linkedinUrl);
            }}
          >
            <LinkedInIcon sx={props.isMobile ? iconStyleMobile : iconStyle} />
            {props.isMobile ? "" : "LinkedIn"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

Socials.propTypes = {
  isMobile: PropTypes.bool,
};
