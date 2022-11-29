import { ThemeProvider } from "styled-components";
import React from "react";
import useColorScheme from "../../../main-hooks/useColorScheme";
import Colors from "../../constants/Colors";


export function useThemeColor() {
  const theme = useColorScheme();
  if (theme) {
    return Colors[theme];
  }
}

const Theme = ({ children }: any,) => (
  <ThemeProvider theme={useThemeColor()}>{children}</ThemeProvider>
);

export default Theme;
