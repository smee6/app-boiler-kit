import { StyleSheet, View } from "react-native";
import {
    PaperProvider,
    MD3Colors,
    Icon,
    MD3LightTheme as DefaultTheme,
} from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: MD3Colors.error50,
        accent: MD3Colors.error50,
    },
};