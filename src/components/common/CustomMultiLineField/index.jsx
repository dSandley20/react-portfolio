import { TextField } from "@mui/material";
import { fieldToTextField, TextFieldProps } from "formik-mui";
import { useCallback } from "react";

export default function CustomMultiLineField(props) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value ? value : "");
    },
    [setFieldValue, name]
  );
  return (
    <>
      <TextField
        multiline
        rows={5}
        sx={{
          input: {
            color: "white",
          },
          "& .MuiInputBase-inputMultiline": {
            color: "white",
          },

          "& label.Mui-focused": {
            color: "white",
            fontFamily: "Edu TAS Beginner, cursive",
          },
          "& label": {
            color: "white",
            fontFamily: "Edu TAS Beginner, cursive",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
        {...fieldToTextField(props)}
        onChange={onChange}
      />
    </>
  );
}
