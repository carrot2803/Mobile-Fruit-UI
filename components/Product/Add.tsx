import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dataProps } from "../../constants";

export default function Add({ fruit }: { fruit: dataProps }) {
	const nav: any = useNavigation();
	return (
		<View className="flex-row justify-between items-center mt-12">
			<Text className="text-3xl">$ {fruit.price}</Text>
			<TouchableOpacity
				onPress={() => nav.navigate("Cart")}
				style={[btn.s, { backgroundColor: fruit.shadow, shadowColor: fruit.shadow }]}
				className="p-3 ml-6 flex-1 rounded-xl"
			>
				<Text className="text-xl text-center text-white font-bold">Add To Cart</Text>
			</TouchableOpacity>
		</View>
	);
}

const btn = { s: { opacity: 0.6, shadowRadius: 25, shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.5 } };
