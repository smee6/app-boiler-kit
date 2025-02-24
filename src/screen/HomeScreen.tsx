// src/screens/HomeScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { useAtom } from "jotai";
import { counterAtom } from "../store/atoms/counterAtom";
import { useTranslation } from "react-i18next";

import MessageBox from "../components/MessageBox";

const HomeScreen = () => {
    const { t } = useTranslation();
    const [counter, setCounter] = useAtom(counterAtom);

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>
                {t("homeScreen.title")}
            </Text>
            <MessageBox
                message="안녕하세요! 이것은 메시지 박스입니다."
                type="info"
            />
            <Text variant="titleMedium" style={styles.counterText}>
                {t("homeScreen.counter")}: {counter}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => setCounter((c) => c - 1)}
                    style={styles.button}
                >
                    {t("homeScreen.decrement")}
                </Button>
                <Button
                    mode="contained"
                    onPress={() => setCounter((c) => c + 1)}
                    style={styles.button}
                >
                    {t("homeScreen.increment")}
                </Button>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        marginBottom: 20,
    },
    counterText: {
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        marginHorizontal: 10,
    },
});
