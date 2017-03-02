$.ajax({
	type:"get",
	url:"http://h5.yztctech.net/api/axf/apimiaosha.php",
	success : function(data){
		var data = JSON.parse(data);
//		console.log(data);
		var html = baidu.template('tplKill',data);
		$('.detail').html(html);
		
		check();
	}
});

function check(){
	var texts = $('figcaption div');
	for(var i=0; i<texts.length; i++){
		var str = texts.eq(i).text();
		var re = /[1-9]\d*\.\d*[\u4e00-\u9fa5]/;
		var str1 = str.match(re);
		if(str1){
			texts.eq(i).text(str1+'抢购').css('fontWeight','bold');			
		}else{
			texts.eq(i).text(texts.eq(i).text());
		}		
	}
}
