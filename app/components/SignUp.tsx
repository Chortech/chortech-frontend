
import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';

const SignUp = () => {
  const [data, setData] = React.useState({
      email_phone: '',
      check_textInputChange: false,
  });

  return (  
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    </View>
  );
}

export default SignUp;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#93CC21'
    },
  });
