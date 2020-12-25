import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = {
  placeholder?: string;
  label?: string;
  cancelIcon?: boolean;
  confirmIcon?: boolean;
  defaultValue?: string;
  passwordInput?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  onPressConfirmButton?: ((event: GestureResponderEvent) => void) | undefined;
  onPressCancelButton?: ((event: GestureResponderEvent) => void) | undefined;
  validInput?: boolean;
};

const CustomInput: React.FC<Props> = (props: Props): JSX.Element => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={styles.customInputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={props.validInput ? styles.inputContainer : styles.inputContainerError}>
        {props.cancelIcon ? (
          <TouchableOpacity style={styles.cancelIcon} onPress={props.onPressCancelButton}>
            <FontAwesomeIcon icon="times-circle" size={20} style={{ color: "red" }} />
          </TouchableOpacity>
        ) : null}
        {props.confirmIcon ? (
          <TouchableOpacity style={styles.confirmIcon} onPress={props.onPressConfirmButton}>
            <FontAwesomeIcon icon="check-circle" size={20} style={{ color: "#1AD927" }} />
          </TouchableOpacity>
        ) : null}
        {props.passwordInput ? (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={styles.toggleIcon}>
            {secureTextEntry ? (
              <FontAwesomeIcon icon="eye-slash" size={20} style={{ color: "red" }} />
            ) : (
              <FontAwesomeIcon icon="eye" size={20} style={{ color: "#1AD927" }} />
            )}
          </TouchableOpacity>
        ) : null}
        {props.passwordInput ? (
          <TextInput
            placeholder={props.placeholder}
            style={styles.textInput}
            secureTextEntry={secureTextEntry}
            onChangeText={props.onChangeText}
            defaultValue={props.defaultValue}
          />
        ) : (
          <TextInput
            placeholder={props.placeholder}
            style={styles.textInput}
            defaultValue={props.defaultValue}
            onChangeText={props.onChangeText}
          />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
