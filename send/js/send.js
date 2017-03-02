define(['jquery','template'],function(){
	function tabFn(){
		$('.send_left ul').on('click','li',function(){
			request($(this).text().trim());
			$(this).addClass('active').siblings().removeClass('active');
		})
	};
	
	function request(str){
		$.ajax({
			type:"get",
			data:{
				category : str || "热销榜"
			},
			url:"http://h5.yztctech.net/api/axf/apicategory.php",
			success : function(data){
				var result = JSON.parse(data);
//				console.log(result);
				var html = baidu.template('tpl',result);
				$('.send_right_body>ul').html(html);
				
				lazyload();
				load();
				
				addFn();
			}
		})
	};
	
	//懒加载
	function lazyload(){
		var $box = $('.send_right_body ul');
		var imgs = $box.find('[data-src]');

		$box.on('scroll',function(){
			load();
		})
	};
	
	function load(){
		var $box = $('.send_right_body ul');
		var imgs = $box.find('[data-src]');
		
		for(var i=0; i<imgs.length; i++){
			if($(imgs[i]).offset().top < $box.height()+100){    //top报错		undefined,不能用for  in
				$(imgs[i]).attr('src',$(imgs[i]).attr('data-src'));
			}			
		}
		
//		$.each(imgs,function(i){
//			if($(imgs[i]).offset().top < $box.height()+100){    //top报错		undefined
//				$(imgs[i]).attr('src',$(imgs[i]).attr('data-src'));
//			}
//		})
	};
	
	//增减
	function addFn(){
		$('.add_icon').on('click',function(){
			var num = parseInt($(this).siblings('.num').text());
			$(this).siblings('.num').text(num+1).show();
			$(this).siblings('.dec_icon').show();
	  });
	  
	  $('.dec_icon').on('click',function(){
			var num = parseInt($(this).siblings('.num').text());
			$(this).siblings('.num').text(num-1);
		if(num == 1){
			$(this).siblings('.num').hide();
			$(this).hide();
		}
	  });
	}
	
	
	return{
		request : request,
		tabFn : tabFn
	}
})