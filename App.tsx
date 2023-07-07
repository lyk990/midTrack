import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
