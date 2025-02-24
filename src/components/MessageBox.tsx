import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

interface MessageBoxProps {
    message: string;
    type?: "info" | "error";
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type = "info" }) => {
    return (
        <Card style={[styles.card, type === "error" && styles.errorCard]}>
            <Card.Content>
                <Text style={styles.messageText}>{message}</Text>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    errorCard: {
        backgroundColor: "#f8d7da",
    },
    messageText: {
        fontSize: 16,
        color: "#333",
    },
});

export default MessageBox;
