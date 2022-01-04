import React from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	useWindowDimensions,
    Pressable,
	View, 
    Image
} from "react-native";

import BlueButton from "../../components/BlueButton";

const AboutYou = ({ navigation }) => {

    // blue button submit handler
	const onBlueButtonPress = () => navigation.push("Onboarding");
	const { width } = useWindowDimensions();

	return (
		<SafeAreaView style={ styles.container }>
            <Text style={ styles.heading }>
                Verify your photo
            </Text>
			<View style={ styles.inputContainer }>
                <Text style={ styles.subHeading1 }>
                Link at least 1 of your social media profiles below so we can verify your sumbitted profile photo matches your social media profile. If we cannot verify your identity you will not be allowed into the community.
                </Text>
                <View style= { styles.mediaContainer}>
                    <Pressable>
                        <Image style={styles.tinyLogo} source={require('../../../assets/linkedin.png')} />
                        <Text style={styles.socialmedia}>
                            instagram.com/
                            <Text style={{color: "#56C1FF"}} >
                                yourprofile
                            </Text>
                        </Text>
                    </Pressable>
                </View>
                <View style= { styles.inputContainer}>
                    <Pressable>
                        <Text style={styles.socialmedia}>
                            facebook.com/
                            <Text style={{color: "#56C1FF"}} >
                                yourprofile
                            </Text>
                        </Text>
                    </Pressable>
                </View>
                <View style= { styles.inputContainer}>
                    <Pressable>
                        <Text style={styles.socialmedia}>
                            LinkedIn.com/
                            <Text style={{color: "#56C1FF"}} >
                                yourprofile
                            </Text>
                        </Text>
                    </Pressable>
                </View>
				<Text style={ styles.subHeading2 }>
                    If you're not on social media tap {""}
                    <Text style={ {color: "#56C1FF"} }>
                        HERE
                    </Text>
				</Text>
                <BlueButton 
					textContent={"NEXT"}
					onPress={onBlueButtonPress}
				/>
			</View>
		</SafeAreaView>
	);
};

export default AboutYou;

const styles = StyleSheet.create({
    container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	inputContainer: {
		width: 275,
	},
	text: {
		color: "#EFEFEF",
		fontSize: 16,
		paddingTop: 35,
	},
	labelText: {
        color: "#EFEFEF",
		fontSize: 16,
		marginTop: 20,
        fontWeight: "700"
    },
	dropdownText: {
		color: "#EFEFEF",
		fontSize: 16,
		textAlign: "center"
	},
    smallText: {
        fontSize: 12,
        color: "#EFEFEF"
    },
    heading: {
        fontSize: 25,
        color: "#EFEFEF",
        fontWeight: "700",
        marginTop: 50,
		marginBottom: 9
    },
	subHeading1: {
        fontSize: 16,
		fontWeight: "500",
        color: "#EFEFEF",
		marginTop: 30,
		textAlign: "center",
    },
    subHeading2: {
        fontSize: 15,
		fontWeight: "500",
        color: "#EFEFEF",
		marginTop: 30,
        marginBottom: 25,
		textAlign: "center",
    },
    socialmedia: {
        fontSize: 14,
		fontWeight: "bold",
        color: "#EFEFEF",
		marginTop: 30,
		textAlign: "center",
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "#EFEFEF",
        paddingTop: 10,
        paddingBottom: 10,
    },
    mediaContainer: {

    },
    tinyLogo: {
        width: 50,
        height: 50,
    }
});