import { View, StyleSheet } from "react-native";
import { Item, Details, Lorem, Add } from "../components/Product";

export default function ProductScreen(props: { route: { params: any } }) {
	let fruit = props.route.params;
	return (
		<View className="flex-1" style={{ backgroundColor: fruit.color }}>
			<Item fruit={fruit} />
			<View style={s.b} className="bg-orange-50 flex-1 px-6 space-y-2">
				<Details name={fruit.name} desc={fruit.desc} />
				<Lorem stars={fruit.stars} />
				<Add fruit={fruit} />
			</View>
		</View>
	);
}

const s = StyleSheet.create({ b: { borderTopLeftRadius: 45, borderTopRightRadius: 45 } });
