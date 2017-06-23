
$.ajax({
	type:"get",
	url:"js/index_wrapper.json",
	success: function(data){
		var str = template("temp_wrapper",{list:data});
		$(".index_wrapper_box").html(str);
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,
			loop : true,
			pagination: '.swiper-pagination'
		}) 
	}
});