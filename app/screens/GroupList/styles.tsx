import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1AD927",
    },
    headerContent:{
      padding:10,
      alignItems: 'center',
    },
    infoContainer: {
      flex: 6,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "#FFFFFF",
      marginBottom:10,
    },
    image:{
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
      borderWidth: 2,
      borderColor: "#1AD927",
    },
    name:{
      fontSize:20,
      color:"#FFFFFF",
      fontFamily: "IRANSansWeb_Bold",
      fontWeight:'600',
    },
    box: {
      marginTop: 10,
      padding: 10,
      flexDirection: "row",
      borderBottomColor: "#EBE8E8",
      borderBottomWidth: 1,
    },
    username:{
      fontSize:20,
      alignSelf:'center',
      marginLeft:10
    },
    groupName:{
      flex: 5,
      padding: 10,
      marginTop: 10,
      fontFamily: "IRANSansWeb_Bold",
      fontSize: 12,
    }
  });

export default styles;