define(['template'],function(){
	function request(){
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apiyuding.php",
			success : function(data){
				var data = JSON.parse(data);
//				console.log(data);
				var html = baidu.template('tpl',data);
				$('.order_main_body').html(html);
				
				del();
				
				lazyload();
				load();
			}
		});
	};
	
	//懒加载
	function lazyload(){
		var $box = $('.order_main_body');
		var imgs = $box.find('[data-src]');

		$box.on('scroll',function(){
			load();
		})
	};
	
	function load(){
		var $box = $('.order_main_body');
		var imgs = $box.find('[data-src]');
		
		for(var i=0; i<imgs.length; i++){
			if($(imgs[i]).offset().top < $box.height()+100){    //不能用for in
				$(imgs[i]).attr('src',$(imgs[i]).attr('data-src'));
			}			
		}
	}
	//点击切换
	$('#content').on('click','.order_classify li a',function(){
		$(this).addClass('active');
		$('.order_classify li a').not($(this)).removeClass('active');
	})
	
	//价格相同，去重
	function del(){
		var $now_price = $('.now_price');
		var $pre_price = $('.pre_price');
		var $now = $('.now_price span');
		var $pre = $('.pre_price span');
		for(var i=0; i< $now.length; i++){			
			if($now.eq(i).text() == $pre.eq(i).text()){
				$pre_price.eq(i).hide();
			}
		}
	}
	
	return{
		request : request
	};
});


