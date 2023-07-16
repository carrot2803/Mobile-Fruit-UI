import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";

export default function Bkbtn({ btnStyle, iconStyle }: { btnStyle: string; iconStyle: string }) {
	const nav: any = useNavigation();
	return (
		<View className="flex-row justify-start mx-5">
			<TouchableOpacity onPress={() => nav.goBack()} style={bk.s} className={btnStyle}>
				<ChevronLeftIcon size="30" color={iconStyle} />
			</TouchableOpacity>
		</View>
	);
}

const bk = { s: { backgroundColor: "rgba(255,255,255,0.2)" } };
