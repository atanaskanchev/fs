import { defaultTheme, styled } from "@fast-styles/react";
import { View } from "react-native";

export const StyledView = styled(View, {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
  variants: {
    mode: {
      light: {
        color: defaultTheme.tokens.$textDefault,
      },
      dark: {
        color: defaultTheme.tokens.$textLight,
      },
    },
  },
});
