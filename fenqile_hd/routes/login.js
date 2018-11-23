var express = require('express');
var router = express.Router();
var db = require('../public/lib/mongodb.js');
var Cookie = require('../public/lib/cookie.js');
var res;



// var mongo = require('../lib/mongo.js')


// 查看一条
router.post('/server', function(req, res, next) {
    // res.send("ok");
//  console.log(req.body);
    var phone = req.body.phonenumber;

    db.query(function(db) {
        db.collection("login").find({ phonenumber: phone }).toArray(function(err, docs) {
      		console.log(docs)
            if (docs.length > 0) {
                res.send('has');
            } else {
                res.send("no");
            }
        });
    })
});

// 插入
router.post('/adduser', function(req, res, next) {

    db.query(function(db) {
        db.collection("login").insertMany([req.body], function(err, result) {
            console.log("Inserted 1 document into the collection");
            res.send('success insert');
        });
    })
    // console.log(db);
});

// 查找所有
router.post('/userlist', function(req, res, next) {
    db.query(function(db) {
        db.collection("login").find({}).toArray(function(err, docs) {
            console.log(docs)
            res.json({
                login: docs
            });
        });
    });
});


// 删除用户
router.post('/deluser', function(req, res, next) {
    console.log(req.body.user);
    db.query(function(db) {
        db.collection("login").deleteOne({ "user": req.body.user }, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            console.log("success del");
        });
    });
});


// 更新数据库  
router.post('/updateuser', function(req, res, next) {
    var username = req.body.user;
    var beizhu = req.body.beizhu;
    var password = req.body.pass;

    console.log(username, beizhu, password)
    db.query(function(db) {
        db.collection("login").update({
            "user": username
        }, {
            $set: {
                beizhu: beizhu,
                pass: password
            }
        }, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
        })
        console.log("success update");
    });
})


// 查看一条
router.post('/registe', function(req, res, next) {
    // res.send("ok");
    console.log(req.body);

    var phone = req.body.phonenumber;
    var pass = req.body.password;
    // console.log(username, password, mobile, beizhu);
    // console.log(username,password,mobile,beizhu);
    db.query(function(db) {
        db.collection("login").find({ phonenumber: phone }).toArray(function(err, docs) {
            if (docs.length > 0) {
            	console.log(docs[0].password,pass)
                if(docs[0].password === pass){
                	let userinformation = {'username':docs[0].username,'phonenumber':docs[0].phonenumber}
                	res.send(userinformation);
                }else{
                	console.log(99)
                	res.send("err");
                }
            } else {
                res.send("no");
            }
        });
    })
});











module.exports = router;