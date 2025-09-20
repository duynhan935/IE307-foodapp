import { Stack } from "expo-router";
import "./global.css";
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}

// Cái headerShown: false để ẩn cái header (tabs) mặc định của expo-router
