import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Splash() {

    useEffect(() => {

        setTimeout(() => {
            router.replace("/(tabs)");
        }, 3000);

    }, []);

return (
    <View style={styles.container}>
        <Text style={styles.text}>My Fitness App</Text>
        <ActivityIndicator size="large" />
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff6600",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: "#fff",
    }
});

