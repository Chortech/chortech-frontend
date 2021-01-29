import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import convertor from "../../utils/numberConvertor";
import { styles } from "./styles";
import { ArabicNumbers } from "react-native-arabic-numbers";

type Props = {
  onPressFriendItem: (event: GestureResponderEvent) => void | undefined;
  Name: string;
  ImageUrl: ImageSourcePropType;
  Balance: number;
};

const FriendItem: React.FC<Props> = (props: Props): JSX.Element => {
  let color = props.Balance < 0 ? colors.red : colors.mainColor;
  return (
    <View>
      <TouchableOpacity
        style={styles.friendContainer}
        onPress={props.onPressFriendItem}
        activeOpacity={0.5}>
        <View style={styles.balanceContainer}>
          {props.Balance != 0 ? (
            <>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontFamily: fonts.IranSans_Light,
                    fontSize: 12,
                    alignSelf: "center",
                    color: color,
                  }}>
                  تومان
                </Text>
                <Text
                  style={{
                    ...styles.balanceNumber,
                    color: color,
                  }}>
                  {ArabicNumbers(Math.abs(props.Balance))}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.balanceStatus,
                  color: color,
                }}>
                {props.Balance < 0 ? "بهش بدهکاری" : "بهت بدهکاره"}
              </Text>
            </>
          ) : (
            <Text style={styles.settledUp}>بی‌حساب</Text>
          )}
        </View>
        <Text style={styles.friendText}>{props.Name}</Text>
        <Image style={styles.friendImage} source={props.ImageUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default FriendItem;
