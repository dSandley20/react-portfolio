import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import ProjectScroll from "../components/ProjectScroll";
import AboutMe from "../components/AboutMe";
import React, { useState, useEffect, useMemo } from "react";
import projects from "../utils/fakeProjects";
import Skills from "../components/Skills";

export default function KitchenSink() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useMemo(() => {
    setIsMobile(width <= 1000);
  }, [width]);

  return (
    <>
      <Skills isMobile={isMobile} />
      {/* 
      <NavBar isMobile={isMobile} />
      <AboutMe isMobile={isMobile} />
      <ProjectScroll isMobile={isMobile} projects={projects} />
      <ContactMe isMobile={isMobile} />
     
      <Grid container spacing={4}>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip1"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip2"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
      </Grid> */}

      {/*  */}
    </>
  );
}
