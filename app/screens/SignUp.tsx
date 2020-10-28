
import React from "react";
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
import { styles } from '../styles/SignUpStyles';

export default SignUp = ({ navigation }) => {
  const [data, setData] = React.useState({
      email_phone: '',
      check_textInputChange: false,
  });

  return (  
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Chortech</Text>
      </View>
      <Animatable.View animation="slideInUp" duration={1000} style={styles.footer}>
          <View style={styles.action}>
            <TextInput 
                placeholder="ایمیل یا شماره موبایل"
                style={styles.textInput}
                autoCapitalize="none"/>
          </View>
          <View style={styles.action}>
            <TextInput 
                placeholder="رمز عبور"
                style={styles.textInput}
                autoCapitalize="none"/>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>ادامه و دریافت کد تایید</Text>
            </TouchableOpacity>
          </View>
      </Animatable.View>
    </View>
  );
}
