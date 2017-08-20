//拖拽
$.fn.extend({
	drag: function(para) {
		//para 吸附距离
		var disX = 0;
		var disY = 0;
		this.mousedown(function(e) {
			disX = e.clientX - ($(this).offset().left - $(document).scrollLeft());
			disY = e.clientY - ($(this).offset().top - $(document).scrollTop());
			$(document).mousemove(function(e) {
				var L = e.clientX - disX;
				var T = e.clientY - disY;
				if(L < para) {
					$(this).css('left', parseInt($(this).width()/2));
				} else if(L > $(window).width() - $(this).width() - para) {
					L = $(window).width() - $(this).width();
					$(this).css('left', L + parseInt($(this).width()/2));
					console.log("L" + L);
				} else {
					$(this).css('left', L + parseInt($(this).width()/2));
				}
				if(T < para) {
					$(this).css('top', parseInt($(this).height()/2));
				} else if(T > $(window).height() - $(this).height() - para) {
					T = $(window).height() - $(this).height();
					$(this).css('top', T + parseInt($(this).height()/2));
				} else {
					$(this).css('top', T + parseInt($(this).height()/2));
				}
			}.bind(this));

			return false;
		});
		$(document).mouseup(function() {
			$(this).off("mousemove");
		});

	}
});

//弹窗
(function() {
	function modal(para) {
		this.init();
	}
	modal.prototype.init = function() {
		console.log(1);
	}
	window.modal = modal;
})();


