import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#fff',
		marginTop: 10,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: '#1AD927',
		borderRadius: 10,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: 'green',
	},
	cardItem: {
		padding: 2,
		marginVertical: 8,
		marginHorizontal: 16,
		alignItems: 'center',
	},
	cardNumberText: {
		fontSize: 18,
		color: '#0B5910',
		fontFamily: 'Alex',
	},
	textWrapper: {
		flexDirection: 'row',
	},
	textContainerRight: {
		flex: 1,
		padding: 10,
		alignItems: 'flex-end',
	},
	textContainerLeft: {
		flex: 1,
		padding: 10,
		alignItems: 'flex-start',
	},
	textInfo: {
		fontSize: 12,
		paddingHorizontal: 2,
		color: '#0B5910',
		writingDirection: 'auto',
		fontFamily: 'IRANSansWeb_Bold',
	},
});
