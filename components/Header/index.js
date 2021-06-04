import React from 'react';
import {View, Image, TouchableHighlight, Alert} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      <TouchableHighlight onPress = {() => Alert.alert('Navigation is not ready')}>
          <Image style={styles.menu} source={require('../../assets/images/menu.png')}  />
      </TouchableHighlight>
      
    </View>
  );
};

export default Header;
