import { Box, Button } from "@mui/material";
import { container, socialButton, buttonStyle, iconStyle } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Socials(props) {
  const twitterUrl = "https://twitter.com/NotBluePost";
  const githubUrl = "https://github.com/dSandley20";
  const linkedinUrl = "https://www.linkedin.com/in/dsandley20/";

  const urlHandler = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  //TODO give buttons a background color, and change text color
  //TODO put buttons into a grid layout so they can be centered in the footer

  return (
    <>
      <Box sx={container}>
        <Box sx={socialButton}>
          <Button
            variant="socialBtn"
            onClick={() => {
              urlHandler(twitterUrl);
            }}
          >
            <TwitterIcon sx={iconStyle} />
            Twitter
          </Button>
        </Box>
        <Box sx={socialButton}>
          <Button
            sx={buttonStyle}
            onClick={() => {
              urlHandler(githubUrl);
            }}
          >
            <GitHubIcon sx={iconStyle} />
            GitHub
          </Button>
        </Box>
        <Box sx={socialButton}>
          <Button
            sx={buttonStyle}
            onClick={() => {
              urlHandler(linkedinUrl);
            }}
          >
            <LinkedInIcon sx={iconStyle} />
            LinkedIn
          </Button>
        </Box>
      </Box>
    </>
  );
}
