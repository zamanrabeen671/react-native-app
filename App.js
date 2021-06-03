import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Team 60 Is Here</Text>
      <Image source={{ uri: "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-260nw-740523562.jpg" }} style={{ width: 305, height: 159 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
