import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, cartProps } from "../../constants";

export default function Fruit({ fruit }: { fruit: cartProps }) {
	return (
		<>
			<View className="ml-5 mr-5">
				<TouchableOpacity className="flex-row justify-center -mb-10 -ml-10 shadow-lg z-20">
					<Image source={fruit.image} style={[img.shadow, img.size, { shadowColor: fruit.shadow }]} />
				</TouchableOpacity>
				<View
					style={{ backgroundColor: fruit.color(0.4), height: 60, width: 60 }}
					className={` rounded-3xl flex justify-end items-center`}
				></View>
			</View>
			<View className="flex-1 space-y-1">
				<Text style={{ color: COLORS.text }} className=" text-base font-bold">
					{fruit.name}
				</Text>
				<Text className="text-yellow-500 font-extrabold">$ {fruit.price}</Text>
			</View>
		</>
	);
}

const img = StyleSheet.create({
	shadow: { overflow: "visible", shadowRadius: 15, shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.4 },
	size: { height: 65, width: 65 },
});
