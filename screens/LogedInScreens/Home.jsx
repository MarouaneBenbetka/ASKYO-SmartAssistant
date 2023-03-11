import { StyleSheet, Text, View } from "react-native";
import AskQuestion from './AskQuestion'

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<AskQuestion/>
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

export default Home;
