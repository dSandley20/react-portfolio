import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { containerMobile, containerDesktop, projectText } from "./styles";

export default function Project(props) {
  console.log(props);
  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}>
        {" "}
        <Typography variant="h6" sx={projectText}>
          {props.project.title}
        </Typography>
      </Box>
    </>
  );
}

Project.propTypes = {};
