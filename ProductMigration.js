const { db } = require('./config/firebase');

(function () {
		const productsRef = db.collection('Products');

		Promise.all([
				productsRef.add({
						name: 'Tequila Sunrise Cocktail',
						picture: 'https://dishesdelish.com/wp-content/uploads/2018/06/Tequila-Sunrise-Cocktail-7.jpg',
						tag: {
								FEMALE: true,
								HAPPY: true
						}
				}),
				productsRef.add({
						name: 'Watermelon Cocktail',
						picture: 'https://spicysouthernkitchen.com/wp-content/uploads/Watermelon-Cocktail-4.jpg',
						tag: {
								FEMALE: true,
								SAD: true
						}
				}),
				productsRef.add({
						name: 'Wild Cocktail',
						picture: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/09/30/10/cocktails.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
						tag: {
								MALE: true,
								SAD: true
						}
				}),
				productsRef.add({
						name: 'Rum Punch',
						picture: 'https://www.crazyforcrust.com/wp-content/uploads/2018/08/Rum-Punch-5.jpg',
						tag: {
								FEMALE: true,
								HAPPY: true
						}
				}),
				productsRef.add({
						name: 'Cappucchino',
						picture: 'https://cdn-image.foodandwine.com/sites/default/files/1568907144/Coffee-National-Coffee-Day-FT-Blog0919.jpg',
						tag: {
								FEMALE: true,
								HAPPY: true
						}
				}),
				productsRef.add({
						name: 'Black Coffee',
						picture: 'https://specials-images.forbesimg.com/imageserve/1152308114/960x0.jpg?fit=scale',
						tag: {
								MALE: true,
								SAD: true,
								DEFAULT: true
						}
				}),
				productsRef.add({
						name: 'Milk Coffee',
						picture: 'https://www.slashgear.com/wp-content/uploads/2019/07/coffee_main_envat-1280x720.jpg',
						tag: {
								FEMALE: true,
								MALE: true,
								HAPPY: true,
								SAD: true
						}
				}),
				productsRef.add({
						name: 'Matcha Milkshake',
						picture: 'https://www.ohhowcivilized.com/wp-content/uploads/2014/07/0318-matcha-milkshake-7-720x720.jpg',
						tag: {
								FEMALE: true,
								MALE: true,
								HAPPY: true,
								SAD: true
						}
				}),
				productsRef.add({
						name: 'Milk tea',
						picture: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/719f1aa1501e443bb1856bce121e74d6/BFV41761_DeliciousAsianDrinks_FBFINAL_v5.jpg',
						tag: {
								FEMALE: true,
								MALE: true,
								NEUTRAL: true
						}
				}),
				productsRef.add({
						name: 'Lemon juice',
						picture: 'http://juicyspot.in/wp-content/uploads/2019/03/juicy_spot_lemon_juice-1.jpg',
						tag: {
								FEMALE: true,
								MALE: true,
								NEUTRAL: true
						}
				}),
				productsRef.add({
						name: 'Soda',
						picture: 'https://cafedidong.vn/wp-content/uploads/2019/01/CAFEDIDONG-SODA-BLUE-OCEAN-18a.jpg',
						tag: {
								FEMALE: true,
								MALE: true,
								NEUTRAL: true
						}
				}),
		])
				.then(() => console.log('DONE'))
				.catch(err => console.log(err));
})();
