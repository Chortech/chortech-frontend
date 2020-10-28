
import React, { useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Button,
    StyleSheet ,
    StatusBar,
    ScrollView,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { styles } from '../styles/CodeVerificationStyles';

export default CodeVerification = ({ navigation }) => {
  const [data, setData] = useState({
      verification_code: '',
      check_textInputChange: false,
  });

  return (  
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Chortech</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" duration={500} style={styles.footer}>
          <View style={styles.action}>
            <TextInput 
                placeholder="لطفا کد فعال‌سازی را وارد کنید"
                style={styles.textInput}
                keyboardType='number-pad'/>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>تایید</Text>
            </TouchableOpacity>
          </View>
      </Animatable.View>
    </View>
  );
}
