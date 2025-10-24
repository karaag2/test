import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CarousselNavigation } from "components/ui/Caroussel.tsx";
import { router } from "expo-router";

const signup = () => {
	return (
		<View className="flex-1 bg-[#111f21]">
			<View className="h-2/5 justify-end">
				<CarousselNavigation />
			</View>
			<View className="flex-col px-6">
				<Text className="text-white font-bold text-2xl my-6">
					Create your account
				</Text>
				<View className="items-cente  gap-4">
					<TextInput
						placeholder="Email"
						className="border-2 focus:outline-deepBlueGray px-3 text-lg border-zinc-600 py-3 w-full rounded-2xl"
					/>
					<TextInput
						placeholder="Password"
						className="border-2 border-white px-3 text-lg py-3 w-full rounded-2xl border-zinc-600 focus:outline-deepBlueGray"
					/>
					<TextInput
						placeholder="Confirm Password"
						className="border-2 border-white px-3 text-lg py-3 w-full rounded-2xl border-zinc-600 focus:outline-deepBlueGray"
					/>
				</View>
				<View className="my-4 mt-10">
					<TouchableOpacity
						className="text-lg text-white font-bold py-3 w-full rounded-3xl bg-brightTurquoise text-center"
						onPress={() => router.push("/login")}
					>
						<Text>Sign Up</Text>
					</TouchableOpacity>
					<View className="flex-row items-center my-3">
						<View className="flex-1 border-b border-b-gray-400" />
						<View className="flex-1 text-gray-400 px-3">Or sigh up with</View>
						<View className="flex-1 border-b border-b-gray-400" />
					</View>
					<View className="flex-row gap-4">
						<View className="flex-1 px-4 py-3 rounded-full bg-[#12363b]">
							<Text className="text-center text-white font-bold">Google</Text>
						</View>
						<View className="flex-1 px-4 py-3 rounded-full  bg-[#12363b]">
							<Text className="text-center text-white font-bold">Apple</Text>
						</View>
					</View>
					<Text className="text-center text-duckBlue my-8 text-gray-400 text-xs">
						By Signing up. you agree to our . you agree to our{" "}
						<Text className="underline text-brightTurquoise">
							Terms of Service
						</Text>{" "}
						and{" "}
						<Text className="underline text-brightTurquoise">
							Privacy Policy
						</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};

export default signup;
