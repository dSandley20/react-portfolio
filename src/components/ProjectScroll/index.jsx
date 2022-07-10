import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import { containerDesktop, containerMobile } from "./styles";
import Project from "./Project";

export default function ProjectScroll(props) {
  console.log(props);

  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            width: "100%",
            height: props.isMobile ? 150 : 300,
            overflowY: "hidden",
            display: "-webkit-box",
            "&::-webkit-scrollbar": {
              width: ".5em",
              height: ".3em",
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "100vw",
              background: "rgba(255,255,255,0.3)",
              marginLeft: "1em",
              marginRight: "1em",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "100vw",
              backgroundColor: "rgba(255,255,255,1)",
            },
          }}
        >
          {props.projects.map((data) => {
            return <Project project={data} isMobile={props.isMobile} />;
          })}
        </Stack>
      </Box>
    </>
  );
}

ProjectScroll.propTypes = {
  isMobile: PropTypes.bool,
  projects: PropTypes.arrayOf(
    PropTypes.objectOf({ image: PropTypes.string, title: PropTypes.string })
  ),
};
