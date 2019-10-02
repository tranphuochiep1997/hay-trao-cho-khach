/**
 * @api {POST} {domain}/customer-coming Notify app customer is coming
 * @apiName  Notify app customer is coming
 * @apiDescription  Notify app customer is coming
 * @apiGroup Customers
 *
 * @apiParam {string} id User id generated from AI
 * @apiParam {String=MALE,FEMALE} gender
 * @apiParam {String} emotion
 * @apiParam {Boolean=true,false} unknown user is new or not
 * @apiParamExample Example:
 * {
 *	"id": "1",
 *	"gender": "MALE",
 *	"emotion": "happy",
 *	"unknown": false
 * }
 *
 *
 * @apiSuccessExample Success Response:
 * {
 *   "id": "1",
 *   "count": 25,
 *   "gender": "MALE",
 *   "emotion": "happy"
 * }
 *
 */
