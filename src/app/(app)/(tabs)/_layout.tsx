import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="index" options={{ title: "Accueil" }} />
			<Tabs.Screen name="two" options={{ title: "Profil" }} />
		</Tabs>
	);
}
