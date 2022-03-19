import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={reqire('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/main-icon.png")} style={{ width: 150, height: 150 }}></Image>
                        <Text styles={styles.titleText}>Stellar</Text>
                        <Text styles={styles.titleText}>App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.propsnavigation.navigate("SpaceCraft")
                    }>
                        <Text style={styles.routeText}>SpaceCraft</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigatr("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.routeImaage></Image>
                    </TouchableOpacity>}

                    <TouchableOpacity style={style.routeCard} onPress{() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text><
                        <Image source={require("../assets/daily_pictures.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentheight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        fles: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "grey"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "grey"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#9800b3",
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});