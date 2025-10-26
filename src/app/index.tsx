import Stack from "@nkzw/stack";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Text from "src/ui/Text.tsx";
import useViewerContext from "src/user/useViewerContext.tsx";
import { CarousselNavigation } from "components/ui/Caroussel.tsx";

export default function Login() {
	const router = useRouter();

	const onPress = useCallback(async () => {
		await login();
		router.replace("/");
	}, [login, router]);

	return (
		<SafeAreaView className="flex-1 bg-gray-100">
			<View className="flex-1 bg-steelGreen">
				{" "}
				{/* flex-1 pour remplir toute la hauteur */}
				<View className="flex-1 flex flex-col">
					<View className="flex-1  justify-end items-center bg-gradient-to-b from-[#396053]  to-anthraciteGreen flex-col">
						<Text className="text-5xl text-red-500 absolute top-0 ">Logo</Text>
						<View className="w-[85%] bg-white/40 px-8 justify-self-end py-5 rounded-3xl space-y-4">
							<Text className="text-4xl font-bold text-white">BunnyPedia</Text>
							<Text className="text-lg text-white/60">
								Your guide to the world of <br /> rabbits
							</Text>
						</View>
					</View>
					<View className="flex-1 bg-anthraciteGreen px-6">
						<View className="h-1/2 justify-evenly flex-col flex">
							<Text className="font-bold text-2xl text-white/90 text-center">
								Discover & Connect
							</Text>
							<Text className="text-brightTurquoise opacity-60 text-center text-lg">
								Explore breeds, care tips, and join a <br /> passionate
								community.
							</Text>
							<View className="flex-row w-20 justify-between self-center">
								<CarousselNavigation />
							</View>
						</View>

						<View className="flex-col gap-6 w-full   h-1/2">
							<TouchableOpacity
								className="bg-brightTurquoise rounded-2xl py-3 items-center justify-center"
								onPress={() => router.push("/signup")}
							>
								<Text className="text-lg font-bold">Sign Up</Text>
							</TouchableOpacity>
							<TouchableOpacity
								className="bg-duckBlue rounded-2xl py-3 items-center justify-center"
								onPress={() => router.push("/login")}
							>
								<Text className="text-lg font-bold text-brightTurquoise">
									Log In
								</Text>
							</TouchableOpacity>
							<Text className="text-center text-duckBlue">
								By continuing. you agree to our{" "}
								<Text className="underline">Terms of Service</Text>
							</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
