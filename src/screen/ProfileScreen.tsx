import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text, IconButton, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { useFocusEffect } from "@react-navigation/native";
import { getRandomIsoCodes } from "../services/isoService";
import { sendPushNotification } from "../services/notificationService";
import { useAtom } from "jotai";
import { toastAtom } from "../store/atoms/toastAtom";

const ProfileScreen: React.FC = () => {
    const { t } = useTranslation();
    const [isoCodes, setIsoCodes] = useState<string[]>(['KR', 'US', 'JP']);
    const [, setToast] = useAtom(toastAtom);

    const toastMsg = t("title");
    
    useFocusEffect(
        useCallback(() => {
            getRandomIsoCodes().then(setIsoCodes);
        }, [])
    );

    const handlePushNotification = async () => {
        await sendPushNotification(toastMsg);
    };

    const handleShowToast = () => {
        setToast("글로벌 토스트 메시지");
    };

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
            {/* 푸시 알림 아이콘 */}
            <IconButton
                icon="bell"
                size={28}
                onPress={handlePushNotification}
                style={styles.iconButton}
            />
            {/* 글로벌 토스트 버튼 */}
            <Button
                mode="contained"
                onPress={handleShowToast}
                style={styles.toastButton}
            >
                {t("showToast")}
            </Button>
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
    subtitle: {
        marginBottom: 20,
    },
    iconButton: {
        backgroundColor: "#e0e0e0",
        marginBottom: 20,
    },
    toastButton: {
        width: "80%",
    },
});
