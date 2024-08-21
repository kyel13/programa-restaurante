import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

import Display from './Display/Display';

const Form = () => {

    const [inKilo, setInKilo]  = useState(null);
    const [inConsumo, setInConsumo] = useState(null);
    const [price, setPrice] = useState(null);
    const [textButton, setTextButton] = useState("Calcular preço");
    const [msgLabelPrice, setMsgLabelPrice] = useState('');
    const [errorMsg, setErroMsg]=useState('');
  

    function priceCalculator() {
        setPrice((parseFloat(inKilo) / 1000) * inConsumo);
    }

    const validatePrice = () => {
        if(inKilo != null && inConsumo != null) {
          priceCalculator();
          setMsgLabelPrice('Valor a pagar R$');
        }
        else {
          setErroMsg("Preencha os campos acima")
        }
    }

    return (
        <View style={styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Buffet por Quilo R$</Text>
            <TextInput
              style={styles.input}
              placeholder='ex.: 40'
              keyboardType={'numeric'}
              onChangeText={inKilo => setInKilo(inKilo)}
            />
            <Text style={styles.formLabel}>Consumo do Cliente (gr)</Text>
            <TextInput
              style={styles.input}
              placeholder='ex.: 700'
              keyboardType={'numeric'}
              onChangeText={inConsumo => setInConsumo(inConsumo)}
            />
            <TouchableOpacity 
              onPress={()=>validatePrice()} 
              style={styles.buttonCalcularPreco} >
              <Text style={styles.textButtonCalcularPreco}>{textButton}</Text> 
            </TouchableOpacity>
          </View>
          <Display  messageLabelPrice={msgLabelPrice} Display numPrice={price} Display erroMessage={errorMsg} /> 
        
        </View>
    );
}

export default Form