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
	classname : "mask hide",
	tar:"div",
	target:".warper"
});

// $(".mask-box").drag(30);

//弹出事件
function show(trigger,target){
	$(trigger).click(function(){
		console.log(1);
		$(target.child).removeClass("hide").addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			// $(target.child).removeClass().addClass("hide");
		});
		$(target.parent).removeClass("hide").fadeIn(500);
	})
}
show("#show_but",{
	child:".mask-box",
	parent:".mask"
})
//点击关闭事件

function shutdown(trigger,target){
	$(trigger).click(function(){
		$(target.child).addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(target.child).removeClass().addClass("mask-box hide");
		});
		$(target.parent).fadeOut(1000);
	})
}

shutdown("#close-login",{
	child:".mask-box",
	parent:".mask"
});
//模拟placeHolder
function placeholder(id,target){
	$(target).bind("input propertychange",function(){
		if($(target).val() == ""){
			$(id).addClass("show");
		}else{
			$(id).removeClass("show").addClass("hide");
		}
	})
}
placeholder("#username-label","#username");
placeholder("#password-label","#password");
