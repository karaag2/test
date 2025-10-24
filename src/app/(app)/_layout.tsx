import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Redirect, Stack } from "expo-router";
import { useLocaleContext } from "fbtee";
import { Fragment } from "react/jsx-runtime";
import useViewerContext from "src/user/useViewerContext.tsx";

export default function TabLayout() {
	if (!false) {
		return <Redirect href="/" />;
	}

	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					contentStyle: {
						backgroundColor: "transparent",
					},
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
