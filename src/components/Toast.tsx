// src/components/Toast.tsx
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, Dimensions } from "react-native";
import { useAtom } from "jotai";
import { toastAtom } from "../store/atoms/toastAtom";

const { width } = Dimensions.get("window");

const Toast = () => {
    const [toast, setToast] = useAtom(toastAtom);
    const opacity = new Animated.Value(0);

    useEffect(() => {
        if (toast) {
            // 토스트 표시 애니메이션
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start(() => setToast(null));
                }, 2000);
            });
        }
    }, [toast]);

    if (!toast) return null;

    return (
        <Animated.View style={[styles.toastContainer, { opacity }]}>
            <Text style={styles.toastText}>{toast}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    toastContainer: {
        position: "absolute",
        bottom: 80,
        left: (width - 250) / 2,
        width: 250,
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    toastText: {
        color: "#fff",
        fontSize: 15,
    },
});

export default Toast;
