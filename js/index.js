$(function(){
	var D = {
		loadBg: $('.con-ld-gif'),
		process : $('.process'),
	    main : $('.main')
	};
	var i = 0;
    var height = $(window).height();
	var load = {
	    imgs: [
			'irround-left.gif',
	        'irround-right.gif',
			
			'load-lf-bg.gif',
			
	        'brand-bg-left.png',
	        'brand-bg-right.gif',
	        'jnby.gif',
	        'right.gif',
	        'croquis.gif',
	        'jbj.gif',
	        'jnbyhome.gif',
	        'less.gif',
	        'pt.gif',
			
	        'rbg.gif',
	        'rbg1.gif',
	    ],
	    len : 0,
	    preLoadImg: function() { //图片预先加载
	        var t = this;
	        if (t.imgs.length) {
				var img = new Image();
				img.src ='./' + t.imgs.shift();
	            img.onload = function() {
	                var imgProg = t.imgs.length / t.len;
	                D.loadBg.css('height', t.imgs.length * (1 / t.len * height) );
	        		time([500],[
						function(){
							D.process.text( Math.ceil( (t.len - t.imgs.length) / t.len * 100) + '%' );
	        				t.preLoadImg();
	        			}
        			]);
				 };
	        }else{
		       	D.main.attr('src','default.html');
		       	time([1000, 1000],[
	       			function(){
						D.main.show();
	       				D.loadBg.parents('.page0').addClass('active');
					},
					function(){
						D.loadBg.parents('.page0').remove();
						autoPlay(document.getElementById('audio'));
	       			}
	       		],true);
	        };
	    },
	    init: function() {
	        this.len = this.imgs.length;
	       	this.preLoadImg();
	    }
	};
	function  autoPlay(audio){
		var ua = window.navigator.userAgent.toLowerCase(); 
		var isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';
		if(isWeixin){
			document.addEventListener('WeixinJSBridgeReady',function (){
				audio.play();
			});
			document.addEventListener('touchstart',function play(){
				audio.play();
			},false);
			audio.play();
		}else{
			document.addEventListener('touchstart',function play(){
				if(audio.paused){
					audio.play();
				};
			},false);
		};
	};
	function init() {
		setTimeout(function(){
			load.init(); // 必要图片预加载
			D.process.addClass('active');
		},3000);
		autoPlay(document.getElementById('audio'));
	};
	var timer = setInterval(function(){
		if( !!wechat && !!wx){
			wechat.Handler();
			init();
			clearInterval(timer)
		};
	},500);
});