const express = require('express');
const {db, admin} = require('../config/firebase');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
		res.redirect('/readme');
});

router.post('/customer-coming', async (req, res) => {
		try {
				const {id, unknown, gender, emotion} = req.body;
				const customerRef = db.collection('Customers').doc(id);
				if (unknown) {
						// Create new collection when user is unknown
						await customerRef.set({
								gender,
								count: 1
						});
				} else {
						// Increase count for known user
						await customerRef.update({
								count: admin.firestore.FieldValue.increment(1)
						});
				}

				// Get user data from database
				const customer = await customerRef.get();
				const response = {
						id,
						...customer.data(),
						emotion
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
