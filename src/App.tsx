import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { PaperProvider, Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import "./i18n";
import Toast from "./components/Toast";
import * as Notifications from "expo-notifications";
import { theme } from "./theme";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
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
                        tabBarIcon: ({ focused, size }) => {
                            let iconName = "";
                            if (route.name === "Home") {
                                iconName = "camera";
                            } else if (route.name === "Profile") {
                                iconName = "account";
                            }
                            return (
                                <Icon
                                    source={iconName}
                                    color={
                                        focused
                                            ? theme.colors.tabActive
                                            : theme.colors.tabInactive
                                    }
                                    size={size}
                                />
                            );
                        },
                        tabBarActiveTintColor: theme.colors.tabActive,
                        tabBarInactiveTintColor: theme.colors.tabInactive,
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
