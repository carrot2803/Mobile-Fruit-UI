import { View, Text, ScrollView } from "react-native";
import { COLORS, Data } from "../../constants";
import SalesCard from "./SalesCard";

export default function Footer() {
	return (
		<View className="mt-11 pl-5 space-y-1">
			<Text style={{ color: COLORS.text }} className="text-xl font-bold">
				Hot Sales
			</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: "visible" }}>
				{[...Data].reverse().map((fruit, index) => {
					return <SalesCard key={index} fruit={fruit} />;
				})}
			</ScrollView>
		</View>
	);
}
