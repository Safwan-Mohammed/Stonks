import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import LineDrop from './LineDrop';

const { height, width } = Dimensions.get('window');
const numParticles = 100;

const Animation = () => {
  const particles = Array.from({ length: numParticles }).map((_, index) => ({
    id: index.toString(),
    top: Math.floor(- Math.random() * 30),
    left: Math.floor(Math.random() * 100),
    delay: Math.random() * 4000,
  }));

  const animationValues = particles.map(() => new Animated.Value(0));
  const translationValue =  new Animated.Value(0);


  useEffect(() => {
    const animations = particles.map((particle, index) =>
      Animated.timing(animationValues[index], {
        toValue: (1.5*height),
        duration: 5000 + Math.random() * 3000,
        useNativeDriver: false,
        delay: particle.delay,
      })
    );
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.parallel(animations),
        Animated.timing(translationValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    );

    loopAnimation.start()
  }, [particles, animationValues, height, width]);
  

  return (
    <View style={styles.container}>
      {particles.map((particle, index) => (
        <Animated.View
          key={particle.id}
          style={{
            position: 'absolute',
            top: particle.top + '%',
            left: particle.left + '%',
            transform: [{ translateY: animationValues[index] }],
          }}>
          <LineDrop length={50} thickness={4} />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Place behind other components
  },
});

export default Animation;
