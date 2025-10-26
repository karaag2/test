import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: true }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Acceuil",
					headerTitle: () => (
						<View className="flex-row justify-center items-center flex-1 ">
							<Text className="text-white font-bold text-lg ">
								Rabbit World
							</Text>
							<TouchableOpacity className="translate-x-20">
								<Feather name="search" size={24} color="white" />
							</TouchableOpacity>
						</View>
					),
					headerTitleAlign: "center",

					headerTitleStyle: {
						color: "white",
						fontSize: 20,
						fontWeight: "700",
					},
					headerBackground: () => (
						<LinearGradient
							colors={["#496062", "#454e50"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={{ flex: 1 }}
						/>
					),
				}}
			/>
			<Tabs.Screen name="two" options={{ title: "Profil" }} />
		</Tabs>
	);
}
