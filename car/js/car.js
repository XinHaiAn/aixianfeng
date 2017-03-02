define([],function(){
	function request(){
		//计算总钱数的方法
		calculate();
		function calculate(){
			var numArr = $('.detail .num');
			var priceArr = $('.detail .price');
			var money = 0;
			for(var i=0; i<numArr.length; i++){
				money += 			parseFloat(numArr.eq(i).text())*parseFloat(priceArr.eq(i).text());
			}
			
			$('.total_money').text(money.toFixed(1));
		}
		
		//添加数量事件
		$('#content').on('click','.add',function(){
			$(this).siblings('.num').text(parseInt($(this).siblings('.num').text())+1);
			calculate();
		});
		
		//减少数量事件
		$('#content').on('click','.dec',function(){
			$(this).siblings('.num').text(parseInt($(this).siblings('.num').text())-1);
			calculate();
			if($(this).siblings('.num').text() <= 0){
			$(this).parent().parent().hide();
		  }
		});
		
		//全选和全不选
		$('#content').on('click','.wrap',function(){
			if($('.all_select').prop('checked')){
				$('.all_select').prop('checked',!$('.all_select').prop('checked'));
				$('.wrap').css({
					'background-image' : 'none',
					'borderColor' : '#ccc'
				});
				$('.total_money').text(0);
				$('.draw').prop('checked',$('.all_select').prop('checked'));
			}else{
				$('.all_select').prop('checked',!$('.all_select').prop('checked'));
				$('.wrap').css({
					'background-image' : 'url(public/img/hgou.png)',
					'borderColor' : 'transparent'
				});
				$('.draw').prop('checked',$('.all_select').prop('checked'));
				calculate();
			};
			check();
			deliver();
		});
		
		$('#content').on('click','.wrap1',function(){
			if($(this).children('.draw').prop('checked')){
				$(this).children('.draw').prop('checked',!$(this).children('.draw').prop('checked'));
				$(this).css({
					'background-image' : 'none',
					'borderColor' : '#ccc'
				});
				$('.all_select').prop('checked',$(this).children('.draw').prop('checked'));
				check();
			}else{
				$(this).children('.draw').prop('checked',!$(this).children('.draw').prop('checked'));
				$(this).css({
					'background-image' : 'url(public/img/hgou.png)',
					'borderColor' : 'transparent'
				});
				$('.all_select').prop('checked',$(this).children('.draw').prop('checked'));
			}
		});

		//全选和全不选时的样式
		function check(){
			if($('.draw').prop('checked')){
				$('.wrap1').css({
					'background-image' : 'url(public/img/hgou.png)',
					'borderColor' : 'transparent'
				});
		    }else{
				$('.wrap1').css({
					'background-image' : 'none',
					'borderColor' : '#ccc'
				});
				
		    }
		};
		
		//满￥0起送
		function deliver(){
			if($('.total_money').text() == 0){
				$('.selected').text('满￥0起送').css('background','gray');
			}else{
				$('.selected').text('选好了').css('background','#ffd600');
			}
		};
		
		
	}
	return{
		request : request
	}
})