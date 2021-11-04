import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
  return(
    <view style={styles.container}>

      <view style={styles.taskWrapper}>
        <text style={styles.sectionTitle}> Todays Task</text>

        <view style={styles.items}>

        </view>

      </view>

    </view>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
taskWrapper: {},
sectionTitle: {},
items: {},
});
