
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name ); // ?

// // Output: Due volte Double Cheese burger, 1 oggetto


// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?

// Output: Salad, 2 oggetti

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// Output: 3 oggetti

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

// Output: per clonare chef il metodo migliore è lo spread operator, per clonare restaurant structuredClone


// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // Chef Hyur
// console.log(secondBurger.maker.name); // Chef Hyur
// console.log(hamburger.maker.restaurant.name); // Hyur's II
// console.log(secondBurger.maker.restaurant.name); // Hyur's II

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

// Output: il metodo migliore per l'oggetto chef è lo spread operator perché al suo interno ci sono delle funzioni 