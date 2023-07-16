export interface dataProps {
	name: string;
	price: string;
	stars: number;
	desc: string;
	shadow: string;
	image: any;
	color: (opacity: any) => string;
}

export interface cartProps {
	name: string;
	price: string;
	qty: number;
	desc: string;
	shadow: string;
	image: any;
	color: (opacity: any) => string;
}

export const categories: string[] = ["Oranges", "Bananas", "Pineapple", "Apple", "Cherry"];

export const Data: dataProps[] = [
	{
		name: "Australian Orange",
		price: "12.30",
		stars: 4,
		desc: "Sweet and juicy",
		shadow: "orange",
		image: require("../assets/imgs/orange.png"),
		color: (opacity: any) => `rgba(251, 216, 146, ${opacity})`,
	},
	{
		name: "Flesh Nectari",
		shadow: "red",
		price: "12",
		stars: 3,
		desc: "Sweet and juicy",
		image: require("../assets/imgs/peach.png"),
		color: (opacity: any) => `rgba(255, 170, 157, ${opacity})`,
	},

	{
		name: "Black Grapes",
		price: "40",
		stars: 4,
		desc: "Sweet and juicy",
		shadow: "purple",
		image: require("../assets/imgs/grapes.png"),
		color: (opacity: any) => `rgba(214, 195, 246, ${opacity})`,
	},

	{
		name: "Red Grapefruit",
		price: "30",
		stars: 4,
		desc: "Sweet and juicy",
		shadow: "red",
		image: require("../assets/imgs/redOrange.png"),
		color: (opacity: any) => `rgba(255, 163, 120, ${opacity})`,
	},
	{
		name: "Green Apple",
		price: "10.5",
		stars: 4,
		desc: "Sweet and juicy",
		shadow: "green",
		image: require("../assets/imgs/greenApple.png"),
		color: (opacity: any) => `rgba(139, 243, 139, ${opacity})`,
	},
];

export const cartData: cartProps[] = [
	{
		name: "Australian Orange",
		price: "12.30",
		qty: 4,
		desc: "Sweet and juicy",
		shadow: "orange",
		image: require("../assets/imgs/orange.png"),
		color: (opacity: any) => `rgba(251, 216, 146, ${opacity})`,
	},
	{
		name: "Flesh Nectari",
		shadow: "red",
		price: "12",
		qty: 3,
		desc: "Sweet and juicy",
		image: require("../assets/imgs/peach.png"),
		color: (opacity: any) => `rgba(255, 170, 157, ${opacity})`,
	},

	{
		name: "Black Grapes",
		price: "40",
		qty: 2,
		desc: "Sweet and juicy",
		shadow: "purple",
		image: require("../assets/imgs/grapes.png"),
		color: (opacity: any) => `rgba(214, 195, 246, ${opacity})`,
	},
	{
		name: "Green Apple",
		price: "10.5",
		qty: 2,
		desc: "Sweet and juicy",
		shadow: "green",
		image: require("../assets/imgs/greenApple.png"),
		color: (opacity: any) => `rgba(139, 243, 139, ${opacity})`,
	},
];
