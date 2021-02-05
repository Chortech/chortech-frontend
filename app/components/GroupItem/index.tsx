import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import { styles } from "./styles";
import { ArabicNumbers } from "react-native-arabic-numbers";
import fonts from "../../assets/resources/fonts";

type Props = {
  onPressGroupItem: (event: GestureResponderEvent) => void | undefined;
  Name: string;
  ImageUrl: ImageSourcePropType;
  Balance: number;
};

const GroupItem: React.FC<Props> = (props: Props): JSX.Element => {
  let balance: string = props.Balance == NaN ? "-" : `${Math.abs(props.Balance)}`;
  let color = props.Balance < 0 ? colors.red : colors.mainColor;

  return (
    <View>
      <TouchableOpacity
        style={styles.groupContainer}
        onPress={props.onPressGroupItem}
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
        <Text style={styles.groupName}>{props.Name}</Text>
        <Image style={styles.groupImage} source={props.ImageUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default GroupItem;
