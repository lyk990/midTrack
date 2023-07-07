import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
