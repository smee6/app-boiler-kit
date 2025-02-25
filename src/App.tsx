import React from "react";
import { StyleSheet, View } from "react-native";
import {
    PaperProvider,
    MD3Colors,
    Icon
} from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import "./i18n";
import Toast from "./components/Toast";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { theme } from "./theme";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    }),
});

const Tab = createBottomTabNavigator();

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== "granted") {
                alert("알림 권한이 필요합니다.");
            }
        })();
    }, []);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = "";
                            if (route.name === "Home") {
                                iconName = "camera";
                            } else if (route.name === "Profile") {
                                iconName = "account";
                            }
                            return (
                                <Icon
                                    source={iconName}
                                    color={focused ? MD3Colors.error50 : "gray"}
                                    size={size}
                                />
                            );
                        },
                        tabBarActiveTintColor: MD3Colors.error50,
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
            <Toast />
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
});
