import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1AD927',
	},
	header: {
		flex: 2,
		alignItems: 'center',
		paddingTop: 10,
	},
	profileImage: {
		height: 100,
		width: 100,
		marginTop: 10,
		borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff'
	},
	userNameText: {
		fontSize: 20,
		marginVertical: 10,
		color: '#fff',
		alignItems: 'center',
		fontFamily: 'IRANSansWeb_Bold',
	},
	infoContainer: {
		flex: 6,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
});
