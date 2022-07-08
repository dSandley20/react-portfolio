import { Box } from "@mui/system";
import { containerDesktop, containerMobile } from "./styles";
import React, { useState } from "react";
import { Button, Snackbar, IconButton, Typography, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { string } from "yup";
import PropTypes from "prop-types";

export default function ContactMe(props) {
  // TODO redesign this whole form to be more modern use yup/formik
  // name, email , subject, body
  return (
    <>
      <Box sx={props.isMobile ? containerMobile : containerDesktop}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Edu TAS Beginner, cursive",
            color: "#D8DEE9",
            padding: "10px",
          }}
        >
          Contact Me
        </Typography>
      </Box>
    </>
  );
}

ContactMe.propTypes = {
  isMobile: PropTypes.string,
};
