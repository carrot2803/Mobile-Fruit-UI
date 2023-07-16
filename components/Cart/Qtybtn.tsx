import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { View, Text, TouchableOpacity } from "react-native";

export default function Qtybtn({ qty }: { qty: number }) {
	return (
		<View className="flex-row items-center space-x-2">
			<TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
				<PlusIcon size="15" color="white" />
			</TouchableOpacity>
			<Text>{qty}</Text>
			<TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
				<MinusIcon size="15" color="white" />
			</TouchableOpacity>
		</View>
	);
}
