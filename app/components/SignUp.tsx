
import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    ScrollView,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const SignUp = () => {
  const [data, setData] = React.useState({
      email_phone: '',
      check_textInputChange: false,
  });

  return (  
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>چُرتِک</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View style={styles.action}>
            {/* <FontAwesomeIcon icon={'user'} style={{margin:12}} size={20} color={'lightgreen'}/> */}
            <TextInput 
                placeholder="ایمیل یا شماره موبایل"
                style={styles.textInput}
                autoCapitalize="none"/>
          </View>

          <View style={styles.action}>
            {/* <FontAwesomeIcon icon={'user'} style={{margin:12}} size={20} color={'lightgreen'}/> */}
            <TextInput 
                placeholder="رمز عبور"
                style={styles.textInput}
                autoCapitalize="none"/>
          </View>

        </ScrollView>        
      </Animatable.View>
    </View>
  );
}

export default SignUp;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#93CC21'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
     text_header: {
        textAlign: 'center',
        marginTop: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        writingDirection: 'auto'
    },
     footer: {
        flex: Platform.OS === 'ios' ? 2 : 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        color: '#053751',
        padding: 10,
        borderColor: 'green'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#ebfcef',
        paddingBottom: 5
    },
  });
