!function(d){var t={animation:"bounce",slideSelector:".slide",container:".main",cssBlur:!1,pagination:!0,loop:!0,autoStart:4e4};d.fn.swipeEvents=function(){return this.each(function(){var t,n,r=d(this);function o(i){var a=i.originalEvent.touches;if(a&&a.length){var s=t-a[0].pageX,e=n-a[0].pageY;50<=s&&r.trigger("swipeLeft"),s<=-50&&r.trigger("swipeRight"),50<=e&&r.trigger("swipeUp"),e<=-50&&r.trigger("swipeDown"),(50<=Math.abs(s)||50<=Math.abs(e))&&r.unbind("touchmove",o)}i.preventDefault()}r.bind("touchstart",function(i){var a=i.originalEvent.touches;a&&a.length&&(t=a[0].pageX,n=a[0].pageY,r.bind("touchmove",o));i.preventDefault()})})},d.fn.transformSlider=function(i,a){var s=d(this);switch(i.animation){case"slide":s.addClass("ease").css({"-webkit-transform":"translate3d("+a+"%, 0, 0)","-moz-transform":"translate3d("+a+"%, 0, 0)","-ms-transform":"translate3d("+a+"%, 0, 0)",transform:"translate3d("+a+"%, 0, 0)"});break;case"slideUp":s.addClass("ease").css({"-webkit-transform":"translate3d(0, "+a+"%, 0)","-moz-transform":"translate3d(0, "+a+"%, 0)","-ms-transform":"translate3d(0, "+a+"%, 0)",transform:"translate3d(0, "+a+"%, 0)"});break;case"bounce":s.addClass("bounce").css({"-webkit-transform":"translate3d("+a+"%, 0, 0)","-moz-transform":"translate3d("+a+"%, 0, 0)","-ms-transform":"translate3d("+a+"%, 0, 0)",transform:"translate3d("+a+"%, 0, 0)"});break;case"bounceUp":s.addClass("bounce").css({"-webkit-transform":"translate3d(0, "+a+"%, 0)","-moz-transform":"translate3d(0, "+a+"%, 0)","-ms-transform":"translate3d(0, "+a+"%, 0)",transform:"translate3d(0, "+a+"%, 0)"});break;case"fade":s.addClass("no-animation").fadeOut("slow",function(){s.css({"-webkit-transform":"translate3d("+a+"%, 0, 0)","-moz-transform":"translate3d("+a+"%, 0, 0)","-ms-transform":"translate3d("+a+"%, 0, 0)",transform:"translate3d("+a+"%, 0, 0)"}).fadeIn("slow")})}},d.fn.positionSlides=function(i,a){var s=d(this);"slideUp"==i.animation||"bounceUp"==i.animation?s.css({top:100*a+"%"}):s.css({left:100*a+"%"})},d.fn.immersive_slider=function(i){var e=d.extend({},t,i),a=d(this),s="";a.addClass("immersive_slider"),a.find(e.slideSelector).addClass("is-slide"),1==e.cssBlur?a.find(".is-slide img:first-child").each(function(i){var a="";0==i&&(a="active");var s=d(this);d(e.container).addClass("is-container").prepend("<div id='slide_"+(i+1)+"_bg' class='is-background gs_cssblur "+a+"'>"+s.clone().wrap("<div />").parent().html()+"</div>"),d("#slide_"+(i+1)+"_bg").positionSlides(e,i)}):a.find(".is-slide").each(function(i){var a="";0==i&&(a="active");var s="<div style='background-image: url("+d(this).data("blurred")+" )' />";d(e.container).addClass("is-container").prepend("<div id='slide_"+(i+1)+"_bg' class='is-background "+a+"'>"+s+"</div>"),d("#slide_"+(i+1)+"_bg").positionSlides(e,i)}),0==e.autoStart&&0==e.autoStart||setInterval(function(){a.moveNext()},e.autoStart),d(e.container).find(".is-background").wrapAll("<div class='is-bg-overflow' />"),a.find(".is-slide").wrapAll("<div class='is-overflow' />"),a.find(".is-slide").each(function(i){var a="";0==i&&(a="active"),d(this).attr("id","slide_"+(i+1)).addClass(a),d(this).positionSlides(e,i),1==e.pagination&&(s+="<li><a class='is-page "+a+"' href='#slide_"+(i+1)+"'></a></li>")}),d("<ul class='is-pagination'>"+s+"</ul>").appendTo(a),1==e.pagination&&d(".is-pagination li a").click(function(){var i=d(this).attr("href");return d(this).hasClass("active")||a.moveSlider(e,i),!1}),d(".is-next").click(function(){return a.moveNext(),!1}),d(".is-prev").click(function(){return a.movePrev(),!1}),d.fn.moveSlider=function(i,a){var s=d(this),e=s.find(".is-slide.active"),t=s.find(".is-slide"+a),n=d(i.container).find(".is-background.active"),r=d(i.container).find(".is-background"+a+"_bg");t&&(e.removeClass("active"),t.addClass("active"),n.removeClass("active"),r.addClass("active"),d(".is-pagination li a.active").removeClass("active"),d(".is-pagination li a[href='"+a+"']").addClass("active")),pos=100*(a.replace("#slide_","")-1)*-1,s.find(".is-overflow").transformSlider(i,pos),d(i.container).find(".is-bg-overflow").transformSlider(i,pos)},d.fn.moveNext=function(){var i=d(this),a=i.find(e.slideSelector).length+1,s=parseInt(d(this).find(".is-slide.active").attr("id").replace("slide_",""))+1;s<a?i.moveSlider(e,"#slide_"+s):1==e.loop&&i.moveSlider(e,"#slide_1")},d.fn.movePrev=function(){var i=d(this),a=i.find(e.slideSelector).length+1,s=parseInt(d(this).find(".is-slide.active").attr("id").replace("slide_",""))-1;s<=a&&0<s?i.moveSlider(e,"#slide_"+s):1==e.loop&&i.moveSlider(e,"#slide_"+(a-1))},a.swipeEvents().bind("swipeRight",function(){a.movePrev()}).bind("swipeLeft",function(){a.moveNext()})}}(window.jQuery);