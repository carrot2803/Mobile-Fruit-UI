import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { dataProps } from "../../constants";

export default function Card({ fruit }: { fruit: dataProps }) {
	const [fav, setFav] = useState(false);
	return (
		<View style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }} className={`mx-5`}>
			<View className="flex-row justify-end">
				<TouchableOpacity onPress={() => setFav(!fav)} className="p-3 rounded-full mr-4 mt-4" style={card.bg}>
					<HeartIcon size="25" color={fav ? fruit.shadow : "white"} />
				</TouchableOpacity>
			</View>
			<View className="flex-row justify-center" style={[card.img, { shadowColor: fruit.shadow }]}>
				<Image source={fruit.image} style={{ width: 210, height: 210 }} />
			</View>
			<View className="ml-4 my-4">
				<Text className="font-bold text-xl text-white shadow">{fruit.name}</Text>
				<Text className="font-bold text-lg text-white shadow tracking-wide  ">$ {fruit.price}</Text>
			</View>
		</View>
	);
}

const card = StyleSheet.create({
	img: { shadowRadius: 40, shadowOffset: { width: 0, height: 50 }, shadowOpacity: 0.6 },
	bg: { backgroundColor: "rgba(255,255,255,0.3)" },
});
