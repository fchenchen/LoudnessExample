/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Loudness} from 'react-native-loudness';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      loudness: 1, // Range: -160 to 0
    }

    this.loudness = new Loudness();
    this.loudness.start();
    this.loudnessGetter = setInterval(() => {
      // Range of loudness:
      this.loudness.getLoudness((loudness) => {
        let newState = {
          loudness: loudness,
        }
        this.setState(newState);
        // console.log(loudness);
      });

    }, 100);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {"Loudness: " + this.state.loudness.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});
