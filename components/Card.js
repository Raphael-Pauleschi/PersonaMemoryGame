import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 80,
    margin: 2,
    alignItems: 'center',
    elevation: 5,
    
  },
  image: {
    flex: 1,
    width: '100%', 
    height: '100%', 
  },
});

export default Card;
