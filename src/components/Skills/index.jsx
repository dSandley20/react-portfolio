import { containerDesktop, containerMobile } from "./styles";
import { Box } from "@mui/material";
export default function Skills(props) {
  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}></Box>
    </>
  );
}
