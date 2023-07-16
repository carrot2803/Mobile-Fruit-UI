import { View, Text } from "react-native";
import { COLORS } from "../../constants";

export default function Details({ name, desc }: { name: string; desc: string }) {
	return (
		<>
			<Text style={{ color: COLORS.text }} className="mt-8 text-2xl font-bold">
				{name}
			</Text>
			<View className="flex-row justify-between mb-3">
				<Text className="text-gray-500 font-semibold">{desc}</Text>
				<Text className="text-gray-500 font-semibold">
					Sold <Text className="text-gray-800 font-extrabold"> 239</Text>
				</Text>
			</View>
		</>
	);
}
