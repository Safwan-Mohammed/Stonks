import React, { useState, useEffect } from "react";
import { Animated, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeAnimation = function () {
  const [animatedValue] = useState(new Animated.Value(0));
  const { height, width } = useWindowDimensions()
  const val1 = Math.floor(height / 5)  
  const val2 = Math.floor(height / 3)  
  useEffect(() => {
    const animateGradient = () => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
        })
      ).start();
    };

    animateGradient();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, val1, val2, val1, 0],
  });

  return (
    <View style={{ flex: 1, position: "absolute", height: height, width: width }}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          transform: [{ translateY }],
        }}
      >
        <LinearGradient
          colors={["#000000", "#00334E", "#1F4E5F"]}
          locations={[0, 0.3, 0.6]}
          style={{ flex: 1, width: "100%" }}
        />
      </Animated.View>
    </View>
  );
};

export default HomeAnimation;
