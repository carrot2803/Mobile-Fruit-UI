import { SafeAreaView } from "react-native-safe-area-context";
import Bkbtn from "../components/Bkbtn";
import { List, PayBtn } from "../components/Cart";

export default function Cart(_props: any) {
	return (
		<SafeAreaView className="flex-1 flex justify-between bg-orange-50">
			<Bkbtn btnStyle={"border border-gray-300 rounded-xl"} iconStyle={""} />
			<List />
			<PayBtn />
		</SafeAreaView>
	);
}
