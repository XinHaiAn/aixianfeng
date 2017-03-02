define(['swiper','template'],function(){
	function request(){
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apihome.php",
			success : function(data){
				var slider = JSON.parse(data).data.slide;
				var menus ={
					menu:JSON.parse(data).data.menu
				}
				console.log(menus)
				var html = '';
				for(var i=0; i<slider.length; i++){
					html += '<div class="swiper-slide"><img src="'+ slider[i].activity.img +'"/></div>';
				}
				$('#banner').html(html);
				swiperFn();
				
				var htmls = baidu.template('tpl',menus);
				$('.classify').html(htmls);
				
				seckFn();
			}
		});
	}
	
	function swiperFn(){
		var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay : 1000,
	    autoplayDisableOnInteraction:false
	   }) 
	}
	
	function seckFn(){
		$('#content').on('click','.classify a:nth-child(2)',function(){
				location.href = 'home/seckkill.html';
			})
		}
	
	return{
		request : request
	}
});


