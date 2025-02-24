import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { useFocusEffect } from "@react-navigation/native";
import { getRandomIsoCodes } from "../services/isoService";

const ProfileScreen: React.FC = () => {
    const { t } = useTranslation();
    const [isoCodes, setIsoCodes] = useState<string[]>([]);

    useFocusEffect(
        useCallback(() => {
            getRandomIsoCodes().then(setIsoCodes);
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>
                {t("title")}
            </Text>
            {/* API 호출 결과로 받은 랜덤 isoCode 목록 */}
            <Text variant="bodyMedium" style={styles.isoCodes}>
                {isoCodes.join(", ")}
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
    isoCodes: {
        marginBottom: 10,
        fontSize: 16,
        color: "#555",
    },
    subtitle: {},
});
