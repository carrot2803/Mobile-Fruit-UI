import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, categories } from "../../constants";
import { useState } from "react";

export default function Category() {
	const [active, setActive] = useState("Oranges");
	return (
		<View className="mt-4">
			<Text style={{ color: COLORS.text }} className="text-2xl tracking-widest font-medium ml-5">
				Seasonal
			</Text>
			<Text style={{ color: COLORS.text }} className="text-3xl font-semibold ml-5">
				Fruits and Vegetables
			</Text>
			<ScrollView className="mt-8 px-5" horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					let focus = category == active;
					let txt = `text-xl   ${focus ? " font-bold" : ""}`;
					let btn = `mr-8 relative rounded-2xl`;
					return (
						<TouchableOpacity onPress={() => setActive(category)} key={index} className={btn}>
							<Text style={{ color: COLORS.text }} className={txt}>
								{category}
							</Text>
							{focus ? <Text className="font-extrabold -mt-3 ml-2 text-orange-400">__ _</Text> : null}
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}
