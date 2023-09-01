// // [{ id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
// // { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
// // { id: 'A617', name: 'Mirinda', category: 'Soft Drink', price: 20, quantity: 20 },
// // { id: 'B003', name: 'Sprite', category: 'Soft Drink', price: 16, quantity: 5 },
// // { id: 'B225', name: 'Minute Maid', category: 'Soft Drink', price: 25, quantity: 12 },
// // { id: 'A742', name: '5Star', category: 'Chocloate', price: 10, quantity: 3 },
// // { id: 'B388', name: 'Appy', category: 'Soft Drink', price: 35, quantity: 9 },
// // { id: 'A899', name: 'Gems', category: 'Chocloate', price: 12, quantity: 11 },
// // { id: 'B635', name: 'KitKat', category: 'Chocloate', price: 15, quantity: 7 },
// // { id: 'B408', name: 'Perk', category: 'Chocloate', price: 8, quantity: 15 },
// // { id: 'A354', name: 'Dairy Milk', category: 'Chocloate', price: 30, quantity: 4 }];
const typeOfProduct = document.querySelector(".typeOfProduct");
const listOfProducts = document.querySelector(".listOfProducts");
const infoOfProducts = document.querySelector(".infoOfProducts");
const orderContainer = document.querySelector(".orderContainer");
const p = document.getElementsByTagName('p');
const orderedButton = document.querySelector('.ordered');


class Product {



	constructor({ id, name, category, price, quantity }) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.firstColumn();
	}

	//	constructor({ id, name, category, price, quantity }) {

	// 		this.id = id;

	// 		this.name = name;

	// 		this.category = category;

	// 		this.price = price;

	// 		this.quantity = quantity;

	// 		this.fistColumn();

	// 	}

	// fistColumn() {

	// 	var paragraph = document.createElement("p");
	// 	paragraph.textContent = this.category;
	// 	typeOfProduct.appendChild(paragraph);

	// 	var self = this;

	// 	paragraph.addEventListener('click', function () {
	// 		self.displayProductsByCategory(self.category);
	// 	});

	// 	return `Id ${this.id} Name ${this.name} Category ${this.category} Price ${this.price} ${this.quantity}`;
	// }

	fistColumn() {


		let paragraph = document.createElement("p");

		paragraph.textContent = this.category;
		const self = this;

		paragraph.addEventListener('click', () => {

			displayProductsByCategory(self.category);

		});

		typeOfProduct.appendChild(paragraph);

	}



	displayProductsByCategory() {
		listOfProducts.innerHTML = 'List of products://';

		for (const product of products) {
			if (product.category === category) {
				const productInfo = document.createElement("p"); // <p> </p>
				productInfo.textContent = product.name;
				listOfProducts.appendChild(productInfo);


				productInfo.addEventListener('click', function () {
					infoOfProducts.innerHTML = 'Product info:';
					let allInfo = document.createElement("p");
					let button = document.createElement("button");
					button.textContent = "Buy";
					allInfo.textContent = `${product.id} ,${product.name}, ${product.category}, ${product.price}, ${product.quantity}`;
					infoOfProducts.appendChild(allInfo);
					infoOfProducts.appendChild(button);
					button.addEventListener('click', function () {

						alert("Product is bought");

						infoOfProducts.innerHTML = 'Product info:';

						listOfProducts.innerHTML = 'List of products:';

						const currentTime = new Date();
						localStorage.setItem(currentTime, product.price);

						Product.orderInfo();
					})
				});
			}
		}
	}

	// displayProductsByCategory() {

	// 	this.listOfProducts.innerHTML = "List of products://";

	// 	let listOfProductByCurrentCategory = productByCategory[this.category];

	// 	for (const product of listOfProductByCurrentCategory) {

	// 		const productInfo = document.createElement("p");

	// 		productInfo.textContent = product.name;

	// 		this.listOfProducts.appendChild(productInfo);

	// 		productInfo.addEventListener('click', () => {

	// 			this.infoOfProducts.innerHTML = "Product info:";

	// 			let allInfo = document.createElement("p");

	// 			let button = document.createElement("button");

	// 			button.textContent = "Buy";

	// 			allInfo.textContent = `${product.id} ,${product.name}, ${product.category}, ${product.price}, ${product.quantity}`;

	// 			this.infoOfProducts.appendChild(allInfo);

	// 			this.infoOfProducts.appendChild(button);

	// 			button.addEventListener('click', () => {

	// 				alert("Product is bought");

	// 				this.infoOfProducts.innerHTML = "Product info:";

	// 				this.listOfProducts.innerHTML = "List of products:";

	// 				const currentTime = new Date();

	// 				localStorage.setItem(currentTime, product.price);

	// 				Product.orderInfo();

	// 			});

	// 		});

	// 	}

	// }



	static orderInfo() {

		let orderContainer = document.querySelector(".orderContainer");

		orderContainer.textContent = '';

		for (let i = 0; i < localStorage.length; i++) {

			let key = localStorage.key(i);

			orderContainer.textContent += `${key}: ${localStorage.getItem(key)}`;

			console.log(`${key}: ${localStorage.getItem(key)}`);

		}
	}

	// 	static orderInfo() {

	// 		let orderContainer = document.querySelector(".orderContainer");

	// 		orderContainer.textContent = '';

	// 		for (let i = 0; i < localStorage.length; i++) {

	// 			let key = localStorage.key(i);

	// 			orderContainer.textContent += `${key}: ${localStorage.getItem(key)}`;

	// 			console.log(`${key}: ${localStorage.getItem(key)}`);

	// 		}

	// 	}

	// }


}
// sorry for govnocode :)
const products = [
	new Product('1', 'Pepsi', 'Soft Drink', 15, 2),
	new Product('2', 'Coke', 'Soft Drink', 10, 8),
	new Product('3', 'Perk', 'Chocloate', 8, 15),
	new Product('4', 'Dairy Milk', 'Chocloate', 30, 4),
	new Product('5', 'Gems', 'Chocloate', 12, 11)
];

