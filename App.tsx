import { ModeProvider, useMode } from "@fast-styles/react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StyledView } from "./StyledView";

export default function App() {
  const [mode] = useMode();

  return (
    <ModeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StyledView mode={mode}>
          <Text>Styled View</Text>
        </StyledView>
        <StatusBar style="auto" />
      </View>
    </ModeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
