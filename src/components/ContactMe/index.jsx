import { Box } from "@mui/system";
import { containerDesktop, containerMobile } from "./styles";
import React, { useState } from "react";
import { Button, Snackbar, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import CustomTextField from "../common/CustomTextField";
import CustomMultiLineField from "../common/CustomMultiLineField";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";

export default function ContactMe(props) {
  // TODO hook up email endpoint
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
              <Box>
                <Field
                  component={CustomTextField}
                  name="name"
                  type="string"
                  label="Name"
                  style={{ width: "48%", float: "left" }}
                />
                <Field
                  component={CustomTextField}
                  name="email"
                  type="email"
                  label="Email"
                  style={{ float: "right", width: "48%" }}
                />
              </Box>

              <Box>
                <Field
                  component={CustomTextField}
                  name="subject"
                  type="string"
                  label="Subject"
                  style={{ width: "100%", marginTop: "20px" }}
                />
              </Box>

              <br />
              <Box>
                <Field
                  component={CustomMultiLineField}
                  name="message"
                  type="string"
                  label="Message"
                  style={{ width: "100%" }}
                />
              </Box>
              <br />
              <Button variant="socialBtn">
                {" "}
                Send
                <SendIcon sx={{ marginLeft: "10px" }} />
              </Button>
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
