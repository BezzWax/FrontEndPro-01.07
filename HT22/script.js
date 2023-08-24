// [{ id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
// { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
// { id: 'A617', name: 'Mirinda', category: 'Soft Drink', price: 20, quantity: 20 },
// { id: 'B003', name: 'Sprite', category: 'Soft Drink', price: 16, quantity: 5 },
// { id: 'B225', name: 'Minute Maid', category: 'Soft Drink', price: 25, quantity: 12 },
// { id: 'A742', name: '5Star', category: 'Chocloate', price: 10, quantity: 3 },
// { id: 'B388', name: 'Appy', category: 'Soft Drink', price: 35, quantity: 9 },
// { id: 'A899', name: 'Gems', category: 'Chocloate', price: 12, quantity: 11 },
// { id: 'B635', name: 'KitKat', category: 'Chocloate', price: 15, quantity: 7 },
// { id: 'B408', name: 'Perk', category: 'Chocloate', price: 8, quantity: 15 },
// { id: 'A354', name: 'Dairy Milk', category: 'Chocloate', price: 30, quantity: 4 }];

const typeOfProduct = document.querySelector(".typeOfProduct");
const listOfProducts = document.querySelector(".listOfProducts");
const infoOfProducts = document.querySelector(".infoOfProducts");
const p = document.getElementsByTagName('p');

class Product {
	constructor(id, name, category, price, quantity) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
	}

	fistColumn() {
		var paragraph = document.createElement("p");
		paragraph.textContent = this.category;
		typeOfProduct.appendChild(paragraph);

		var self = this;

		paragraph.addEventListener('click', function () {
			self.displayProductsByCategory(self.category);
		});

		return `Id ${this.id} Name ${this.name} Category ${this.category} Price ${this.price} ${this.quantity}`;
	}

	displayProductsByCategory(category) {
		listOfProducts.innerHTML = 'List of products:';

		for (const product of products) {
			if (product.category === category) {
				const productInfo = document.createElement("p");
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
					})
				});
			}
		}
	}
}
// sorry for govnocode :)
const products = [
	new Product('A441', 'Pepsi', 'Soft Drink', 15, 2),
	new Product('B234', 'Coke', 'Soft Drink', 10, 8),
	new Product('B408', 'Perk', 'Chocloate', 8, 15),
	new Product('A354', 'Dairy Milk', 'Chocloate', 30, 4),
	new Product('A899', 'Gems', 'Chocloate', 12, 11)
];

// хвала метаниту
for (const product of products) {
	product.fistColumn();
}