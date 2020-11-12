import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1AD927",
    },
    header:{
      backgroundColor: "#1AD927",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "#FFFFFF",
      marginBottom:10,
    },
    image:{
      width: 60,
      height: 60,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body: {
      flex:1,
      padding:30,
      backgroundColor :"#E6E6FA",
    },
    box: {
      padding:5,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:1,
        width:-2
      },
      elevation:2
    },
    username:{
      color: "#20B2AA",
      fontSize:22,
      alignSelf:'center',
      marginLeft:10
    }
  });

export default styles;