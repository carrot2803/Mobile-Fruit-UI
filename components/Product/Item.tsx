import { View, SafeAreaView, Image } from "react-native";
import { dataProps } from "../../constants";
import Bkbtn from "../Bkbtn";

export default function Item({ fruit }: { fruit: dataProps }) {
	return (
		<SafeAreaView>
			<Bkbtn btnStyle={"rounded-xl"} iconStyle={"white"} />
			<View className="flex-row justify-center mt-10 pb-10" style={[i.img, { shadowColor: fruit.shadow }]}>
				<Image source={fruit.image} style={{ width: 290, height: 290 }} />
			</View>
		</SafeAreaView>
	);
}

const i = { img: { shadowRadius: 50, shadowOffset: { width: 0, height: 50 }, shadowOpacity: 0.7 } };
