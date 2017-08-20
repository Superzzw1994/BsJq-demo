//工具类
var util = {
	//操作cookie
	//设置cookies
    setCookie: function (key, value, t) {
        var odate = new Date();
        odate.setDate(odate.getDate() + t);
        document.cookie = key + "=" + encodeURI(value) + ";expires=" + odate.toGMTString();
    },
    //获取cookies
    getCookie: function (key) {
        var arr1 = document.cookie.split("; ");
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split("=");
            if (arr2[0] == key) {
                return decodeURI(arr2[1]);
            }
        }
    },
    //删除cookies
    removeCookie: function (key) {
        this.setCookie(key, "", -1);

    }
    //操作cookie结束
}
