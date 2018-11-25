//1.封装a-b的随机整数
//10-100=>parseInt(Math.random()*(100-10+1))+10; 
// a-b  parseInt(Math.random()*(b-a+1))+a
function getRandomNum(min,max){
    var randomNum = parseInt(Math.random()*(max-min+1))+min;
    return randomNum;
}

// 2.封装一个随机色 'rgb('+red+','+green+','+blue+')'
function getColor(){
    var red = getRandomNum(0,255);
    var green = getRandomNum(0,255);
    var blue = getRandomNum(0,255);
    return 'rgb('+red+','+green+','+blue+')';
}
// 3.阶乘
// 4。。。。。。
// 5.元素节点
var Element = {
    getElement : function(nodes){
        var eleNodes = [];
        for(var i=0;i<nodes.length;i++){
            if(nodes[i].nodeType == 1){
                eleNodes.push(nodes[i]);
            }
        }
        return eleNodes;//数组:所有的元素节点
    },
    getChildren: function(node){
        var childnodes = node.childNodes;
        return Element.getElement(childnodes);
    },
    getNextElement:function(){
        // 自己写
    },
    getPrevElement:function(){

    },
    insertAfter:function(){
        
    }

}


function getStyle(ele,key){
    if(window.getComputedStyle){
        
        return window.getComputedStyle(ele)[key];
    }else if( ele.currentStyle){
        return ele.currentStyle[key];
    }else{
        return ele.style[key];//内联样式
    }
}


function bind(ele,type,fn,isCapture){
    if(ele.addEventListener){
        return ele.addEventListener(type,fn,isCapture);
    }else if(ele.attachEvent){
        return ele.attachEvent("on"+type,fn);
    }else{
        return ele["on"+type] = fn;
    }
}

// cookie的操作：增改、删、查（获取）
var Cookie = {
    setCookie : function(name,value,date,path){
        var str = name+"="+value;
        if(date){
            str += "; expires="+date;
        }
        if(path){
            str += "; path="+path;
        }
        document.cookie = str;
    },
    getCookie : function(name){
        var cookies = document.cookie;//字符串
        if(cookies.length == 0){
            return "";
        }
        if(cookies.length > 0){
            cookiesArr = cookies.split("; ");
            for(var i=0;i<cookiesArr.length;i++){
                var arr = cookiesArr[i].split("=");
                if(arr[0] == name){
                    return arr[1];
                }
            }
        }
    },
    removeCookie : function(name,value,path){
        var d = new Date();
        d.setDate(d.getDate()-1);
        this.setCookie(name,value,d.toUTCString(),path);
    },
    clearCookie: function(){}
}
// forEach(function(){return })//注意



//参考步骤：透明度？？
// 1.开启定时器
//    备注: 事件开启定时器之前，一定要记得先清除已存在的定时器。
//      (0) 定时获取每个时间段的当前值  px deg   
//      (1) 动态获取速度,一般都会变成整数再运算。
//          * 若速度值为负值，Math.floor();若速度值为正值，Math.ceil()
//      (2) 把当前值加上速度进行改变
//      (3) 将改变后的值赋值给元素的样式
//  2.判断改变后的当前值大于目标值。判断肯定要放在赋值样式前。
//  3.透明度，在算速度前，对当前值、目标值(定时器外面)都乘于100。在赋值样式前，对当前值除以100
// function animate(ele,attr,target,time){
//     clearInterval(ele.timer);
//     target = attr == "opacity"? target*100 : target;
//     ele.timer = setInterval(()=>{
//         var current = getComputedStyle(ele)[attr];
//         // 提取单位,若存在单位，得到数组。若不存在单位，得到null
//         var unit = current.match(/[a-z]+$/);
//         unit = unit ? unit[0] : "";
//         current = parseFloat(current);
//         current = attr == "opacity"? current*100 : current;
//         // ===================
//         var speed = (target-current)/10; 
//         console.log(target,current,speed); 
//         speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
//         current += speed;
//         if(current == target){
//             clearInterval(ele.timer);
//         }
//         current = attr == "opacity"? current/100 : current;
//         ele.style[attr] = current + unit;
//     },time)
// }


//改进1：定时器的名字根据传进来的attr进行命名
//改进2: 传进来一个对象{attr:target;},拿到attr及target值
//注意：for循环是一个快速的过程，for循环里面有定时器。for循环早已经跑完了，才进入第一次定时器。所以此时传入定时器的attr是对象最后一个属性。
//解决方案：利用let的块级作用域
//解决方案：通过给函数传参，存储起来每一次的attr
// function animate(ele,obj,time){
//     for(let attr in obj){
//         let target = obj[attr];
//         let timer = attr + "Timer"; //ele.widthTimer   ele.heightTimer;
//         clearInterval(ele[timer]);
//         target = attr == "opacity"? target*100 : target;
//         // console.log(timer);
//         ele[timer] = setInterval(()=>{
//             var current = getComputedStyle(ele)[attr];
//             // 提取单位,若存在单位，得到数组。若不存在单位，得到null
//             var unit = current.match(/[a-z]+$/);
//             unit = unit ? unit[0] : "";
//             current = parseFloat(current);
//             current = attr == "opacity"? current*100 : current;
//             // ===================
//             var speed = (target-current)/10; 
//             console.log(target,current,speed); 
//             speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
//             current += speed;
//             if(current == target){
//                 clearInterval(ele[timer]);
//             }
//             current = attr == "opacity"? current/100 : current;
//             ele.style[attr] = current + unit;
//         },time)
//     }
// }

//改进3：允许用户咋动画完成后，实现一些功能。使用回调函数。记得封装者只负责执行即可。
//改进4：在所有属性动画完毕后，才执行fn。用count变量存放一共要执行多少个attr的动画。当每次清除定时器，count--。在count--后判断，若count的值为0，说明动画完毕，再执行fn（）
function animate(ele,obj,time,fn){
    var count = 0;
    for(var attr in obj){
        singleAnimate(attr);
        count++;
    }
    function singleAnimate(attr){
        var target = obj[attr];
        var timer = attr + "Timer"; 
        clearInterval(ele[timer]);
        target = attr == "opacity"? target*100 : target;
        // console.log(timer);
        ele[timer] = setInterval(()=>{
            var current = getComputedStyle(ele)[attr];
            // 提取单位,若存在单位，得到数组。若不存在单位，得到null
            var unit = current.match(/[a-z]+$/);
            unit = unit ? unit[0] : "";
            current = parseFloat(current);
            current = attr == "opacity"? current*100 : current;
            // ===================
            var speed = (target-current)/10; 
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            current += speed;
            if(current == target){
                clearInterval(ele[timer]);
                count--;
            }
            if(count == 0){
                // if(typeof fn == "function"){
                //     fn();
                // }
                typeof fn == "function" && fn();
            }
            current = attr == "opacity"? current/100 : current;
            ele.style[attr] = current + unit;
        },time)
    }

}

function getType(val){
    return Object.prototype.toString.call(val).slice(8,-1);
}