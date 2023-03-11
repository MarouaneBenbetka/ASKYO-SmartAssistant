import { StyleSheet, Text, View } from "react-native";

const ToDoList = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>To do list</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ToDoList;
