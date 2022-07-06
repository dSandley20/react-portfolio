import { Box } from "@mui/system";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { container } from "./styles";

export default function ContactMe() {
  return (
    <>
      <Box sx={container}>
        <Editor />
      </Box>
    </>
  );
}
