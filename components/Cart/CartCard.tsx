import { cartProps } from "../../constants";
import { View } from "react-native";
import Qtybtn from "./Qtybtn";
import Fruit from "./Fruit";

export default function CartCard({ fruit }: { fruit: cartProps }) {
	return (
		<View className="flex-row justify-between items-center space-x-5 mb-4">
			<Fruit fruit={fruit} />
			<Qtybtn qty={fruit.qty} />
		</View>
	);
}
