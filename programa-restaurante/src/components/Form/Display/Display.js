import React from 'react'
import { View, Text } from 'react-native'

import styles from './style';

const Display = (props) => {
  return (
     <View style={styles.resultPrice}>
        <Text style={styles.information}>{props.messageLabelPrice}</Text>
        <Text style={styles.numberPrice}>{props.numPrice}</Text>
        <Text style={styles.information}>{props.erroMessage} </Text>
     </View>
  );
}

export default Display;