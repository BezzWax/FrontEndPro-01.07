const apiProduct = [

	{ id: "A441", name: "Pepsi", category: "Soft Drink", price: 15, quantity: 2 },

	{ id: "B234", name: "Coke", category: "Soft Drink", price: 10, quantity: 8 },

	{ id: "A742", name: "5Star", category: "Chocloate", price: 10, quantity: 3 },

	{ id: "B388", name: "Appy", category: "Soft Drink", price: 35, quantity: 9 },

	{ id: "A899", name: "Gems", category: "Chocloate", price: 12, quantity: 11 },

	{ id: "B635", name: "KitKat", category: "Chocloate", price: 15, quantity: 7 },

	{ id: "B408", name: "Perk", category: "Chocloate", price: 8, quantity: 15 },


];

const typeOfProduct = document.querySelector(".typeOfProduct");

const listOfProducts = document.querySelector(".listOfProducts");

const infoOfProducts = document.querySelector(".infoOfProducts");

let productByCategory = {};

class Product {


	constructor({ id, name, category, price, quantity }) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.fistColumn();

	}

	fistColumn() {

		if (!typeOfProduct.textContent.includes(this.category)) {

			let paragraph = document.createElement("p");

			paragraph.textContent = this.category;

			paragraph.addEventListener('click', () => {

				this.displayProductsByCategory(self.category);

			});

			typeOfProduct.appendChild(paragraph);

		}

	}

	displayProductsByCategory() {

		listOfProducts.innerHTML = "List of products://";

		let listOfProductByCurrentCategory = productByCategory[this.category];

		for (const product of listOfProductByCurrentCategory) {

			const productInfo = document.createElement("p");

			productInfo.textContent = product.name;

			listOfProducts.appendChild(productInfo);

			productInfo.addEventListener('click', () => {

				infoOfProducts.innerHTML = "Product info:";

				let allInfo = document.createElement("p");

				let button = document.createElement("button");

				button.textContent = "Buy";

				allInfo.textContent = `${product.id} ,${product.name}, ${product.category}, ${product.price}, ${product.quantity}`;

				infoOfProducts.appendChild(allInfo);

				infoOfProducts.appendChild(button);

				button.addEventListener('click', () => {

					alert("Product is bought");

					infoOfProducts.innerHTML = "Product info:";

					listOfProducts.innerHTML = "List of products:";

					const date = new Date();
					const day = String(date.getDate()).padStart(2, '0'); // Отримуємо день місяця та додаємо '0' спереду, якщо число < 10
					const month = String(date.getMonth() + 1).padStart(2, '0'); // Отримуємо місяць (нумерація з 0) та додаємо '0' спереду, якщо число < 10
					const hours = String(date.getHours()).padStart(2, '0'); // Отримуємо години та додаємо '0' спереду, якщо число < 10
					const minutes = String(date.getMinutes()).padStart(2, '0'); // Отримуємо хвилини та додаємо '0' спереду, якщо число < 10

					const currentTime = `${day}:${month}:${hours}:${minutes}`;

					localStorage.setItem(currentTime, product.id);

					//Product.orderInfo();

				});

			});

		}

	}

	// getInfo() {

	// 	return `Id ${this.id} Name ${this.name} Category ${this.category} Price ${this.price} ${this.quantity}`;

	// }

	static orderInfo() {

		let orderContainer = document.querySelector(".orderContainer");

		orderContainer.textContent = 'Cart:';
		let li = document.createElement('li');

		for (let i = 0; i < localStorage.length; i++) {
			let li = document.createElement('li');
			let key = localStorage.key(i);
			let value = localStorage.getItem(key);
			li.textContent = `${key}: ID ${value} `;

			for (const product of apiProduct) {
				if (product.id === value) {
					li.textContent += ` Name: ${product.name} Category: ${product.category} Price: ${product.price} Quantity: ${product.quantity}`;
				}
			}

			orderContainer.appendChild(li);
		}


	}

}

apiProduct.forEach((product) => {

	if (productByCategory[product.category]) {

		productByCategory[product.category].push(product);

	} else {

		productByCategory[product.category] = [product];

	}

	new Product(product);

});


