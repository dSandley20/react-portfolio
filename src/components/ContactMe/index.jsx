import { Box } from "@mui/system";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { container } from "./styles";
import { EditorState } from "draft-js";
import React, { useState } from "react";
import { stateToHTML } from "draft-js-export-html";
import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ContactMe() {
  var editorState = EditorState.createEmpty();
  const [content, setContent] = useState(editorState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const updateContent = (editorState) => {
    setContent(editorState);
    const regex = /(<([^>]+)>)/gi;
    const body = stateToHTML(editorState.getCurrentContent());
    const hasText = !!body.replace(regex, "").trim().length;
    setIsDisabled(!hasText);
  };

  const emailMe = () => {
    //TODO send to API to email myself
    setIsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      <Box sx={container}>
        <Editor
          editorState={content}
          wrapperStyle={{ height: "30%" }}
          editorStyle={{ overflowY: "scroll", height: 300 }}
          onEditorStateChange={updateContent}
        />
        <Box sx={{ width: "100%", display: "flex" }}>
          <Button
            sx={{ margin: "0 auto", width: "100%" }}
            onClick={emailMe}
            disabled={isDisabled}
          >
            Send
          </Button>
        </Box>
        {/*TODO add error message if sending email failed */}
        <Snackbar
          open={isOpen}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Email Sent"
        />
      </Box>
    </>
  );
}
