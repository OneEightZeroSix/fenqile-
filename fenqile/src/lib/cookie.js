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
            var cookiesArr = cookies.split("; ");
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

export default Cookie;