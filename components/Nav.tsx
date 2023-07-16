import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Product" component={Product} />
				<Stack.Screen name="Cart" component={Cart} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
