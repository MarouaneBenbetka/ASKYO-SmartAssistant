import {
	Button,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const SignIn = ({ navigation }) => {
	const signInHandler = () => {
		navigation.navigate("description");
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Image
				style={styles.shapeTop}
				source={require("../../assets/bgShapes/bg-shape-top.png")}
			/>
			<View style={styles.container}>
				<Image source={require("../../assets/logo/logoText.png")} />
				<Text style={styles.text}>
					The virtual assistant that can understand your speech, talk
					back to you, suggest suitable responses to your emails and
					contain many other features that will help you{" "}
				</Text>
				<TouchableOpacity style={styles.button} onPress={signInHandler}>
					<Text style={{ color: "#6c6c6c", fontSize: 18 }}>
						sign in with google{" "}
					</Text>
				</TouchableOpacity>
			</View>

			<Image
				style={styles.shapeBottom}
				source={require("../../assets/bgShapes/bg-shape-bottom.png")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		marginTop: 22,
	},
	text: {
		width: "85%",
		textAlign: "center",
		color: "#1e1e1e",
		fontSize: 16,
		marginTop: 6,
	},
	button: {
		marginTop: 32,
		padding: 14,
		borderRadius: 8,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 8,

		elevation: 3,
	},
	shapeTop: {
		position: "absolute",
		top: 0,
		zIndex: 10,
	},
	shapeBottom: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
});

export default SignIn;
