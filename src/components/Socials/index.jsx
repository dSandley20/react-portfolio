import { Box, IconButton } from "@mui/material";
import { container, socialButton } from "./styles";
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

  return (
    <>
      <Box sx={container}>
        <Box sx={socialButton}>
          <IconButton
            onClick={() => {
              urlHandler(twitterUrl);
            }}
          >
            <TwitterIcon />
          </IconButton>
          {twitterUrl}
        </Box>
        <Box sx={socialButton}>
          <IconButton
            onClick={() => {
              urlHandler(githubUrl);
            }}
          >
            <GitHubIcon />
          </IconButton>
          {githubUrl}
        </Box>
        <Box sx={socialButton}>
          <IconButton
            onClick={() => {
              urlHandler(linkedinUrl);
            }}
          >
            <LinkedInIcon />
          </IconButton>
          {linkedinUrl}
        </Box>
      </Box>
    </>
  );
}
