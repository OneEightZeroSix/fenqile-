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


export default animate;