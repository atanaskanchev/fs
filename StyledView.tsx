import { styled } from "@fast-styles/react";
import { View } from "react-native";

const StyledView = () => {
  return styled(View, {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    color: "white",
  });
};

export default StyledView;
