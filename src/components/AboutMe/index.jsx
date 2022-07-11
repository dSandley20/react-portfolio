import { Box, Typography } from "@mui/material";
import { containerDesktop } from "./styles";
import TypeAnimation from "react-type-animation";
import ReactTypingEffect from "react-typing-effect";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { SettingsEthernet } from "@mui/icons-material";

export default function AboutMe(props) {
  var text = [
    `In 2001 my family got our first computer, an old gateway that was
    running Windows98 with dial up internet. This started my passion for
    most things tech and experimenting where I would end up in the tech
    industry from an early age. Figuring out how to use Flash to create
    animations, to learning C++ to attempt to learn game development before learning HTML / JS / CSS and landing in web
    development.`,
    `Since graduating college and moving into a professional software engineer role I have worked with frontend technologies such as React, Angular, and Ember. While I still mostly use node-express for the backend, I have been slowly switching over to Java Spring and DotNet WebApi for my personal projects and want to make that a core part of my skill set.`,
  ];

  const [isAnimating, setIsAnimating] = useState(false);
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

        <Typewriter
          autoStart={true}
          cursor={"|"}
          delay={5}
          onInit={(typewriter) => {
            typewriter
              .typeString(text[0])
              .callFunction(() => {
                setIsAnimating(true);
              })
              .start();
          }}
        />

        {isAnimating && (
          <Typewriter
            autoStart={true}
            cursor={"|"}
            delay={5}
            wrapperClassName="typeWritter"
            onInit={(typewriter) => {
              typewriter
                .typeString("")
                .typeString(text[1])
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .start();
            }}
          />
        )}
      </Box>
    </>
  );
}
