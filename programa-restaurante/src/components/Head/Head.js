import {View, Text} from 'react-native'
import styles from './style'

const Head = () => {
    return (
        <View style={styles.boxHead}>
            <Text style={styles.textHead}>Programa</Text>
            <Text style={styles.textHead}>Restaurante</Text>
        </View>
    )
}

export default Head;