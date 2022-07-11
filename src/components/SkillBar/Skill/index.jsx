import { Box } from "@mui/material";
export default function Skill(props) {
  return (
    <Box
      sx={
        props.isMobile
          ? {
              height: "100%",
              backgroundColor: "black",
              width: "15%",
              color: "white",
              borderRadius: "1rem",
            }
          : {
              height: "100%",
              backgroundColor: "red",
              width: "7%",
              color: "white",
              borderRadius: "1rem",
              "&:hover": {
                transform: "scale(1.5)",
              },
            }
      }
    >
      {/* TODO insert image url here */}
    </Box>
  );
}
