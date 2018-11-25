var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/exchange', function(req, res, next) {
	console.log(req.query.scur);
	var scur = req.query.scur;
	var tcur = req.query.tcur;
	request(`http://api.k780.com/?app=finance.rate&scur=${scur}&tcur=${tcur}&appkey=38330&sign=2c3ae914811ff6a1c3fc55b3fc8877ab`, (err, reponse, body) => {
		res.send(body);
	})
});

module.exports = router;