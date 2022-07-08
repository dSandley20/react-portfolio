import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { containerDesktop, containerMobile } from "./styles";

export default function ProjectScroll(props) {
  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}>
        {props.projects.map(() => {})}
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
