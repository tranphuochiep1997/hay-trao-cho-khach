/**
 * @api {POST} {domain}/customer-coming Notify app customer is coming
 * @apiName  Notify app customer is coming
 * @apiDescription  Notify app customer is coming
 * @apiGroup Customers
 *
 * @apiParam {string|null} id User id generated from AI, null for unknown
 * @apiParam {String=MALE,FEMALE} gender
 * @apiParam {String} emotion
 * @apiParamExample Example:
 * {
 *	"id": "1",
 *	"gender": "MALE",
 *	"emotion": "happy",
 * }
 *
 *
 * @apiSuccessExample Success Response:
 * {
 *	"id": "1",
 *	"gender": "MALE",
 *	"emotion": "happy",
 *	"recommends": [
 *	            {
 *           "name": "Milk tea",
 *           "picture": "https://i1.wp.com/yummiestreetfood.com/wp-content/uploads/2017/03/Yummie-Street-Food-Tea-4.jpg?fit=1920%2C1080&ssl=1"
 *       }
 *	]
 * }
 *
 */
