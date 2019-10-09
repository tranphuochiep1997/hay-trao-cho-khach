const { db } = require('./config/firebase');

(function () {
		const productsRef = db.collection('Products');

		Promise.all([
				productsRef.add({
						name: 'Milk cafe',
						picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMFqkmt8YrLj77ugXqcF3zrhuguEFppiPidhee8O05kcHXLA9Kw',
						tag: {
								FEMALE: true,
								MALE: true,
								happy: true,
								sad: true
						}
				}),
				productsRef.add({
						name: 'Milk tea',
						picture: 'https://i1.wp.com/yummiestreetfood.com/wp-content/uploads/2017/03/Yummie-Street-Food-Tea-4.jpg?fit=1920%2C1080&ssl=1',
						tag: {
								FEMALE: true,
								happy: true
						}
				}),
				productsRef.add({
						name: 'Matcha freeze',
						picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEW7VhvguBmkCo5JxdjLVz663hum0oU9NakRjJh4nMMTeA2Aij',
						tag: {
								FEMALE: true,
								happy: true
						}
				})
		])
				.then(() => console.log('DONE'))
				.catch(err => console.log(err));
})();
