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
//阻止表单默认提交
$("form").submit(function(e){
	e.preventDefault();
})
function zzw(util) {
	//如果已登录，隐藏
	util.setCookie("status", "1", 4000)
	if(util.getCookie("isLogin")) {
		$(".header").hide();
	} else {
		$.modal({
			classname: "mask",
			tar: "div",
			target: ".warper"
		});
	}
}
$.modal({
	classname : "mask",
	tar:"div",
	target:".warper"
});
//$.modal({
//	classname : "z",
//	tar:"div",
//	target:".warper"
//})
// $(".mask-box").drag(30);