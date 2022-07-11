import { Box, Typography } from "@mui/material";
import { containerDesktop } from "./styles";
import TypeAnimation from "react-type-animation";
import { useState } from "react";

export default function AboutMe(props) {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isAnimating, setIsAnimating] = useState(true);
  var downloadTimer = setInterval(function () {
    if (timeRemaining <= 0) {
      clearInterval(downloadTimer);
      setIsAnimating(false);
    }
    setTimeRemaining(timeRemaining - 1);
  }, 1000);

  return (
    <>
      <Box sx={containerDesktop}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Edu TAS Beginner, cursive",
            color: "#8FBCBB",
            padding: "10px",
          }}
        >
          About Me
        </Typography>

        <TypeAnimation
          className="animationStyle"
          cursor={false}
          sequence={[
            `In 2001 my family got our first computer, an old gateway that was running Windows98 with dial up internet. This started my passion for most things tech and experimenting where I would end up in the tech industry from an early age. Figuring out how to use Flash to create animations, to learning C++ to attempt to learn game development I finally settled on learning HTML / JS / CSS and landing in web development.`,
          ]}
          wrapper="p"
        />

        <TypeAnimation
          className="animationStyle"
          cursor={!isAnimating}
          sequence={[
            "",
            30000,
            `Since graduating college and moving into a professional software engineer role I have worked with frontend technologies such as React, Angular, and Ember. While I still mostly use node-express for the backend, I have been slowly switching over to Java Spring and DotNet WebApi for my personal projects and want to make that a core part of my skill set.`,
          ]}
          wrapper="p"
        />
      </Box>
    </>
  );
}
