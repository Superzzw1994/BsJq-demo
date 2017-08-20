//点击不再关注 设置cookie
$(document).ready(
	function() {
		if(util.getCookie("status")) {
			$(".header").hide();
		} else {
			$(".header-right").click(
				function() {
					zzw(util);
				}
			)
		}
	}
);

function zzw(util) {
	//如果已登录，隐藏
	util.setCookie("status", "1", 4000)
	if(util.getCookie("isLogin")) {
		console.log(true);
		$(".header").hide();
	} else {
		console.log(false);
		$(".header").drag();
	}
}

var zzw = new modal();
$(".mask-box").drag(30);