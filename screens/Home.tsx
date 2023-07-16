import { SafeAreaView } from "react-native";
import { Category, Footer, Header, Main } from "../components/Home";

export default function Home() {
	return (
		<SafeAreaView className="flex-1 bg-orange-50">
			<Header />
			<Category />
			<Main />
			<Footer />
		</SafeAreaView>
	);
}
