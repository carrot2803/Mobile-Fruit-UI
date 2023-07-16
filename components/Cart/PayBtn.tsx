import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PayBtn() {
	return (
		<View className="flex-row justify-between items-center mx-7">
			<TouchableOpacity style={[btn.bg, btn.shadow]} className="p-3 flex-1 rounded-xl">
				<Text className="text-xl text-center text-white font-bold">Payment</Text>
			</TouchableOpacity>
		</View>
	);
}

const btn = StyleSheet.create({
	bg: { backgroundColor: "orange", opacity: 0.8 },
	shadow: { shadowColor: "orange", shadowRadius: 25, shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.4 },
});
