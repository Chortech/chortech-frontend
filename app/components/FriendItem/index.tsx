import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import { styles } from "./styles";

type Props = {
  onPressFriendItem: (event: GestureResponderEvent) => void | undefined;
  Name: string;
  ImageUrl: ImageSourcePropType;
  Balance: number;
};

const FriendItem: React.FC<Props> = (props: Props): JSX.Element => {
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
                    color: props.Balance < 0 ? colors.customRed : colors.mainColor,
                  }}>
                  تومان
                </Text>
                <Text
                  style={{
                    ...styles.balanceNumber,
                    color: props.Balance < 0 ? colors.customRed : colors.mainColor,
                  }}>
                  {Math.abs(props.Balance)}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.balanceStatus,
                  color: props.Balance < 0 ? colors.customRed : colors.mainColor,
                }}>
                {props.Balance < 0 ? "بهش بدهکاری" : "بهت بدهکاره"}
              </Text>
            </>
          ) : (
            <Text style={styles.settledUp}>تسویه‌شده</Text>
          )}
        </View>
        <Text style={styles.friendText}>{props.Name}</Text>
        <Image style={styles.friendImage} source={props.ImageUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default FriendItem;
