import React from 'react';
import { StyleSheet, View } from 'react-native';

import Head from './src/components/Head/Head';
import Form from './src/components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Head/>
      <Form/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddinTop:80,
  },
});

