import { Box } from "@mui/system";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { container } from "./styles";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
import { stateToHTML } from "draft-js-export-html";
import { Button } from "@mui/material";

export default function ContactMe() {
  var editorState = EditorState.createEmpty();
  const [content, setContent] = useState(editorState);
  const [isDisabled, setIsDisabled] = useState(true);

  const updateContent = (editorState) => {
    setContent(editorState);
    const regex = /(<([^>]+)>)/gi;
    const body = stateToHTML(editorState.getCurrentContent());
    const hasText = !!body.replace(regex, "").trim().length;
    setIsDisabled(!hasText);
  };

  const emailMe = () => {
    //TODO send to API to email myself
    alert("Sent Email");
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
      </Box>
    </>
  );
}
