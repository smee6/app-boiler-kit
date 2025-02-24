// src/screens/ProfileScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>
                {t("title")}
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
                {t("description")}
            </Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        marginBottom: 10,
    },
    subtitle: {},
});
