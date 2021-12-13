import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	cardContainer: colors => ({
		backgroundColor: colors.card,
		borderRadius: 10,
		shadowColor: colors.border,
		shadowOpacity: 0.3,
		shadowRadius: 1,
		shadowOffset: {
			height: 1,
			width: 0.3,
		},
		width: '100%',
		height: 100,
		flexDirection: 'row'
	}),
	image: {
		justifyContent: 'flex-start',
		height: 100,
		width: 100,
		borderRadius: 10,
		position: 'absolute'
	},
	textContainer: {
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		padding: 7,
		paddingLeft: 107
	},
	title: {
		width: '100%',
		flex: 3,
		justifyContent: 'center'
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 17,
	},
	details: {
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center'
	},
	detailsText: {
		fontSize: 12
	}
});