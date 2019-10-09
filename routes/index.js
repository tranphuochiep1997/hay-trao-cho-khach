const express = require('express');
const {db, admin} = require('../config/firebase');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
		res.redirect('/readme');
});

router.post('/customer-coming', async (req, res) => {
		try {
				let { id, gender, emotion } = req.body;
				const customersRef = db.collection('Customers');
				let aCustomerRef = {};
				if (id) {
						aCustomerRef = customersRef.doc(id);
						// Increase count for known user
						await aCustomerRef.update({
								count: admin.firestore.FieldValue.increment(1)
						});
				} else {
						// Create new collection when user is unknown
						aCustomerRef = await customersRef.add({
								gender,
								count: 1
						});
						id = aCustomerRef.id;
				}

				// Get user data from database
				let customer = await aCustomerRef.get();
				customer = customer.data();
				gender = customer.gender;
				let count = customer.count;

				const productsRef = db.collection('Products');
				const products = await productsRef
						.where(`tag.${gender}`, '=', true)
						.where(`tag.${emotion}`, '=', true)
						.limit(3)
						.get();
				let recommends = [];
				if (!products.empty) {
						products.forEach(product => {
								product = product.data();
								delete product.tag;
								recommends.push(product)
						});
				}
				const response = {
						id,
						gender,
						count,
						emotion,
						recommends
				};
				const io = req.app.get('io');
				// Send data message to client
				io.emit('customer-coming', response);

				res.json(response);
		} catch (e) {
				console.log(e);
				throw e;
		}
});

module.exports = router;
