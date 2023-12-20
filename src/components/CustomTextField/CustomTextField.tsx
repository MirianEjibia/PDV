import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { TextField, TextFieldProps } from "@mui/material";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "20px",
        },
      },
    },
    MuiOutlinedInput: {
      // defaultProps: {
      //   sx: {
      //     fontSize: "20px",
      //   },
      // },
    },
  },
});

export function CustomTextField(props: TextFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props}/>
    </ThemeProvider>
  );
}
