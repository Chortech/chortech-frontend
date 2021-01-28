"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Animatable = require("react-native-animatable");
var regexValidator_1 = require("../../utils/regexValidator");
var navigationService_1 = require("../../navigation/navigationService");
var styles_1 = require("./styles");
var react_redux_1 = require("react-redux");
var Loading_1 = require("../Loading");
var userActions = require("../../store/actions/userActions");
var react_native_paper_1 = require("react-native-paper");
var SelectableItem_1 = require("../../components/SelectableItem");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var AddExpense = function () {
    var loggedInUserId = react_redux_1.useStore().getState()["authReducer"].id;
    var _a = react_1.useState({
        activityName: "",
        expenseAmount: "",
        isValidExpenseAmount: true,
        categories: [{ id: "0", selected: false, name: "مواد غذایی", icon: "utensils" },
            { id: "1", selected: false, name: "پوشاک", icon: "tshirt" },
            { id: "2", selected: false, name: "هدیه", icon: "gift" },
            { id: "3", selected: false, name: "سلامت", icon: "heartbeat" },
            { id: "4", selected: false, name: "لوازم تحریر", icon: "pencil-ruler" },
            { id: "5", selected: false, name: "ورزش", icon: "dumbbell" },
            { id: "6", selected: false, name: "سفر", icon: "suitcase-rolling" },
            { id: "7", selected: false, name: "کالای دیجیتال", icon: "laptop" }]
    }), data = _a[0], setData = _a[1];
    var _b = react_1.useState([]), fetchedItems = _b[0], setFetchedItems = _b[1];
    var _c = react_1.useState([]), items = _c[0], setItems = _c[1];
    var selectedItems = react_1.useRef([]);
    var _d = react_1.useState(false), refreshing = _d[0], setRefreshing = _d[1];
    var _e = react_1.useState(false), renderFlatList = _e[0], setRenderFlatList = _e[1];
    var _f = react_1.useState(false), modalVisible = _f[0], setModalVisibility = _f[1];
    var _g = react_1.useState(false), shareEqual = _g[0], setDivideEqual = _g[1];
    var dispatch = react_redux_1.useDispatch();
    var _h = react_redux_1.useSelector(function (state) { return state.userReducer; }), loading = _h.loading, id = _h.id, name = _h.name, friends = _h.friends, groups = _h.groups;
    var _j = react_1.useState(""), searchQuery = _j[0], setSearchQuery = _j[1];
    react_1.useEffect(function () {
        fetchItems();
    }, [dispatch]);
    var confirm = function () {
        if (data.activityName == "") {
            react_native_1.ToastAndroid.show("لطفا نام فعالیت را وارد کنید.", react_native_1.ToastAndroid.SHORT);
        }
        else if (data.expenseAmount == "") {
            react_native_1.ToastAndroid.show("لطفا مبلغ را وارد کنید.", react_native_1.ToastAndroid.SHORT);
        }
        else if (data.isValidExpenseAmount) {
            dispatch(userActions.onAddExpenseRequest(id, data.activityName, "description", "fruit", "10000"));
        }
    };
    var fetchItems = function () {
        dispatch(userActions.onGetUserFriendsRequest(loggedInUserId));
        dispatch(userActions.onGetUserGroupsRequest(loggedInUserId));
        if (friends != null && friends != undefined && groups != undefined && groups != null) {
            if (friends.length + groups.length != fetchedItems.length) {
                var items_1 = fetchedItems;
                friends.forEach(function (friend) {
                    if (items_1.find(function (element) { return element.id == friend.friendId; }) == undefined) {
                        var item = {
                            id: friend.friendId,
                            type: "friend",
                            name: friend.friendName,
                            selected: false,
                            share: 0
                        };
                        items_1.push(item);
                    }
                });
                groups.forEach(function (group) {
                    if (items_1.find(function (element) { return element.id == group.id; }) == undefined) {
                        var item = {
                            id: group.id,
                            type: "group",
                            name: group.name,
                            selected: false,
                            share: 0
                        };
                        items_1.push(item);
                    }
                });
                setFetchedItems(items_1);
                setItems(items_1);
            }
        }
    };
    var onRefresh = react_1.useCallback(function () {
        setRefreshing(true);
        fetchItems();
        setRefreshing(false);
    }, [dispatch]);
    var onChangeSearchQuery = function (text) {
        setSearchQuery(text);
        if (text != "") {
            setItems(items.filter(function (item) { return item.name.includes(text); }));
            setRenderFlatList(!renderFlatList);
        }
        else {
            setItems(fetchedItems);
        }
    };
    var setActivityName = function (text) {
        setData(__assign(__assign({}, data), { activityName: text }));
    };
    var setExpenseAmount = function (text) {
        setData(__assign(__assign({}, data), { expenseAmount: text, isValidExpenseAmount: text == "" || regexValidator_1.RegexValidator.validateExpenseAmount(text) == true }));
    };
    var cancel = function () { return navigationService_1["default"].goBack(); };
    var onSelectItem = function (item) {
        item.selected = !item.selected;
        if (selectedItems.current.find(function (element) { return element.id == item.id; }) == undefined) {
            selectedItems.current.push(item);
        }
        else {
            var index = selectedItems.current.indexOf(item);
            if (index > -1) {
                selectedItems.current.splice(index, 1);
            }
        }
        if (selectedItems.current.find(function (element) { return element.id == id; }) == undefined) {
            selectedItems.current.push({ id: id, name: name, share: 0, type: "myself" });
        }
        setRenderFlatList(!renderFlatList);
    };
    var renderSelectableItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(SelectableItem_1["default"], { id: item.id, Name: item.name, selected: item.selected, onPressItem: function () { return onSelectItem(item); } }));
    };
    var renderCategory = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(SelectableItem_1["default"], { id: item.id, Name: item.name, selected: item.selected, onPressItem: function () {
                    data.categories[item.id].selected = !data.categories[item.id].selected;
                    setRenderFlatList(!renderFlatList);
                } }),
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: item.icon, size: 20, style: { position: "relative", top: 20 } })));
    };
    var renderFooterComponent = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.buttonContainer },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.addButton, onPress: confirm },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.addButtonText }, "\u0627\u06CC\u062C\u0627\u062F \u0647\u0632\u06CC\u0646\u0647")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.removeButton, onPress: cancel },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.removeButtonText }, "\u0627\u0646\u0635\u0631\u0627\u0641")))));
    };
    var showModal = function () {
        onSelectItem({ id: id, name: name, share: 0, type: "myself" });
        setModalVisibility(true);
    };
    var divideEqual = function (expense, selectedItems) {
        if (!shareEqual) {
            var money = Number(expense);
            var length = selectedItems.length;
            var equalShare_1 = Number((money / length).toFixed(3));
            selectedItems.forEach(function (item) {
                item.share = equalShare_1;
            });
            setDivideEqual(!shareEqual);
            setRenderFlatList(!renderFlatList);
        }
        else {
            setDivideEqual(false);
        }
    };
    var renderModalFlatList = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.modalItemContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.modalNameText }, item.name),
            shareEqual ? (react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.modalShareText }, item.share.toString())) : (react_1["default"].createElement(react_native_1.TextInput, { placeholder: "\u0645\u0628\u0644\u063A(\u062A\u0648\u0645\u0627\u0646)", style: { textAlign: "center", borderTopWidth: 1, borderTopColor: "#cccccc" }, onChangeText: function (text) { return (item.share = Number(text)); }, defaultValue: item.share.toString(), keyboardType: "numeric" }))));
    };
    var closeModal = function () {
        var sum = 0;
        selectedItems.current.forEach(function (element) {
            sum += element.share;
        });
        if (Math.abs(sum - Number(data.expenseAmount)) <= 0.01) {
            setModalVisibility(false);
        }
        else {
            react_native_1.ToastAndroid.show("مقادیر وارد شده با مبلغ کل برابر نیست", react_native_1.ToastAndroid.SHORT);
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement(Loading_1["default"], null)) : (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container },
        react_1["default"].createElement(react_native_1.Modal, { visible: modalVisible, transparent: true, animationType: "slide" },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.modalOutmostContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.modalContentContainer },
                    react_1["default"].createElement(react_native_1.FlatList, { ListHeaderComponent: react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.modalNameText },
                                "\u0645\u0628\u0644\u063A \u06A9\u0644: ",
                                data.expenseAmount == "" ? "0" : data.expenseAmount),
                            react_1["default"].createElement(SelectableItem_1["default"], { Name: "\u0645\u0633\u0627\u0648\u06CC \u062A\u0642\u0633\u06CC\u0645 \u06A9\u0646", selected: shareEqual, onPressItem: function () { return divideEqual(data.expenseAmount, selectedItems.current); } },
                                react_1["default"].createElement(react_native_1.Text, null, "\u0645\u0633\u0627\u0648\u06CC \u062A\u0642\u0633\u06CC\u0645 \u06A9\u0646"))), data: selectedItems.current, renderItem: renderModalFlatList, extraData: renderFlatList, scrollEnabled: true, showsVerticalScrollIndicator: false, ListFooterComponent: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: closeModal, style: styles_1.styles.showModalButton },
                            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.modalButtonText }, "\u062A\u0627\u06CC\u06CC\u062F")) })))),
        react_1["default"].createElement(Animatable.View, { animation: "slideInUp", duration: 1000, style: styles_1.styles.infoContainer },
            react_1["default"].createElement(react_native_paper_1.Searchbar, { placeholder: "\u0627\u06CC\u0645\u06CC\u0644 \u06CC\u0627 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062F\u0648\u0633\u062A \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", style: styles_1.styles.searchBar, inputStyle: styles_1.styles.searchInput, onChangeText: onChangeSearchQuery, value: searchQuery, iconColor: "#1AD927", onIconPress: function () { return onChangeSearchQuery(searchQuery); } }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.inputContainer },
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "\u0646\u0627\u0645 \u0641\u0639\u0627\u0644\u06CC\u062A", placeholderTextColor: "#A4A4A4", value: data.activityName, style: styles_1.styles.textInput, onChangeText: setActivityName }),
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "\u0645\u0628\u0644\u063A (\u062A\u0648\u0645\u0627\u0646)", value: data.expenseAmount, placeholderTextColor: "#A4A4A4", style: styles_1.styles.textInput, keyboardType: "numeric", onChangeText: setExpenseAmount }),
                react_1["default"].createElement(react_native_1.FlatList, { horizontal: true, data: data.categories, renderItem: renderCategory, extraData: renderFlatList, scrollEnabled: true, keyExtractor: function (item) { return item.id; } }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: showModal, style: styles_1.styles.showModalButton },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.modalButtonText }, "\u0686\u0637\u0648\u0631\u06CC \u062A\u0642\u0633\u06CC\u0645 \u06A9\u0646\u0645\u061F"))),
            react_1["default"].createElement(react_native_1.FlatList, { refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: onRefresh }), data: items, renderItem: renderSelectableItem, extraData: renderFlatList, scrollEnabled: true, ListFooterComponent: renderFooterComponent }))))));
};
exports["default"] = AddExpense;
