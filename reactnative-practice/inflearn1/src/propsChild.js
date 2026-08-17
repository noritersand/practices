/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PropsChild = (props) => {
  return (
    <View>
      <Text style={styles.mainText} onPress={props.cState}>만지면 바뀜{'\n'}
        {props.cText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    backgroundColor: 'white',
    padding: 50
  }
});

export default PropsChild;