// хвала метаниту
for (const product of products) {
	product.fistColumn();
}

// function orderInfo() {
// 	typeOfProduct.innerHTML = 'In cart';

// 	for (let i = 0; i < localStorage.length; i++) {
// 		let key = localStorage.key(i);

// 		let productCategory = document.createElement("p");
// 		productCategory.textContent = `${key}: ${localStorage.getItem(key)}`;
// 		typeOfProduct.appendChild(productCategory);
// 		console.log(`${key}: ${localStorage.getItem(key)}`);
// 		productCategory.addEventListener('click', function () {
// 			let mainInfo = document.createElement("p");

// 			// for (let element of products) {
// 			// 	element.firstColumn();
// 			// }
// 			mainInfo.textContent = products.getInfo();
// 			listOfProducts.appendChild(mainInfo);


// 		})
// 	}
// }



//888888888888888888888888888888888888888888888888888888888888//
// const apiProduct = [

// 	{ id: "A441", name: "Pepsi", category: "Soft Drink", price: 15, quantity: 2 },

// 	{ id: "B234", name: "Coke", category: "Soft Drink", price: 10, quantity: 8 },

// 	{

// 		id: "A617",

// 		name: "Mirinda",

// 		category: "Soft Drink",

// 		price: 20,

// 		quantity: 20,

// 	},

// 	{

// 		id: "B003",

// 		name: "Sprite",

// 		category: "Soft Drink",

// 		price: 16,

// 		quantity: 5,

// 	},

// 	{

// 		id: "B225",

// 		name: "Minute Maid",

// 		category: "Soft Drink",

// 		price: 25,

// 		quantity: 12,

// 	},

// 	{ id: "A742", name: "5Star", category: "Chocloate", price: 10, quantity: 3 },

// 	{ id: "B388", name: "Appy", category: "Soft Drink", price: 35, quantity: 9 },

// 	{ id: "A899", name: "Gems", category: "Chocloate", price: 12, quantity: 11 },

// 	{ id: "B635", name: "KitKat", category: "Chocloate", price: 15, quantity: 7 },

// 	{ id: "B408", name: "Perk", category: "Chocloate", price: 8, quantity: 15 },

// 	{

// 		id: "A354",

// 		name: "Dairy Milk",

// 		category: "Chocloate",

// 		price: 30,

// 		quantity: 4,

// 	},

// ];


// let productByCategory = {};

// class Product {

// 	typeOfProduct = document.querySelector(".typeOfProduct");

// 	listOfProducts = document.querySelector(".listOfProducts");

// 	infoOfProducts = document.querySelector(".infoOfProducts");

// 	constructor({ id, name, category, price, quantity }) {

// 		this.id = id;

// 		this.name = name;

// 		this.category = category;

// 		this.price = price;

// 		this.quantity = quantity;

// 		this.fistColumn();

// 	}

// 	fistColumn() {

// 		if (!this.typeOfProduct.textContent.includes(this.category)) {

// 			let paragraph = document.createElement("p");

// 			paragraph.textContent = this.category;

// 			paragraph.addEventListener('click', () => {

// 				this.displayProductsByCategory(self.category);

// 			});

// 			this.typeOfProduct.appendChild(paragraph);

// 		}

// 	}

// 	displayProductsByCategory() {

// 		this.listOfProducts.innerHTML = "List of products://";

// 		let listOfProductByCurrentCategory = productByCategory[this.category];

// 		for (const product of listOfProductByCurrentCategory) {

// 			const productInfo = document.createElement("p");

// 			productInfo.textContent = product.name;

// 			this.listOfProducts.appendChild(productInfo);

// 			productInfo.addEventListener('click', () => {

// 				this.infoOfProducts.innerHTML = "Product info:";

// 				let allInfo = document.createElement("p");

// 				let button = document.createElement("button");

// 				button.textContent = "Buy";

// 				allInfo.textContent = `${product.id} ,${product.name}, ${product.category}, ${product.price}, ${product.quantity}`;

// 				this.infoOfProducts.appendChild(allInfo);

// 				this.infoOfProducts.appendChild(button);

// 				button.addEventListener('click', () => {

// 					alert("Product is bought");

// 					this.infoOfProducts.innerHTML = "Product info:";

// 					this.listOfProducts.innerHTML = "List of products:";

// 					const currentTime = new Date();

// 					localStorage.setItem(currentTime, product.price);

// 					Product.orderInfo();

// 				});

// 			});

// 		}

// 	}

// 	getInfo() {

// 		return `Id ${this.id} Name ${this.name} Category ${this.category} Price ${this.price} ${this.quantity}`;

// 	}

// 	static orderInfo() {

// 		let orderContainer = document.querySelector(".orderContainer");

// 		orderContainer.textContent = '';

// 		for (let i = 0; i < localStorage.length; i++) {

// 			let key = localStorage.key(i);

// 			orderContainer.textContent += `${key}: ${localStorage.getItem(key)}`;

// 			console.log(`${key}: ${localStorage.getItem(key)}`);

// 		}

// 	}

// }

// apiProduct.forEach((product) => {

// 	if (productByCategory[product.category]) {

// 		productByCategory[product.category].push(product);

// 	} else {

// 		productByCategory[product.category] = [product];

// 	}

// 	new Product(product);

// });