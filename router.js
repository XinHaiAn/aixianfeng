define(['underscore','backbone'],function(_,backbone){
	var router = backbone.Router.extend({
		routes:{
			'home' : 'home',
			'send' : 'send',
			'order' : 'order',
			'car' : 'car',
			'my' : 'my'
		},
		
		home : function(){
			require(['text!home/home.html','home/js/home'],function(home,homeCtrl){
				$('#content').html(home);
				homeCtrl.request();
			})
		},
		
		send : function(){
			require(['text!send/send.html','send/js/send'],function(send,sendCtrl){
				$('#content').html(send);
				sendCtrl.tabFn();
				sendCtrl.request();
				
			})
		},
		
		order : function(){
			require(['text!order/order.html','order/js/order'],function(order,orderCtrl){
				$('#content').html(order);
				orderCtrl.request();
			})
		},
		
		car : function(){
			require(['text!car/car.html','car/js/car'],function(car,carCtrl){
				$('#content').html(car);
				carCtrl.request();
			})
		},
		
		my : function(){
			require(['text!my/my.html'],function(my){
				$('#content').html(my);
			})
		},
		
		initialize : function(){
			if(location.hash==''){
				location.hash = 'home';			
			}
			else{
				return;
			}
		}
	});
	var w = new router();
	//路由监听事件
	var arr1=[11,13,19,15,17];
	var arr2=[12,14,20,16,18];
	w.on('route',function(str){
		var num = $('.'+str).attr('num');
		//初始化背景
		for(var i = 0; i<arr1.length; i++){
			$('footer a div').eq(i).css({
			'background-image' : 'url(public/img/'+arr1[i] +'.png)'
		 })
		};
		//点击换背景
		$('.'+str+' div').css({
			'background-image' : 'url(public/img/'+arr2[num] +'.png)',
		}).addClass('animate').parent().parent().siblings().children().children('div').removeClass('animate');
	});
	
		window.onload = function(){
			mapFn();
		}
		
		$('#img').animate({
			'opacity' : 0
	    },1000,function(){
	    	$('.location').hide();
	    });
	
	
	backbone.history.start();
});