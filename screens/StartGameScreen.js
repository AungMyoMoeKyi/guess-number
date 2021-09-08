import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
} from "react-native";

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    {/* <Button title="Reset" onPress={() => { }} />
                    <Button title="Confirm" onPress={() => { }} /> */}

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 15,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
    },
    inputContainer: {
        width: 350,
        maxWidth: "80%",
        alignItems: "center",
        shadowOpacity: 1, //complete opacity
        shadowOffset: { width: 1, height: 1 }, //X and Y offset
        shadowRadius: 3,
        shadowColor: "#f72875",
        borderRadius: 10,
        padding: 18,
        backgroundColor: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: "#00b7eb",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },

});

export default StartGameScreen;