<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx91a295c76b5c4a40", "10b4ed90c02fc6157051a386a6123f46");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width"/>
		<link rel="stylesheet" href="public/css/index.css" />
		<link rel="stylesheet" href="public/css/location.css"/>
		<link rel="stylesheet" href="public/css/swiper-3.4.1.min.css" />
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<title>爱鲜蜂</title>
	</head>
	<body>
		<sectioin id="content"></sectioin>
		<footer>
			<a href="#home" class="home" num='0'>
				<figure>
					<div></div>
					<figcaption>首页</figcaption>
				</figure>
			</a>
			
			<a href="#send" class="send" num='1'>
				<figure>
					<div></div>
					<figcaption>闪送超市</figcaption>
				</figure>
			</a>
			
			<a href="#order" class="order" num='2'>
				<figure>
					<div></div>
					<figcaption>新鲜预定</figcaption>
				</figure>
			</a>
			
			<a href="#car" class="car" num='3'>
				<figure>
					<div></div>
					<figcaption>购物车</figcaption>
				</figure>
			</a>
			
			<a href="#my" class="my" num='4'>
				<figure>
					<div></div>
					<figcaption>我的</figcaption>
				</figure>
			</a>
		</footer>
		<div class="location">
			<div class="content">
				<figure>
					<img id="img" src="public/img/dw.png"/>
					<figcaption>定位中</figcaption>
				</figure>
			</div>
		</div>
		<script src="public/lib/require.js" data-main="main"></script>
		
			
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=e363776d05cbe0a3e702b6cef53008ed"></script>
		<script type="text/javascript">
		window.onload = function(){
			mapFn();
		}
		
		wx.config({
		    debug: true,
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp: '<?php echo $signPackage["timestamp"];?>' ,
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		    signature: '<?php echo $signPackage["signature"];?>',
		    jsApiList: [
		    	'scanQRCode',
		    	'getLocation',
		    	'openLocation'
		    ]
		});
		
		function scanFn(){
			wx.scanQRCode({
		    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		    success: function (res) {
		    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
			}
		  })
		};
		
		function mapFn(){
			
			wx.getLocation({
		    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success: function (res) {
		        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		    }
		  })
			 
			 AMap.service('AMap.Geocoder',function(){//回调函数
			    //实例化Geocoder
			    geocoder = new AMap.Geocoder({
			        city: "010"//城市，默认：“全国”
			    });
			    //TODO: 使用geocoder 对象完成相关功能
			    //逆地理编码
				var lnglatXY=[longitude, latitude];//地图上所标点的坐标
				geocoder.getAddress(lnglatXY, function(status, result) {
				    if (status === 'complete' && result.info === 'OK') {
				       //获得了有效的地址信息:
				       //即，result.regeocode.formattedAddress
				       var adress = document.querySelector('.adress');
				       var h = adress.querySelector('h1');
				       h.innerText = result.regeocode.formattedAddress;
				       var str = result.regeocode.formattedAddress.slice(9,13);
				       h.innerHTML = str;
				       
				    }else{
				       //获取地址失败
				    }
				}); 
			});
			
			

		}
		
		
	</script>
		
	</body>
</html>
