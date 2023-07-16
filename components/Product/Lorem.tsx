import { View, Text } from "react-native";
// @ts-ignore
import StarRating from "react-native-star-rating";
import { COLORS } from "../../constants";

export default function Lorem({ stars }: { stars: number }) {
	return (
		<>
			<StarRating
				disabled={true}
				starSize={18}
				containerStyle={{ width: 120 }}
				maxStars={5}
				rating={stars}
				emptyStarColor="lightgray"
				fullStar={require("../../assets/imgs/fullStar.png")}
			/>
			<View style={{ height: 165 }}>
				<Text style={{ color: COLORS.text }} className="tracking-wider py-3 mt-5">
					Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a bad galley of
					type and scrambled it to make a type specimen book. It has survived not only five centuries, but
					also the leap into electronic wisa typesetting.
				</Text>
			</View>
		</>
	);
}
