import { View, Text } from "react-native";

export const CarousselNavigation = () => {
	return (
		<View className="flex-row w-20 justify-between self-center">
			<View className="rounded-full h-3 w-10 bg-brightTurquoise " />
			<View className="rounded-full h-3 w-3 bg-deepBlueGray " />
			<View className="rounded-full h-3 w-3 bg-deepBlueGray " />
		</View>
	);
};
