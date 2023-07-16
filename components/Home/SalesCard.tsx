import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dataProps } from "../../constants";

export default function SalesCard({ fruit }: { fruit: dataProps }) {
	const nav: any = useNavigation();
	return (
		<View className="mr-6">
			<TouchableOpacity
				onPress={() => nav.navigate("Product", { ...fruit, color: fruit.color(1) })}
				className="flex-row justify-center -mb-9 shadow-lg z-20"
			>
				<Image source={fruit.image} style={[img.shadow, img.size, { shadowColor: fruit.shadow }]} />
			</TouchableOpacity>

			<View
				style={{ backgroundColor: fruit.color(0.4), height: 75, width: 80 }}
				className={` rounded-3xl flex justify-end items-center`}
			>
				<Text className="font-semibold text-center text-gray-800 tracking-wide pb-3">$ {fruit.price}</Text>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	shadow: { overflow: "visible", shadowRadius: 15, shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.4 },
	size: { height: 65, width: 65 },
});
