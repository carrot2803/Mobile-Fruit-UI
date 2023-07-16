import { View, Text } from "react-native";
import { COLORS, cartData } from "../../constants";
import CartCard from "./CartCard";

export default function List() {
	return (
		<View className="cart mx-5 flex-1">
			<Text style={{ color: COLORS.text }} className="text-2xl py-10">
				Your <Text className="font-bold">cart</Text>
			</Text>
			<View>
				{cartData.map((item, index) => (
					<CartCard fruit={item} key={index} />
				))}
			</View>
			<View className="flex-row justify-end py-4">
				<Text className="text-lg mt-40">
					Total price: <Text className="font-bold text-yellow-500">240.70</Text>
				</Text>
			</View>
		</View>
	);
}
