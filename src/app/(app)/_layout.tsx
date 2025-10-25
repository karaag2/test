import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Redirect, Stack } from "expo-router";
import { useLocaleContext } from "fbtee";
import { Fragment } from "react/jsx-runtime";
import useViewerContext from "src/user/useViewerContext.tsx";

export default function TabLayout() {
	return (
		<Stack
			options={{
				contentStyle: {
					backgroundColor: "transparent",
				},
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="(tabs)"
				options={{
					contentStyle: {
						backgroundColor: "transparent",
					},
					headerShown: false,
					headerTitleAlign: "center",
				}}
			/>
		</Stack>
	);
}
