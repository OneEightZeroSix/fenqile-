var express = require('express');
var router = express.Router();
var db = require('../public/lib/mongodb.js');
var Cookie = require('../public/lib/cookie.js');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
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



//邮箱验证
router.post('/email', function(req, res, next) {
    // res.send("ok");
    console.log(req.body);
   	var nowemail = req.body.email
    function getRandomNum(min,max){
	    var randomNum = parseInt(Math.random()*(max-min+1))+min;
	    return randomNum;
	}
    var nowyzm = "";
    for(var i=0;i<4;i++){
    	nowyzm += getRandomNum(0,9).toString();
    }
    console.log(nowyzm);
    console.log(nowemail);
    
    const params = {
	  service: 'qq', // 设置服务
	  port: 465, // 端口
	  sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
	  auth: {
	    user: '532987966@qq.com', // 邮箱和密码
	    pass: 'uddrstkgvzuibghd'
	  }
	}

    // 邮件信息
	const mailOptions = {
	  from:'532987966@qq.com', // 发送邮箱
	  to:nowemail, // 接受邮箱
	  subject: '欢迎注册分期乐', // 标题
	  html: '<p>你好！</p><p>感谢你注册分期乐。</p><p>你的验证码是：<strong style="color: #ff4e2a;">'+nowyzm+'</strong></p><p>***该验证码5分钟内有效***</p><a href="http://localhost:3000/home">跳转首页</a>' // html 内容 
	}
    
    
	    // 发送邮件
	const transporter = nodemailer.createTransport(params)
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
	    res.send(-1)
	  }
	  res.send(nowyzm)
	})
})
   


module.exports = router;