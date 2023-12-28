import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./Components/Screens/HomeScreen";
import Login from "./Components/Screens/Login";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={"light-content"} />
        <HomeScreen />
        {/* <Login /> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
