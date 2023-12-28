import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const HomeAnimation = function (){
//   const [animatedValue] = useState(new Animated.Value(0));

//   const startAnimation = () => {
//     Animated.timing(animatedValue, {
//       toValue: 1,
//       duration: 3000,
//       useNativeDriver: false,
//     }).start(() => {
//       // Optionally, you can add a callback function when the animation completes
//     });
//   };

//   useEffect(() => {
//     startAnimation();
//   }, []); // Run the animation once when the component mounts

  return (
    <View style={{ flex: 1, position: 'absolute', height: 1000, width:500 }}>
      <LinearGradient
        // colors={["#4c669f", "#3b5998", "#192f6a"]}
        colors={["#000000", "#00334E", "#1F4E5F" ]}
        locations={[0.1, 0.5, 0.9]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
    </View>
  );
};

export default HomeAnimation;
