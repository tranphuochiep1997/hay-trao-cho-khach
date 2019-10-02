const admin = require('firebase-admin');
const path = require('path');

let serviceAccount = require(path.join(__dirname, '../serviceAccount.json'));

admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

let db = admin.firestore();

module.exports = {
		db,
		admin
};
