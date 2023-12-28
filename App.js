import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./Components/Screens/HomeScreen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={"light-content"} />
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
});
