import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Button,
    ScrollView,
    Alert
} from 'react-native';


export default Login = ({ navigation }) => {  
    return (
      <View>
        <Text>Login Page</Text>
        <Button title="Sign up" color={'green'} onPress={() => navigation.navigate('SignUp')}/>
      </View>
    );
};

