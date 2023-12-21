import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const LineDrop = ({ length, thickness, color }) => {
  return (
    <View style={styles.container}>
      <Svg height={length} width={thickness}>
        <Line
          x1={thickness / 2}
          y1={0}
          x2={thickness / 2}
          y2={length}
          strokeWidth={thickness}
          stroke = '#3EA7B5'
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export default LineDrop;
