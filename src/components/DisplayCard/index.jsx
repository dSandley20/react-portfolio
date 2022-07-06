import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mainCardStyle, cardTextStyle } from "./styles";

export default function DisplayCard() {
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
            Testing
          </Typography>
          {isOpen && (
            <Box
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              component={motion.div}
              transition={{ duration: 1 }}
              sx={cardTextStyle}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, tempora!
              </p>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
