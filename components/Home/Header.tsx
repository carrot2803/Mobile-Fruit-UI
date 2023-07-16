import { Bars3CenterLeftIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";

export default function Header() {
	const nav: any = useNavigation();
	return (
		<View className="navbar mx-5 flex-row justify-between items-center">
			<Bars3CenterLeftIcon size="30" color="black" />
			<TouchableOpacity onPress={() => nav.navigate("Cart")} className="p-2 rounded-xl bg-orange-100">
				<ShoppingCartIcon size="25" color="orange" />
			</TouchableOpacity>
		</View>
	);
}
