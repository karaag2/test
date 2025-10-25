import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: true }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Acceuil",
					headerTitle: "Rabbit World",
					headerStyle: { text-cen},
				}}
			/>
			<Tabs.Screen name="two" options={{ title: "Profil" }} />
		</Tabs>
	);
}
