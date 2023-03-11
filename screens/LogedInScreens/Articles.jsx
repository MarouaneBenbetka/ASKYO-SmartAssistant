import { StyleSheet, Text, View } from "react-native";

const Articles = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Articles</Text>
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

export default Articles;
