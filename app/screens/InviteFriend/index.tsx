import React, { useCallback, useEffect, useRef, useState } from "react";
import { PermissionsAndroid, RefreshControl, Text, ToastAndroid, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";
import Contacts, { Contact, EmailAddress, PhoneNumber } from "react-native-contacts";
import { styles } from "./styles";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { User } from "../../models/other/graphql/User";
import SearchedUserItem from "../../components/SearchedUserItem";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import * as authActions from "../../store/actions/authActions";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";
import { validateToken } from "../../utils/tokenValidator";
import { log } from "../../utils/logger";
import ContactItem from "../../components/ContactItem";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";
import { CustomContact } from "../../models/other/CustomContact";
import { faTumblrSquare } from "@fortawesome/free-brands-svg-icons";

type IState = {
  userReducer: IUserState;
};

const InviteFriend: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [validInput, setValidInput] = useState(true);
  const [contacts, setContacts] = useState<CustomContact[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchedContacts, setSearchedContacts] = useState<CustomContact[]>([]);
  const [renderVerticalList, setRenderVerticalList] = useState(false);
  const [renderHorizontalList, setRenderHorizontalList] = useState(false);
  const selectedContacts = useRef<CustomContact[]>([]);
  const [tempID, setTempID] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts();
  }, []);

  log(selectedContacts.current);
  const onSelectContact = (contact: CustomContact) => {
    contact.selected = !contact.selected;
    let index = selectedContacts.current?.findIndex((c) => c.recordID == contact.recordID);
    if (index == -1) {
      selectedContacts.current?.push(contact);
    } else {
      selectedContacts.current?.splice(index, 1);
    }
    setRenderHorizontalList(!renderHorizontalList);
    setRenderVerticalList(!renderVerticalList);
  };

  const onAddNewContact = () => {
    if (validInput && emailOrPhone != "") {
      let numbers: string[] = [];
      let emails: string[] = [];
      if (inputType == InputType.Phone) numbers.push(emailOrPhone);
      else if (inputType == InputType.Email) emails.push(emailOrPhone);
      let contact: CustomContact = {
        recordID: `${tempID}`,
        name: emailOrPhone,
        phoneNumbers: numbers,
        emailAddresses: emails,
        selected: true,
      };
      selectedContacts.current?.push(contact);
      setInfo("");
      setRenderVerticalList(!renderVerticalList);
      setTempID(tempID - 1);
    } else {
      ToastAndroid.show("شماره تلفن یا موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
    }
  };

  const onSearchContact = (text: string) => {
    setInfo(text);
    if (text != "") {
      setSearchedContacts(
        searchedContacts.filter((contact) =>
          contact.name.toLowerCase().includes(text.toLowerCase())
        )
      );
      setRenderVerticalList(!renderVerticalList);
    } else {
      setSearchedContacts(contacts);
    }
  };

  const extractPhoneNumbers = (contact: Contact): string[] => {
    let numbers: string[] = [];
    contact.phoneNumbers.forEach((phone) => {
      if (numbers.findIndex((number) => number == phone.number) == -1) {
        numbers.push(phone.number);
      }
    });

    return numbers;
  };

  const extractEmails = (contact: Contact): string[] => {
    let emails: string[] = [];
    contact.emailAddresses.forEach((email) => {
      if (emails.findIndex((e) => e == email.email) == -1) {
        emails.push(email.email);
      }
    });

    return emails;
  };

  const fetchContacts = () => {
    let result: CustomContact[] = [];
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(() => {
      Contacts.getAll().then((data) => {
        data.forEach((contact) => {
          let phoneNumbers: string[] = extractPhoneNumbers(contact);
          let emailAddresses: string[] = extractEmails(contact);
          if (phoneNumbers.length > 0 || emailAddresses.length > 0) {
            let temp: CustomContact = {
              recordID: contact.recordID,
              name: contact.givenName + " " + contact.familyName,
              phoneNumbers: phoneNumbers,
              emailAddresses: emailAddresses,
            };
            result.push(temp);
          }
        });

        result.forEach((contact) => {
          selectedContacts.current?.forEach((item) => {
            if (contact.recordID == item.recordID) {
              contact.selected = item.selected;
            }
          });
        });

        setContacts(result);
        setSearchedContacts(result);
        setRenderVerticalList(!renderVerticalList);
      });
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchContacts();
    setRefreshing(false);
  }, [dispatch]);

  const onPressNextScreen = () => {
    if (selectedContacts.current?.length > 0) {
    } else {
      ToastAndroid.show("شما کسی را انتخاب نکرده‌اید", ToastAndroid.SHORT);
    }
  };

  const onPressAddFriend = (): void => {
    if (validateToken(loggedInUser.token)) {
      if (validInput) {
        if (inputType == InputType.Email) {
          dispatch(
            friendActions.onAddFriendRequest(loggedInUser.token, emailOrPhone, "", inputType)
          );
        } else if (inputType == InputType.Phone) {
          dispatch(
            friendActions.onAddFriendRequest(loggedInUser.token, "", emailOrPhone, inputType)
          );
        }
      } else {
        ToastAndroid.show("ایمیل یا شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
    }
  };

  const onPressInviteFriend = (): void => {
    if (validateToken(loggedInUser.token)) {
      if (validInput) {
        if (inputType == InputType.Email) {
          dispatch(
            friendActions.onInviteFriendRequest(loggedInUser.token, emailOrPhone, "", inputType)
          );
        } else if (inputType == InputType.Phone) {
          dispatch(
            friendActions.onInviteFriendRequest(loggedInUser.token, "", emailOrPhone, inputType)
          );
        }
      } else {
        ToastAndroid.show("ایمیل یا شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
    }
  };

  const setInfo = (text: string) => {
    let type: InputType = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    setInputType(type);
    if (type == InputType.Email || type == InputType.Phone) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={500} style={styles.contactsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
                style={styles.textInput}
                onChangeText={onSearchContact}
              />
              <TouchableOpacity style={styles.addNewContactButton} onPress={onAddNewContact}>
                <FontAwesomeIcon icon="user-plus" style={styles.addNewContactIcon} size={25} />
                <Text style={styles.addNewContactButtonText}>افزودن مخاطب جدید</Text>
              </TouchableOpacity>
            </View>
            {selectedContacts.current?.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={selectedContacts.current}
                style={styles.selectedList}
                contentContainerStyle={{
                  justifyContent: "center",
                }}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.userContainer}>
                      <TouchableOpacity onPress={() => onSelectContact(item)}>
                        <FontAwesomeIcon icon="times-circle" size={20} style={styles.cancelIcon} />
                      </TouchableOpacity>
                      <FontAwesomeIcon icon="user" style={styles.userIcon} size={25} />
                      <Text style={styles.userText}>{item.name}</Text>
                    </View>
                  );
                }}
                keyExtractor={(item) => item.recordID.toString()}
                removeClippedSubviews
              />
            ) : null}
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={searchedContacts}
              initialNumToRender={6}
              style={styles.contactList}
              renderItem={({ item }) => {
                return (
                  <ContactItem
                    contact={item}
                    selected={item.selected}
                    onPressContact={() => onSelectContact(item)}
                  />
                );
              }}
              keyExtractor={(item) => item.recordID.toString()}
              showsVerticalScrollIndicator={false}
              extraData={renderVerticalList}
              removeClippedSubviews
            />
          </Animatable.View>
          <FloatingAction
            color={colors.mainColor}
            position="left"
            overlayColor="#00000000"
            floatingIcon={<FontAwesomeIcon icon="check" color="#fff" size={20} />}
            onPressMain={onPressNextScreen}
          />
        </View>
      )}
    </>
  );
};

export default InviteFriend;
