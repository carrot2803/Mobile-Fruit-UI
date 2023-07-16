import { View, Text, ScrollView } from "react-native";
import { Data } from "../../constants";
import Card from "./Card";

export default function Main() {
	return (
		<View className="carousel mt-8">
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{Data.map((fruit, index) => {
					return <Card fruit={fruit} key={index} />;
				})}
			</ScrollView>
		</View>
	);
}
