/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, _Text} from 'react-native';
import Header from './src/header';
import PropsChild from './src/propsChild';
class App extends Component {
  state = {
    sampleText: 'Hello World!',
    sampleBoolean: false,
    sampleNum: 1,
  };

  inputText = () => {
    return this.state.sampleBoolean ? (
      <Text>sampleBoolean is true</Text>
    ) : (
      <Text>sampleBoolean is false</Text>
    );
  };

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text changed!',
        sampleBoolean: true,
      });
    } else {
      this.setState({
        sampleText: 'Hello world!',
        sampleBoolean: false,
      });
    }
  };

  onAdd = () => {
    console.log('Hello debugger!');
    // debugger;
    this.setState(state => {
      // sampleNum: sampleNum + 1
      return {
        sampleNum: state.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header />
        <View style={styles.subView}>
          <Text style={[{fontSize: 20}, styles.mainText]} onPress={this.onAdd}>만지면 ++{this.state.sampleNum}</Text>
        </View>
        <View style={styles.anthoerSubView}>
          <PropsChild cText={this.state.sampleText} cState={this.changeState} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  anthoerSubView: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    // fontSize: 20,
    // fontWeight: 'normal',
    // color: 'red',
    backgroundColor: 'white',
    padding: 50,
    zIndex: 999
  }
});

export default App;
