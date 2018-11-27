 // 引用express
    var express = require("express");
    var app = express();
    app.listen(3030);


    var cc;
    var n = 1;
    // 上传配置的必须的参数
    var multer = require('multer');
    var storage = multer.diskStorage({
        //设置上传后文件路径，uploads文件夹会自动创建。
        destination: function(req, file, cb) {
            cb(null, 'public/images')
        },
        //给上传文件重命名，获取添加后缀名
        filename: function(req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            //给图片加上时间戳格式防止重名名
            //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名

            cb(null, file.fieldname + '-' +n+ "." + fileFormat[fileFormat.length - 1]);
            cc = "../images/"+file.fieldname + '-' +n+ "." +  fileFormat[fileFormat.length - 1];
            n++;
        }
    });

    var upload = multer({
        storage: storage
    });


var express = require('express');
var router = express.Router();


router.post('/touxiang',upload.single('userimg'), function(req, res, next) {
    // console.log(cc)
    res.send(cc);
    cc="";
});



module.exports = router;
