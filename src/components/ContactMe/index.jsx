import { Box } from "@mui/system";
import { containerDesktop, containerMobile } from "./styles";
import React, { useState } from "react";
import { Button, Snackbar, IconButton, Typography, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import CustomTextField from "../common/CustomTextField";
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form style={{ padding: "10px" }}>
              <Field
                component={CustomTextField}
                name="name"
                type="string"
                label="Name"
              />
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}

ContactMe.propTypes = {
  isMobile: PropTypes.bool,
};
