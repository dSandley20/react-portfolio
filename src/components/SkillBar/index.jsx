import { containerDesktop, containerMobile } from "./styles";
import { Box, Stack } from "@mui/material";
import Skill from "./Skill";
import { useState } from "react";

export default function SkillBar(props) {
  //TODO pass in technologies

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const clickSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const clearSkill = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}>
        <Stack
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: "60px",
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
            return <Skill isMobile={props.isMobile} />;
          })}
        </Stack>
      </Box>
    </>
  );
}
