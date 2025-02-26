import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card , useTheme } from "react-native-paper";

interface MessageBoxProps {
    message: string;
    type?: "info" | "error";
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type = "info" }) => {
    const { colors } = useTheme();
    return (
        <Card style={[styles.card]}>
            <Card.Content>
                <Text style={[styles.messageText]}>
                    {message}
                </Text>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 8,
    },
    messageText: {
        fontSize: 16
    },
});

export default MessageBox;
