import React, { Component, useState } from "react";
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/resources/colors";
import { log } from "../../utils/logger";

type Props = {
  actions: string[];
  onPress: (item: string, index: number | undefined) => void;
};

const PopupMenu: React.FC<Props> = (props: Props) => {
  const [icon, setIcon] = useState(1);
  const ICON_SIZE = 30;

  const onRef = (icon) => {
    if (icon) {
      setIcon(icon);
    }
  };

  const onPress = (): any => {
    if (icon) {
      UIManager.showPopupMenu(findNodeHandle(icon)!, props.actions, onError, props.onPress);
    }
  };

  const onError = () => {
    console.log("Popup Error");
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon name="more-vert" size={ICON_SIZE} color={colors.white} ref={onRef} />
      </TouchableOpacity>
    </View>
  );
};

export default PopupMenu;

// export default class PopupMenu extends Component<{}, Props> {
//   static propTypes = {
//     actions: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onPress: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       icon: null,
//     };
//   }

//   onError() {
//     console.log("Popup Error");
//   }

//   onPress = () => {
//     if (this.state.icon) {
//       UIManager.showPopupMenu(
//         findNodeHandle(this.state.icon),
//         this.props.actions,
//         this.onError,
//         this.props.onPress
//       );
//     }
//   };

//   render() {
//     return (
//       <View>
//         <TouchableOpacity onPress={this.onPress}>
//           <Icon name="more-vert" size={ICON_SIZE} color={"grey"} ref={this.onRef} />
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   onRef = (icon) => {
//     if (!this.state.icon) {
//       this.setState({ icon });
//     }
//   };
// }
