import "global.css";
import { Stack } from "expo-router";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
	initialRouteName: "(app)",
};

export default function RootLayout() {
	return (
		// <GestureHandlerRootView>
		<Stack className="!basis-full flex-1">
			<Stack.Screen name="(app)" options={{ headerShown: false }} />
		</Stack>
		// </GestureHandlerRootView>
	);
}
