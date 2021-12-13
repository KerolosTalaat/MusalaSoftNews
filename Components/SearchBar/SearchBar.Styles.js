import { StyleSheet } from "react-native";

export  default StyleSheet.create({
	container: {
		marginVertical: 15,
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#d9dbda",
		paddingVertical: 10,
		borderRadius: 25
	},
	input: {
		fontSize: 20,
		marginHorizontal: 40,
	},
	searchIcon: {
		position: "absolute",
		left: 10
	},
	closeIcon: {
		position: "absolute",
		right: 10
	}
});