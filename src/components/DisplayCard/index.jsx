import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mainCardStyle, cardTextStyle } from "./styles";
import PropTypes from "prop-types";

export default function DisplayCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box color="accent">
        <Box
          transition={{ layout: { duration: 0.5 } }}
          layout={true}
          component={motion.div}
          sx={mainCardStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography layout={"position"} variant="h2" component={motion.h2}>
            {props.title}
          </Typography>
          {isOpen && (
            <Box
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              component={motion.div}
              transition={{ duration: 1 }}
              sx={cardTextStyle}
            >
              <p>{props.text}</p>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

DisplayCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
