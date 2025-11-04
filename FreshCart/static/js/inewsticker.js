//Plugin name        : inewsticker - jQuery news ticker 
//Version            : 0.1.0
//Author             : mahdi khaksar
//Author website     : progpars.com
//Url	 			 : http://www.ijquery.ir/effect/inewsticker/
(function(e){e.fn.inewsticker=function(t){var n={speed:200,effect:"fade",dir:"ltr",font_size:null,color:null,font_family:null,delay_after:3e3};e.extend(n,t);var r=e(this);var i=r.children();i.not(":first").hide();r.css("direction",t.dir);r.css("font-size",t.font_size);r.css("color",t.color);r.css("font-family",t.font_family);setInterval(function(){var e=r.children();e.not(":first").hide();var n=e.eq(0);var i=e.eq(1);if(t.effect=="slide"){n.slideUp();i.slideDown(function(){n.remove().appendTo(r)})}if(t.effect=="fade"){n.fadeOut(function(){i.fadeIn();n.remove().appendTo(r)})}},t.speed);if(t.effect=="typing"){var s=0;var o=0;var u=t.delay_after/t.speed;var a=(new Array(1+u)).join(" ");var f=new Array;i.each(function(){f.push(e(this).text()+a)});count=f.length;setInterval(function(){result=f[o].substring(0,s);e(r).html(result);s++;if(s==f[o].length){s=0;r.appendTo(r).hide().fadeIn("slow");o++;if(count==o){o=0}}},t.speed)}}})(jQuery)
