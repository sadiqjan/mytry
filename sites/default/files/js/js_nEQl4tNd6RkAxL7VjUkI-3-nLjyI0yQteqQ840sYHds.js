Drupal.locale = { 'pluralFormula': function ($n) { return Number((($n==1)?(0):(($n==0)?(1):(($n==2)?(2):(((($n%100)>=3)&&(($n%100)<=10))?(3):(((($n%100)>=11)&&(($n%100)<=99))?(4):5)))))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"حدث خطأ أجاكس HTTP.", "HTTP Result Code: !status":"نتيجة كود PHP: !status", "An AJAX HTTP request terminated abnormally.":"تم إنهاء طلب أجاكس HTTP بشكل غير اعتيادي.", "Path: !uri":"المسار: !uri", "StatusText: !statusText":"نص الحالة: !statusText", "ResponseText: !responseText":"ResponseText: !responseText", "ReadyState: !readyState":"ReadyState: !readyState", "Loading":"تحميل", "(active tab)":"(علامة التبويب النشطة)", "Hide":"إخفاء", "Show":"عرض", "Re-order rows by numerical weight instead of dragging.":"إعادة ترتيب الأسطر بحسب الأوزان العددية بدلاً عن السحب.", "Show row weights":"إظهار أوزان الأسطر", "Hide row weights":"إخفاء أوزان الأسطر", "Drag to re-order":"اسحب لتغير الترتيب", "Changes made in this table will not be saved until the form is submitted.":"التغييرات الحادثة على هذا الجدول لن تُحفظ إلا بعد إرسال الاستمارة.", "Enabled":"مُفَعَّل", "Configure":"اضبط", "Done":"تمّ", "Edit":"حرر", "Hide shortcuts":"إخفاء الاختصارات", "@title dialog":"حوار @title", "Show shortcuts":"عرض الاختصارات", "Select all rows in this table":"اختر كل الصفوف في هذا الجدول", "Deselect all rows in this table":"ألغ اختيار كل الصفوف في هذا الجدول", "Disabled":"مُعَطَّل", "Hide summary":"إخفاء الموجز", "Edit summary":"تعديل الملخص", "Not in menu":"غير موجود في القائمة", "New revision":"مراجعة جديدة", "No revision":"لا توجد أي مراجعة", "By @name on @date":"من @name بتاريخ  @date", "By @name":"من %name", "Not published":"لم ينشر", "Alias: @alias":"البديل: @alias", "No alias":"لا يوجد بدائل", "@number comments per page":"@number تعليق في الصفحة", "Autocomplete popup":"نافذة الإكمال التلقائي", "Cancel":"إلغاء", "none":"لا يوجد", "Add":"أضف", "OK":"موافق", "Allowed HTML tags":"وسوم إتش.تي.إم.إل المسموح بها", "Please wait...":"انتظر من فضلك...", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"لن تُحفظ التغييرات في هذه الصناديق قبل النقر على زر \u003Cem\u003Eاحفظ الصناديق\u003C\u002Fem\u003E.", "Requires a title":"العنوان ضروري", "Not restricted":"غير مقيد", "Not customizable":"غير قابل للتخصيص", "Restricted to certain pages":"خاضع لبعض الصفحات", "The block cannot be placed in this region.":"لا يمكن وضع الصندوق في هذه المنطقة.", "Don\u0027t display post information":"عدم عرض معلومات المشاركة", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"لا يمكن رفع الملف المحدد %filename. يسمح فقط بالملفات ذات اللواحق التالية: %extensions."}} };;
// ColorBox v1.3.20.1 - jQuery lightbox plugin
// (c) 2012 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(e,t,n){function G(n,r,i){var o=t.createElement(n);return r&&(o.id=s+r),i&&(o.style.cssText=i),e(o)}function Y(e){var t=T.length,n=(U+e)%t;return n<0?t+n:n}function Z(e,t){return Math.round((/%/.test(e)?(t==="x"?tt():nt())/100:1)*parseInt(e,10))}function et(e){return B.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function tt(){return n.innerWidth||N.width()}function nt(){return n.innerHeight||N.height()}function rt(){var t,n=e.data(R,i);n==null?(B=e.extend({},r),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},n);for(t in B)e.isFunction(B[t])&&t.slice(0,2)!=="on"&&(B[t]=B[t].call(R));B.rel=B.rel||R.rel||"nofollow",B.href=B.href||e(R).attr("href"),B.title=B.title||R.title,typeof B.href=="string"&&(B.href=e.trim(B.href))}function it(t,n){e.event.trigger(t),n&&n.call(R)}function st(){var e,t=s+"Slideshow_",n="click."+s,r,i,o;B.slideshow&&T[1]?(r=function(){M.text(B.slideshowStop).unbind(n).bind(f,function(){if(B.loop||T[U+1])e=setTimeout(J.next,B.slideshowSpeed)}).bind(a,function(){clearTimeout(e)}).one(n+" "+l,i),g.removeClass(t+"off").addClass(t+"on"),e=setTimeout(J.next,B.slideshowSpeed)},i=function(){clearTimeout(e),M.text(B.slideshowStart).unbind([f,a,l,n].join(" ")).one(n,function(){J.next(),r()}),g.removeClass(t+"on").addClass(t+"off")},B.slideshowAuto?r():i()):g.removeClass(t+"off "+t+"on")}function ot(t){V||(R=t,rt(),T=e(R),U=0,B.rel!=="nofollow"&&(T=e("."+o).filter(function(){var t=e.data(this,i),n;return t&&(n=t.rel||this.rel),n===B.rel}),U=T.index(R),U===-1&&(T=T.add(R),U=T.length-1)),W||(W=X=!0,g.show(),B.returnFocus&&e(R).blur().one(c,function(){e(this).focus()}),m.css({opacity:+B.opacity,cursor:B.overlayClose?"pointer":"auto"}).show(),B.w=Z(B.initialWidth,"x"),B.h=Z(B.initialHeight,"y"),J.position(),d&&N.bind("resize."+v+" scroll."+v,function(){m.css({width:tt(),height:nt(),top:N.scrollTop(),left:N.scrollLeft()})}).trigger("resize."+v),it(u,B.onOpen),H.add(A).hide(),P.html(B.close).show()),J.load(!0))}function ut(){!g&&t.body&&(Q=!1,N=e(n),g=G(K).attr({id:i,"class":p?s+(d?"IE6":"IE"):""}).hide(),m=G(K,"Overlay",d?"position:absolute":"").hide(),L=G(K,"LoadingOverlay").add(G(K,"LoadingGraphic")),y=G(K,"Wrapper"),b=G(K,"Content").append(C=G(K,"LoadedContent","width:0; height:0; overflow:hidden"),A=G(K,"Title"),O=G(K,"Current"),_=G(K,"Next"),D=G(K,"Previous"),M=G(K,"Slideshow").bind(u,st),P=G(K,"Close")),y.append(G(K).append(G(K,"TopLeft"),w=G(K,"TopCenter"),G(K,"TopRight")),G(K,!1,"clear:left").append(E=G(K,"MiddleLeft"),b,S=G(K,"MiddleRight")),G(K,!1,"clear:left").append(G(K,"BottomLeft"),x=G(K,"BottomCenter"),G(K,"BottomRight"))).find("div div").css({"float":"left"}),k=G(K,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),H=_.add(D).add(O).add(M),e(t.body).append(m,g.append(y,k)))}function at(){return g?(Q||(Q=!0,j=w.height()+x.height()+b.outerHeight(!0)-b.height(),F=E.width()+S.width()+b.outerWidth(!0)-b.width(),I=C.outerHeight(!0),q=C.outerWidth(!0),g.css({"padding-bottom":j,"padding-right":F}),_.click(function(){J.next()}),D.click(function(){J.prev()}),P.click(function(){J.close()}),m.click(function(){B.overlayClose&&J.close()}),e(t).bind("keydown."+s,function(e){var t=e.keyCode;W&&B.escKey&&t===27&&(e.preventDefault(),J.close()),W&&B.arrowKey&&T[1]&&(t===37?(e.preventDefault(),D.click()):t===39&&(e.preventDefault(),_.click()))}),e("."+o,t).live("click",function(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),ot(this))})),!0):!1}var r={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p=!e.support.opacity&&!e.support.style,d=p&&!n.XMLHttpRequest,v=s+"_IE6",m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K="div",Q;if(e.colorbox)return;e(ut),J=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{},ut();if(at()){if(!s[0]){if(s.selector)return s;s=e("<a/>"),t.open=!0}n&&(t.onComplete=n),s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o),(e.isFunction(t.open)&&t.open.call(s)||t.open)&&ot(s[0])}return s},J.position=function(e,t){function f(e){w[0].style.width=x[0].style.width=b[0].style.width=e.style.width,b[0].style.height=E[0].style.height=S[0].style.height=e.style.height}var n,r=0,i=0,o=g.offset(),u,a;N.unbind("resize."+s),g.css({top:-9e4,left:-9e4}),u=N.scrollTop(),a=N.scrollLeft(),B.fixed&&!d?(o.top-=u,o.left-=a,g.css({position:"fixed"})):(r=u,i=a,g.css({position:"absolute"})),B.right!==!1?i+=Math.max(tt()-B.w-q-F-Z(B.right,"x"),0):B.left!==!1?i+=Z(B.left,"x"):i+=Math.round(Math.max(tt()-B.w-q-F,0)/2),B.bottom!==!1?r+=Math.max(nt()-B.h-I-j-Z(B.bottom,"y"),0):B.top!==!1?r+=Z(B.top,"y"):r+=Math.round(Math.max(nt()-B.h-I-j,0)/2),g.css({top:o.top,left:o.left}),e=g.width()===B.w+q&&g.height()===B.h+I?0:e||0,y[0].style.width=y[0].style.height="9999px",n={width:B.w+q,height:B.h+I,top:r,left:i},e===0&&g.css(n),g.dequeue().animate(n,{duration:e,complete:function(){f(this),X=!1,y[0].style.width=B.w+q+F+"px",y[0].style.height=B.h+I+j+"px",B.reposition&&setTimeout(function(){N.bind("resize."+s,J.position)},1),t&&t()},step:function(){f(this)}})},J.resize=function(e){W&&(e=e||{},e.width&&(B.w=Z(e.width,"x")-q-F),e.innerWidth&&(B.w=Z(e.innerWidth,"x")),C.css({width:B.w}),e.height&&(B.h=Z(e.height,"y")-I-j),e.innerHeight&&(B.h=Z(e.innerHeight,"y")),!e.innerHeight&&!e.height&&(C.css({height:"auto"}),B.h=C.height()),C.css({height:B.h}),J.position(B.transition==="none"?0:B.speed))},J.prep=function(t){function o(){return B.w=B.w||C.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function u(){return B.h=B.h||C.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(!W)return;var n,r=B.transition==="none"?0:B.speed;C.remove(),C=G(K,"LoadedContent").append(t),C.hide().appendTo(k.show()).css({width:o(),overflow:B.scrolling?"auto":"hidden"}).css({height:u()}).prependTo(b),k.hide(),e(z).css({"float":"none"}),d&&e("select").not(g.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(l,function(){this.style.visibility="inherit"}),n=function(){function y(){p&&g[0].style.removeAttribute("filter")}var t,n,o=T.length,u,a="frameBorder",l="allowTransparency",c,d,v,m;if(!W)return;c=function(){clearTimeout($),L.detach().hide(),it(f,B.onComplete)},p&&z&&C.fadeIn(100),A.html(B.title).add(C).show();if(o>1){typeof B.current=="string"&&O.html(B.current.replace("{current}",U+1).replace("{total}",o)).show(),_[B.loop||U<o-1?"show":"hide"]().html(B.next),D[B.loop||U?"show":"hide"]().html(B.previous),B.slideshow&&M.show();if(B.preloading){t=[Y(-1),Y(1)];while(n=T[t.pop()])m=e.data(n,i),m&&m.href?(d=m.href,e.isFunction(d)&&(d=d.call(n))):d=n.href,et(d)&&(v=new Image,v.src=d)}}else H.hide();B.iframe?(u=G("iframe")[0],a in u&&(u[a]=0),l in u&&(u[l]="true"),u.name=s+ +(new Date),B.fastIframe?c():e(u).one("load",c),u.src=B.href,B.scrolling||(u.scrolling="no"),e(u).addClass(s+"Iframe").appendTo(C).one(h,function(){u.src="//about:blank"})):c(),B.transition==="fade"?g.fadeTo(r,1,y):y()},B.transition==="fade"?g.fadeTo(r,0,function(){J.position(0,n)}):J.position(r,n)},J.load=function(t){var n,r,i=J.prep;X=!0,z=!1,R=T[U],t||rt(),it(h),it(a,B.onLoad),B.h=B.height?Z(B.height,"y")-I-j:B.innerHeight&&Z(B.innerHeight,"y"),B.w=B.width?Z(B.width,"x")-q-F:B.innerWidth&&Z(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=Z(B.maxWidth,"x")-q-F,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=Z(B.maxHeight,"y")-I-j,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,$=setTimeout(function(){L.show().appendTo(b)},100),B.inline?(G(K).hide().insertBefore(e(n)[0]).one(h,function(){e(this).replaceWith(C.children())}),i(e(n))):B.iframe?i(" "):B.html?i(B.html):et(n)?(e(z=new Image).addClass(s+"Photo").error(function(){B.title=!1,i(G(K,"Error").html(B.imgError))}).load(function(){var e;z.onload=null,B.scalePhotos&&(r=function(){z.height-=z.height*e,z.width-=z.width*e},B.mw&&z.width>B.mw&&(e=(z.width-B.mw)/z.width,r()),B.mh&&z.height>B.mh&&(e=(z.height-B.mh)/z.height,r())),B.h&&(z.style.marginTop=Math.max(B.h-z.height,0)/2+"px"),T[1]&&(B.loop||T[U+1])&&(z.style.cursor="pointer",z.onclick=function(){J.next()}),p&&(z.style.msInterpolationMode="bicubic"),setTimeout(function(){i(z)},1)}),setTimeout(function(){z.src=n},1)):n&&k.load(n,B.data,function(t,n,r){i(n==="error"?G(K,"Error").html(B.xhrError):e(this).contents())})},J.next=function(){!X&&T[1]&&(B.loop||T[U+1])&&(U=Y(1),J.load())},J.prev=function(){!X&&T[1]&&(B.loop||U)&&(U=Y(-1),J.load())},J.close=function(){W&&!V&&(V=!0,W=!1,it(l,B.onCleanup),N.unbind("."+s+" ."+v),m.fadeTo(200,0),g.stop().fadeTo(300,0,function(){g.add(m).css({opacity:1,cursor:"auto"}).hide(),it(h),C.remove(),setTimeout(function(){V=!1,it(c,B.onClosed)},1)}))},J.remove=function(){e([]).add(g).add(m).remove(),g=null,e("."+o).removeData(i).removeClass(o).die()},J.element=function(){return e(R)},J.settings=r})(jQuery,document,this);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        setTimeout(function () { $('#cboxTitle', context).slideUp() }, 1500);
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
if(typeof jwplayer=="undefined"){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};jwplayer.version="6.0.2813";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(d){var j=document,g=window,b=navigator,h="undefined",f="string",c="object";var k=d.utils=function(){};k.exists=function(m){switch(typeof(m)){case f:return(m.length>0);break;case c:return(m!==null);case h:return false}return true};k.styleDimension=function(m){return m+(m.toString().indexOf("%")>0?"":"px")};k.getAbsolutePath=function(s,r){if(!k.exists(r)){r=j.location.href}if(!k.exists(s)){return undefined}if(a(s)){return s}var t=r.substring(0,r.indexOf("://")+3);var q=r.substring(t.length,r.indexOf("/",t.length+1));var n;if(s.indexOf("/")===0){n=s.split("/")}else{var o=r.split("?")[0];o=o.substring(t.length+q.length+1,o.lastIndexOf("/"));n=o.split("/").concat(s.split("/"))}var m=[];for(var p=0;p<n.length;p++){if(!n[p]||!k.exists(n[p])||n[p]=="."){continue}else{if(n[p]==".."){m.pop()}else{m.push(n[p])}}}return t+q+"/"+m.join("/")};function a(n){if(!k.exists(n)){return}var o=n.indexOf("://");var m=n.indexOf("?");return(o>0&&(m<0||(m>o)))}k.extend=function(){var m=k.extend["arguments"];if(m.length>1){for(var o=1;o<m.length;o++){for(var n in m[o]){try{if(k.exists(m[o][n])){m[0][n]=m[o][n]}}catch(p){}}}return m[0]}return null};k.log=function(n,m){if(typeof console!=h&&typeof console.log!=h){if(m){console.log(n,m)}else{console.log(n)}}};var e=k.userAgentMatch=function(n){var m=b.userAgent.toLowerCase();return(m.match(n)!==null)};function l(m){return function(){return e(m)}}k.isIE=l(/msie/i);k.isFF=l(/firefox/i);k.isIOS=l(/iP(hone|ad|od)/i);k.isIPod=l(/iP(hone|od)/i);k.isIPad=l(/iPad/i);k.isAndroid=function(m){if(m){return e(new RegExp("android.*"+m,"i"))}else{return e(/android/i)}};k.isMobile=function(){return k.isIOS()||k.isAndroid()};k.saveCookie=function(m,n){j.cookie="jwplayer."+m+"="+n+"; path=/"};k.getCookies=function(){var p={};var o=j.cookie.split("; ");for(var n=0;n<o.length;n++){var m=o[n].split("=");if(m[0].indexOf("jwplayer.")==0){p[m[0].substring(9,m[0].length)]=m[1]}}return p};k.typeOf=function(n){var m=typeof n;if(m==="object"){if(!n){return"null"}return(n instanceof Array)?"array":m}else{return m}};k.translateEventResponse=function(o,m){var q=k.extend({},m);if(o==d.events.JWPLAYER_FULLSCREEN&&!q.fullscreen){q.fullscreen=q.message=="true"?true:false;delete q.message}else{if(typeof q.data==c){q=k.extend(q,q.data);delete q.data}else{if(typeof q.metadata==c){k.deepReplaceKeyName(q.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var n=["position","duration","offset"];for(var p in n){if(q[n[p]]){q[n[p]]=Math.round(q[n[p]]*1000)/1000}}return q};k.flashVersion=function(){if(k.isAndroid()){return 0}var m=b.plugins,n;if(m!=h){n=m["Shockwave Flash"];if(n){return parseInt(n.description.replace(/\D+(\d+)\..*/,"$1"))}}if(typeof g.ActiveXObject!=h){try{n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(n){return parseInt(n.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(o){}}return 0};k.getScriptPath=function(o){var m=j.getElementsByTagName("script");for(var n=0;n<m.length;n++){var p=m[n].src;if(p&&p.indexOf(o)>=0){return p.substr(0,p.indexOf(o))}}return""};k.deepReplaceKeyName=function(t,o,m){switch(d.utils.typeOf(t)){case"array":for(var q=0;q<t.length;q++){t[q]=d.utils.deepReplaceKeyName(t[q],o,m)}break;case c:for(var p in t){var s,r;if(o instanceof Array&&m instanceof Array){if(o.length!=m.length){continue}else{s=o;r=m}}else{s=[o];r=[m]}var n=p;for(var q=0;q<s.length;q++){n=n.replace(new RegExp(o[q],"g"),m[q])}t[n]=d.utils.deepReplaceKeyName(t[p],o,m);if(p!=n){delete t[p]}}break}return t};var i=k.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};k.getPluginPathType=function(n){if(typeof n!=f){return}n=n.split("?")[0];var o=n.indexOf("://");if(o>0){return i.ABSOLUTE}var m=n.indexOf("/");var p=k.extension(n);if(o<0&&m<0&&(!p||!isNaN(p))){return i.CDN}return i.RELATIVE};k.getPluginName=function(m){return m.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};k.getPluginVersion=function(m){return m.replace(/[^-]*-?([^\.]*).*$/,"$1")};k.isYouTube=function(m){return(m.indexOf("youtube.com")>-1||m.indexOf("youtu.be")>-1)};k.isRtmp=function(m,n){return(m.indexOf("rtmp")==0||n=="rtmp")};k.foreach=function(o,n){for(var m in o){if(o.hasOwnProperty(m)){n(m)}}};k.isHTTPS=function(){return(g.location.href.indexOf("https")==0)}})(jwplayer);(function(o){var d="video/",i="audio/",g="image",j="mp4",c="webm",n="ogg",b="aac",k="mp3",l="vorbis",m={mp4:d+j,vorbis:i+n,ogg:d+n,webm:d+c,aac:i+j,mp3:i+k,hls:"application/vnd.apple.mpegurl"},h={mp4:m[j],f4v:m[j],m4v:m[j],mov:m[j],m4a:m[b],f4a:m[b],aac:m[b],mp3:m[k],ogv:m[n],ogg:m[l],oga:m[l],webm:m[c],m3u8:m.hls},d="video",f={flv:d,f4v:d,mov:d,m4a:d,m4v:d,mp4:d,aac:d,mp3:"sound",smil:"rtmp",m3u8:"hls"};var a=o.extensionmap={};for(var e in h){a[e]={html5:h[e]}}for(e in f){if(!a[e]){a[e]={}}a[e].flash=f[e]}a.types=m;a.mimeType=function(q){for(var p in m){if(m[p]==q){return p}}};a.extType=function(p){return a.mimeType(h[p])}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,h=jwplayer.events,d=new h.eventdispatcher();b.extend(this,d);this.load=function(){var k=b.scriptloader.loaders[e];if(k&&(k.getStatus()==a.NEW||k.getStatus()==a.LOADING)){k.addEventListener(h.ERROR,g);k.addEventListener(h.COMPLETE,i);return}b.scriptloader.loaders[e]=this;if(f==a.NEW){f=a.LOADING;var j=c.createElement("script");if(j.addEventListener){j.onload=i;j.onerror=g}else{if(j.readyState){j.onreadystatechange=function(){if(j.readyState=="loaded"||j.readyState=="complete"){i()}}}}c.getElementsByTagName("head")[0].appendChild(j);j.src=e}};function g(j){f=a.ERROR;d.sendEvent(h.ERROR)}function i(j){f=a.COMPLETE;d.sendEvent(h.COMPLETE)}this.getStatus=function(){return f}};b.scriptloader.loaders={}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}};a.extension=function(b){if(!b||b.substr(0,4)=="rtmp"){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0].split("#")[0];if(b.lastIndexOf(".")>-1){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(b.length==3){b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)}return parseInt(b,16)}})(jwplayer.utils);(function(a){var c="invalid",b="36QXq4W@GSBV^teR";a.key=function(h){var g,i,e;function f(j){if(!a.exists(j)){j=""}try{j=d(j);var l=j.split("/");g=l[0];if(!g){g="free"}else{if(a.key.valid.indexOf(g)<0){g=c}}i=l[1];if(l[2]&&parseInt(l[2])>0){e=new Date();e.setTime(String(l[2]))}}catch(k){g=c}}function d(j){return a.tea.decrypt(j,b)}this.edition=function(){if(e&&e.getTime()<(new Date()).getTime()){return c}return g};this.token=function(){return i};f(h)};a.key.valid=["free","pro"]})(jwplayer.utils);(function(b){var c=b.tea={};c.encrypt=function(h,w){if(h.length==0){return("")}var x=c.strToLongs(a.encode(h));if(x.length<=1){x[1]=0}var l=c.strToLongs(a.encode(w).slice(0,16)),i=x.length,r=x[i-1],s=x[0],u=2654435769,t,o,f=Math.floor(6+52/i),m=0;while(f-->0){m+=u;o=m>>>2&3;for(var g=0;g<i;g++){s=x[(g+1)%i];t=(r>>>5^s<<2)+(s>>>3^r<<4)^(m^s)+(l[g&3^o]^r);r=x[g]+=t}}var j=c.longsToStr(x);return d.encode(j)};c.decrypt=function(j,w){if(j.length==0){return("")}var x=c.strToLongs(d.decode(j)),l=c.strToLongs(a.encode(w).slice(0,16)),i=x.length,r=x[i-1],s=x[0],u=2654435769,t,o,f=Math.floor(6+52/i),m=f*u;while(m!=0){o=m>>>2&3;for(var h=i-1;h>=0;h--){r=x[h>0?h-1:i-1];t=(r>>>5^s<<2)+(s>>>3^r<<4)^(m^s)+(l[h&3^o]^r);s=x[h]-=t}m-=u}var g=c.longsToStr(x);g=g.replace(/\0+$/,"");return a.decode(g)};c.strToLongs=function(g){var e=new Array(Math.ceil(g.length/4));for(var f=0;f<e.length;f++){e[f]=g.charCodeAt(f*4)+(g.charCodeAt(f*4+1)<<8)+(g.charCodeAt(f*4+2)<<16)+(g.charCodeAt(f*4+3)<<24)}return e};c.longsToStr=function(f){var e=new Array(f.length);for(var g=0;g<f.length;g++){e[g]=String.fromCharCode(f[g]&255,f[g]>>>8&255,f[g]>>>16&255,f[g]>>>24&255)}return e.join("")};var d={};d.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(q,s){s=(typeof s=="undefined")?false:s;var j,g,f,u,r,n,m,k,l=[],i="",p,t,o;var h=d.code;t=s?a.encode(q):q;p=t.length%3;if(p>0){while(p++<3){i+="=";t+="\0"}}for(p=0;p<t.length;p+=3){j=t.charCodeAt(p);g=t.charCodeAt(p+1);f=t.charCodeAt(p+2);u=j<<16|g<<8|f;r=u>>18&63;n=u>>12&63;m=u>>6&63;k=u&63;l[p/3]=h.charAt(r)+h.charAt(n)+h.charAt(m)+h.charAt(k)}o=l.join("");o=o.slice(0,o.length-i.length)+i;return o};d.decode=function(p,g){g=(typeof g=="undefined")?false:g;var i,f,e,q,m,k,j,s,l=[],r,o;var h=d.code;o=g?a.decode(p):p;for(var n=0;n<o.length;n+=4){q=h.indexOf(o.charAt(n));m=h.indexOf(o.charAt(n+1));k=h.indexOf(o.charAt(n+2));j=h.indexOf(o.charAt(n+3));s=q<<18|m<<12|k<<6|j;i=s>>>16&255;f=s>>>8&255;e=s&255;l[n/4]=String.fromCharCode(i,f,e);if(j==64){l[n/4]=String.fromCharCode(i,f)}if(k==64){l[n/4]=String.fromCharCode(i)}}r=l.join("");return g?a.decode(r):r};var a={};a.encode=function(e){var f=e.replace(/[\u0080-\u07ff]/g,function(h){var g=h.charCodeAt(0);return String.fromCharCode(192|g>>6,128|g&63)});f=f.replace(/[\u0800-\uffff]/g,function(h){var g=h.charCodeAt(0);return String.fromCharCode(224|g>>12,128|g>>6&63,128|g&63)});return f};a.decode=function(f){var e=f.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(h){var g=((h.charCodeAt(0)&15)<<12)|((h.charCodeAt(1)&63)<<6)|(h.charCodeAt(2)&63);return String.fromCharCode(g)});e=e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(h){var g=(h.charCodeAt(0)&31)<<6|h.charCodeAt(1)&63;return String.fromCharCode(g)});return e}})(jwplayer.utils);(function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)=="string"){l=(new Function("return "+l))()}f[i].push({listener:l,count:k})}catch(j){b.log("error",j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i<f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log("error",k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)=="string"){k=(new Function("return "+k))()}d.push({listener:k,count:j})}catch(i){b.log("error",i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i<d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log("error",j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!="undefined"){for(var j=0;j<f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count>0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i<d.length;i++){try{d[i].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count>0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={},b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,g,f,e){var d=a.utils.getPluginName(h);if(!c[d]){c[d]=new a.plugins.plugin(h)}c[d].registerPlugin(h,g,f,e)}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]};this.getPlugins=function(){return b}}})(jwplayer);(function(b){var a=jwplayer.utils,c=jwplayer.events,d="undefined";b.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};b.plugin=function(e){var l=a.loaderstatus.NEW,m,k,f,n;var g=new c.eventdispatcher();a.extend(this,g);function h(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href)}}function j(o){n=setTimeout(function(){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)},1000)}function i(o){l=a.loaderstatus.ERROR;g.sendEvent(c.ERROR)}this.load=function(){if(l==a.loaderstatus.NEW){if(e.lastIndexOf(".swf")>0){m=e;l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}else{if(a.getPluginPathType(e)==a.pluginPathType.CDN){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}}l=a.loaderstatus.LOADING;var o=new a.scriptloader(h());o.addEventListener(c.COMPLETE,j);o.addEventListener(c.ERROR,i);o.load()}};this.registerPlugin=function(r,q,p,o){if(n){clearTimeout(n);n=undefined}f=q;if(p&&o){m=o;k=p}else{if(typeof p=="string"){m=p}else{if(typeof p=="function"){k=p}else{if(!p&&!o){m=r}}}}l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:if(e.lastIndexOf(".swf")>0){return a.getAbsolutePath(m,window.location.href)}return a.getAbsolutePath(m,h())}}return null};this.getJS=function(){return k};this.getTarget=function(){return f};this.getPluginmode=function(){if(typeof m!=d&&typeof k!=d){return b.pluginmodes.HYBRID}else{if(typeof m!=d){return b.pluginmodes.FLASH}else{if(typeof k!=d){return b.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(p,o,q){return new k(p,o,q)};this.getURL=function(){return e}}})(jwplayer.plugins);(function(b){var a=b.utils,c=b.events;b.plugins.pluginloader=function(i,h){var o=a.loaderstatus.NEW,g=false,d=false,k=false,l,m=h,e=new c.eventdispatcher();a.extend(this,e);function f(){if(k){e.sendEvent(c.ERROR,{message:l})}else{if(!d){d=true;o=a.loaderstatus.COMPLETE;e.sendEvent(c.COMPLETE)}}}function n(){if(!m){f()}if(!d&&!k){var r=0,q=i.getPlugins();for(var s in m){var t=a.getPluginName(s),w=q[t],v=w.getJS(),u=w.getTarget(),p=w.getStatus();if(p==a.loaderstatus.LOADING||p==a.loaderstatus.NEW){r++}else{if(v&&(!u||parseFloat(u)>parseFloat(b.version))){k=true;l="Incompatible player version";f()}}}if(r==0){f()}}}this.setupPlugins=function(w,s,z){var r={length:0,plugins:{}},u={length:0,plugins:{}},t=i.getPlugins();for(var v in s.plugins){var x=a.getPluginName(v),y=t[x],A=y.getFlashPath(),B=y.getJS(),p=y.getURL();if(A){r.plugins[A]=a.extend({},s.plugins[v]);r.plugins[A].pluginmode=y.getPluginmode();r.length++}if(B&&s.plugins&&s.plugins[p]){var q=document.createElement("div");q.id=w.id+"_"+x;q.style.position="absolute";q.style.top=0;q.style.zIndex=u.length+10;u.plugins[x]=y.getNewInstance(w,a.extend({},s.plugins[p]),q);u.length++;w.onReady(z(u.plugins[x],q,true));w.onResize(z(u.plugins[x],q))}}w.plugins=u.plugins;return r};this.load=function(){if(a.exists(h)&&a.typeOf(h)!="object"){n();return}o=a.loaderstatus.LOADING;g=true;for(var q in h){if(a.exists(q)){var r=i.addPlugin(q);r.addEventListener(c.COMPLETE,n);r.addEventListener(c.ERROR,j)}}var p=i.getPlugins();for(q in p){p[q].load()}g=false;n()};var j=this.pluginFailed=function(p){if(!k){k=true;l="File not found";f()}};this.getStatus=function(){return o}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)=="array"){for(var b=0;b<c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(b){var a=b.item=function(d){var c=jwplayer.utils.extend({},a.defaults,d);if(c.sources.length==0){c.sources=[new b.source(c)]}for(var e=0;e<c.sources.length;e++){c.sources[e]=new b.source(c.sources[e])}return c};a.defaults={description:"",image:"",mediaid:"",title:"",tags:"",duration:-1,sources:[]}})(jwplayer.playlist);(function(d){var b=undefined,a=jwplayer.utils,c={file:b,label:b,bitrate:b,width:b,height:b,type:b};d.source=function(f){var e=a.extend({},c);for(var g in c){if(a.exists(f[g])){e[g]=f[g];delete f[g]}}if(e.type&&e.type.indexOf("/")>0){e.type=a.extensionmap.mimeType(e.type)}return e}})(jwplayer.playlist);(function(b){var a=b.utils,c=b.events,d=document;var e=b.embed=function(t){var p=new e.config(t.config),i,k,j=p.width,l=p.height,n="Error loading player: ",h=b.plugins.loadPlugins(t.id,p.plugins);p.id=t.id;k=d.getElementById(t.id);i=d.createElement("div");i.id=k.id;i.style.width=j.toString().indexOf("%")>0?j:(j+"px");i.style.height=l.toString().indexOf("%")>0?l:(l+"px");k.parentNode.replaceChild(i,k);function m(w,v){for(var u in v){if(typeof w[u]=="function"){(w[u]).call(w,v[u])}}}function f(){if(a.typeOf(p.playlist)=="array"&&p.playlist.length<2){if(p.playlist.length==0||!p.playlist[0].sources||p.playlist[0].sources.length==0){r();return}}if(h.getStatus()==a.loaderstatus.COMPLETE){for(var w=0;w<p.modes.length;w++){if(p.modes[w].type&&e[p.modes[w].type]){var x=p.modes[w].config,u=a.extend({},x?e.config.addConfig(p,x):p),v=new e[p.modes[w].type](i,p.modes[w],u,h,t);if(v.supportsConfig()){v.addEventListener(c.ERROR,g);v.embed();m(t,u.events);return t}}}if(p.fallback){a.log("No suitable players found and fallback enabled");new e.download(i,p,r)}else{a.log("No suitable players found and fallback disabled");q()}}}function q(){i.parentNode.replaceChild(k,i)}function g(u){s(i,n+u.message)}function o(u){s(i,"Could not load plugins: "+u.message)}function r(){s(i,n+"No playable sources found")}function s(u,w){if(!p.fallback){return}var v=u.style;v.backgroundColor="#000";v.color="#FFF";v.width=a.styleDimension(p.width);v.height=a.styleDimension(p.height);v.display="table";v.opacity=1;var y=document.createElement("p"),x=y.style;x.verticalAlign="middle";x.textAlign="center";x.display="table-cell";x.font="15px/20px Arial, Helvetica, sans-serif";y.innerHTML=w.replace(":",":<br>");u.innerHTML="";u.appendChild(y)}b.embed.errorScreen=s;h.addEventListener(c.COMPLETE,f);h.addEventListener(c.ERROR,o);h.load();return t}})(jwplayer);(function(d){var a=d.utils,h=d.embed,b=d.playlist.item,f=undefined;var c=h.config=function(j){function m(q,p,o){for(var n=0;n<q.length;n++){var r=q[n].type;if(!q[n].src){q[n].src=o[r]?o[r]:p+"jwplayer."+r+(r=="flash"?".swf":".js")}}}var l={fallback:true,height:270,primary:"html5",width:480,base:f},i={html5:{type:"html5"},flash:{type:"flash"}},k=a.extend(l,j);if(!k.base){k.base=a.getScriptPath("jwplayer.js")}if(!k.modes){k.modes=(k.primary=="flash")?[i.flash,i.html5]:[i.html5,i.flash]}if(k.listbar){k.playlistsize=k.listbar.size;k.playlistposition=k.listbar.position}m(k.modes,k.base,{html5:k.html5player,flash:k.flashplayer});e(k);return k};c.addConfig=function(i,j){e(j);return a.extend(i,j)};function e(l){if(!l.playlist){var n={};for(var k in b.defaults){g(l,n,k)}if(!n.sources){if(l.levels){n.sources=l.levels;delete l.levels}else{var j={};g(l,j,"file");g(l,j,"type");n.sources=j.file?[j]:[]}}l.playlist=[n]}else{for(var m=0;m<l.playlist.length;m++){l.playlist[m]=new b(l.playlist[m])}}}function g(k,i,j){if(a.exists(k[j])){i[j]=k[j];delete k[j]}}})(jwplayer);(function(e){var g=e.embed,j=e.utils,i=document,h="pointer",c="none",a="block",f="100%",d="relative",b="absolute";g.download=function(n,y,l){var q=j.extend({},y),u,o=q.width?q.width:480,r=q.height?q.height:320,z,s,k=y.logo?y.logo:{prefix:"http://p.jwpcdn.com/",file:"logo.png",margin:10};function x(){var E,F,D,G,C=q.playlist,J,B,G,H=["mp4","aac","mp3"];if(C&&C.length){J=C[0];B=J.sources;for(G=0;G<B.length;G++){var A=B[G],I=A.type?A.type:j.extensionmap.extType(j.extension(A.file));if(A.file){for(G in H){if(I==H[G]){E=A.file;F=J.image}else{if(j.isYouTube(A.file)){D=A.file}}}if(E||D){continue}}}}else{return}if(E){z=E;s=F;if(k.prefix){if(j.isHTTPS()){k.prefix=k.prefix.replace("http://","https://ssl.")}k.prefix+=e.version.split(/\W/).splice(0,2).join("/")}t();p()}else{if(D){m(D)}else{l()}}}function t(){if(n){u=v("a","display",n);v("div","icon",u);v("div","logo",u);if(z){u.setAttribute("href",j.getAbsolutePath(z))}}}function w(A,C){var D=i.querySelectorAll(A);for(var B=0;B<D.length;B++){for(var E in C){D[B].style[E]=C[E]}}}function p(){var A="#"+n.id+" .jwdownload";n.style.width="";n.style.height="";w(A+"display",{width:j.styleDimension(Math.max(320,o)),height:j.styleDimension(Math.max(180,r)),background:"black center no-repeat "+(s?"url("+s+")":""),backgroundSize:"contain",position:d,border:c,display:a});w(A+"display div",{position:b,width:f,height:f});w(A+"logo",{top:k.margin+"px",right:k.margin+"px",background:"top right no-repeat url("+k.prefix+k.file+")"});w(A+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})}function v(A,D,C){var B=i.createElement(A);if(D){B.className="jwdownload"+D}if(C){C.appendChild(B)}return B}function m(A){var B=v("embed","",n);B.src="http://www.youtube.com/v/"+(/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i).exec(A).slice(1).join("");B.type="application/x-shockwave-flash";B.width=o;B.height=r}x()}})(jwplayer);(function(c){var b=c.utils,d=c.events,a={};var e=c.embed.flash=function(l,m,q,k,o){var h=new c.events.eventdispatcher(),i=b.flashVersion();b.extend(this,h);function r(t,s,u){var v=document.createElement("param");v.setAttribute("name",s);v.setAttribute("value",u);t.appendChild(v)}function p(t,u,s){return function(v){try{if(s){document.getElementById(o.id+"_wrapper").appendChild(u)}var x=document.getElementById(o.id).getPluginConfig("display");if(typeof t.resize=="function"){t.resize(x.width,x.height)}u.style.left=x.x;u.style.top=x.h}catch(w){}}}function j(u){if(!u){return{}}var w={};for(var t in u){var s=u[t];for(var v in s){w[t+"."+v]=s[v]}}return w}function g(v){if(!v){return{}}var y={},x=[];for(var s in v){var u=b.getPluginName(s);var t=v[s];x.push(s);for(var w in t){y[u+"."+w]=t[w]}}y.plugins=x.join(",");return y}function n(u){var s={};for(var t in u){if(typeof(u[t])=="object"){s[t]="[[JSON]]"+b.jsonToString(u[t])}else{s[t]=u[t]}}return s}this.embed=function(){q.id=o.id;if(i<10){h.sendEvent(d.ERROR,{message:"Flash version must be 10.0 or greater"});return false}var D;var x=b.extend({},q);if(l.id+"_wrapper"==l.parentNode.id){D=document.getElementById(l.id+"_wrapper")}else{D=document.createElement("div");D.id=l.id+"_wrapper";D.style.position="relative";D.style.width=b.styleDimension(x.width);D.style.height=b.styleDimension(x.height);l.parentNode.replaceChild(D,l);D.appendChild(l)}var t=k.setupPlugins(o,x,p);if(t.length>0){b.extend(x,g(t.plugins))}else{delete x.plugins}if(typeof x["dock.position"]!="undefined"){if(x["dock.position"].toString().toLowerCase()=="false"){x.dock=x["dock.position"];delete x["dock.position"]}}var C=b.getCookies();for(var u in C){if(typeof(x[u])=="undefined"){x[u]=C[u]}}var E="#000000",A,v=x.wmode?x.wmode:(x.height&&x.height<=40?"transparent":"opaque"),w=["height","width","modes","events","primary","base","fallback"];for(var z=0;z<w.length;z++){delete x[w[z]]}var s=window.location.pathname.split("/");s.splice(s.length-1,1);s=s.join("/");x.base=s+"/";a[l.id]=n(x);if(b.isIE()){var B='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%" id="'+l.id+'" name="'+l.id+'" tabindex=0"">';B+='<param name="movie" value="'+m.src+'">';B+='<param name="allowfullscreen" value="true">';B+='<param name="allowscriptaccess" value="always">';B+='<param name="seamlesstabbing" value="true">';B+='<param name="wmode" value="'+v+'">';B+='<param name="bgcolor" value="'+E+'">';B+="</object>";l.outerHTML=B;A=document.getElementById(l.id)}else{var y=document.createElement("object");y.setAttribute("type","application/x-shockwave-flash");y.setAttribute("data",m.src);y.setAttribute("width","100%");y.setAttribute("height","100%");y.setAttribute("bgcolor",E);y.setAttribute("id",l.id);y.setAttribute("name",l.id);y.setAttribute("tabindex",0);r(y,"allowfullscreen","true");r(y,"allowscriptaccess","always");r(y,"seamlesstabbing","true");r(y,"wmode",v);l.parentNode.replaceChild(y,l);A=y}o.container=A;o.setPlayer(A,"flash")};this.supportsConfig=function(){if(i){if(q){try{var u=q.playlist[0],s=u.sources;if(typeof s=="undefined"){return true}else{for(var t=0;t<s.length;t++){if(s[t].file&&f(s[t].file,s[t].type)){return true}}}}catch(v){return false}}else{return true}}return false};function f(s,t){if(b.isYouTube(s)){return true}if(b.isRtmp(s,t)){return true}if(t=="hls"){return true}var u=b.extensionmap[t?t:b.extension(s)];if(!u){return false}return !!(u.flash)}};e.getVars=function(f){return a[f]}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap,d=c.events;c.embed.html5=function(g,h,o,f,k){var j=this,e=new d.eventdispatcher();a.extend(j,e);function l(q,r,p){return function(s){try{var t=document.querySelector("#"+g.id+" .jwmain");if(p){t.appendChild(r)}if(typeof q.resize=="function"){q.resize(t.clientWidth,t.clientHeight);setTimeout(function(){q.resize(t.clientWidth,t.clientHeight)},400)}r.left=t.style.left;r.top=t.style.top}catch(u){}}}j.embed=function(){if(c.html5){f.setupPlugins(k,o,l);g.innerHTML="";var p=c.utils.extend({},o);var q=new c.html5.player(p);k.container=document.getElementById(k.id);k.setPlayer(q,"html5")}else{var r=new a.scriptloader(h.src);r.addEventListener(d.ERROR,i);r.addEventListener(d.COMPLETE,j.embed);r.load()}};function i(p){j.sendEvent(p.type,{message:"HTML5 player not found"})}j.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(o.playlist)=="string"){return true}else{var p=o.playlist[0].sources;for(var r=0;r<p.length;r++){var q=p[r].file,s=p[r].type;if(n(q,s)){return true}}}}catch(t){return false}}return false};function n(p,q){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}if(a.isRtmp(p,q)){return false}var r=b[q?q:a.extension(p)];if(!r){return false}if(r.flash&&!r.html5){return false}return m(r.html5)}function m(p){var q=c.vid;if(!p){return true}try{if(q.canPlayType(p)){return true}else{return false}}catch(r){return false}}}})(jwplayer);(function(c){var b=c.embed,a=c.utils,d=a.extend(function(i){var g=i.config,e=g.plugins,f=g.analytics,h=(a.isHTTPS()?"https://ssl.":"http://")+"p.jwpcdn.com/"+c.version.replace(/(\d+)\.(\d+).*/,"$1/$2")+"/jwpsrv.js";delete g.key;if(c.key){g.key=c.key}delete g.analytics;e=e?e:{};e[h]=f?f:{};g.plugins=e;return new b(i)},b);c.embed=d})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state,g=document;var f=d.api=function(t){var x=this,h={},l={},A={},o=[],i=undefined,D=false,p=[],y=undefined,s={},n={};x.container=t;x.id=t.id;x.getBuffer=function(){return w("jwGetBuffer")};x.getContainer=function(){return x.container};x.addButton=function(H,F,G,K){try{n[K]=G;var J="jwplayer('"+x.id+"').callback('"+K+"')";w("jwDockAddButton",H,F,J,K)}catch(I){a.log("Could not add dock button"+I.message)}};x.removeButton=function(F){w("jwDockRemoveButton",F)},x.callback=function(F){if(n[F]){n[F]()}};x.getDuration=function(){return w("jwGetDuration")};x.getFullscreen=function(){return w("jwGetFullscreen")};x.getStretching=function(){return w("jwGetStretching")};x.getHeight=function(){return w("jwGetHeight")};x.getLockState=function(){return w("jwGetLockState")};x.getMeta=function(){return x.getItemMeta()};x.getMute=function(){return w("jwGetMute")};x.getPlaylist=function(){var G=w("jwGetPlaylist");if(x.renderingMode=="flash"){a.deepReplaceKeyName(G,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var F=0;F<G.length;F++){if(!a.exists(G[F].index)){G[F].index=F}}return G};x.getPlaylistItem=function(F){if(!a.exists(F)){F=x.getCurrentItem()}return x.getPlaylist()[F]};x.getPosition=function(){return w("jwGetPosition")};x.getRenderingMode=function(){return x.renderingMode};x.getState=function(){return w("jwGetState")};x.getVolume=function(){return w("jwGetVolume")};x.getWidth=function(){return w("jwGetWidth")};x.setFullscreen=function(F){if(!a.exists(F)){w("jwSetFullscreen",!w("jwGetFullscreen"))}else{w("jwSetFullscreen",F)}return x};x.setStretching=function(F){w("jwSetStretching",F);return x};x.setMute=function(F){if(!a.exists(F)){w("jwSetMute",!w("jwGetMute"))}else{w("jwSetMute",F)}return x};x.lock=function(){return x};x.unlock=function(){return x};x.load=function(F){w("jwLoad",F);return x};x.playlistItem=function(F){w("jwPlaylistItem",parseInt(F));return x};x.playlistPrev=function(){w("jwPlaylistPrev");return x};x.playlistNext=function(){w("jwPlaylistNext");return x};x.resize=function(G,F){if(x.renderingMode=="html5"){i.jwResize(G,F)}else{var H=g.getElementById(x.id+"_wrapper");if(H){H.style.width=a.styleDimension(G);H.style.height=a.styleDimension(F)}}return x};x.play=function(F){if(typeof F=="undefined"){F=x.getState();if(F==b.PLAYING||F==b.BUFFERING){w("jwPause")}else{w("jwPlay")}}else{w("jwPlay",F)}return x};x.pause=function(F){if(typeof F=="undefined"){F=x.getState();if(F==b.PLAYING||F==b.BUFFERING){w("jwPause")}else{w("jwPlay")}}else{w("jwPause",F)}return x};x.stop=function(){w("jwStop");return x};x.seek=function(F){w("jwSeek",F);return x};x.setVolume=function(F){w("jwSetVolume",F);return x};x.loadInstream=function(G,F){y=new f.instream(this,i,G,F);return y};x.getQualityLevels=function(){return w("jwGetQualityLevels")};x.getCurrentQuality=function(){return w("jwGetCurrentQuality")};x.setCurrentQuality=function(F){w("jwSetCurrentQuality",F)};x.getCaptionsList=function(){return w("jwGetCaptionsList")};x.getCurrentCaptions=function(){return w("jwGetCurrentCaptions")};x.setCurrentCaptions=function(F){w("jwSetCurrentCaptions",F)};x.getControls=function(){return w("jwGetControls")};x.getSafeRegion=function(){return w("jwGetSafeRegion")};x.setControls=function(F){w("jwSetControls",F)};var r={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:e.JWPLAYER_PLAYLIST_COMPLETE,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onControls:e.JWPLAYER_CONTROLS,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:e.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:e.JWPLAYER_CAPTIONS_CHANGED};a.foreach(r,function(F){x[F]=C(r[F],z)});var v={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};a.foreach(v,function(F){x[F]=C(v[F],q)});function C(F,G){return function(H){return G(F,H)}}x.remove=function(){if(!D){throw"Cannot call remove() before player is ready";return}m(this)};function m(F){p=[];f.destroyPlayer(F.id)}x.setup=function(F){if(d.embed){m(x);var G=d(x.id);G.config=F;return new d.embed(G)}return x};x.registerPlugin=function(I,H,G,F){d.plugins.registerPlugin(I,H,G,F)};x.setPlayer=function(F,G){i=F;x.renderingMode=G};x.detachMedia=function(){if(x.renderingMode=="html5"){return w("jwDetachMedia")}};x.attachMedia=function(){if(x.renderingMode=="html5"){return w("jwAttachMedia")}};function q(F,G){if(!l[F]){l[F]=[];z(e.JWPLAYER_PLAYER_STATE,E(F))}l[F].push(G);return x}function E(F){return function(H){var G=H.newstate,J=H.oldstate;if(G==F){var I=l[G];if(I){for(var K=0;K<I.length;K++){if(typeof I[K]=="function"){I[K].call(this,{oldstate:J,newstate:G})}}}}}}function B(F,G,H){if(!A[F]){A[F]={}}if(!A[F][G]){A[F][G]=[];z(G,k(F,G))}A[F][G].push(H);return x}function k(F,G){return function(I){if(F==I.component){var H=A[F][G];if(H){for(var J=0;J<H.length;J++){if(typeof H[J]=="function"){H[J].call(this,I)}}}}}}function j(F,G){try{F.jwAddEventListener(G,'function(dat) { jwplayer("'+x.id+'").dispatchEvent("'+G+'", dat); }')}catch(H){a.log("Could not add internal listener")}}function z(F,G){if(!h[F]){h[F]=[];if(i&&D){j(i,F)}}h[F].push(G);return x}x.dispatchEvent=function(H){if(h[H]){var G=a.translateEventResponse(H,arguments[1]);for(var F=0;F<h[H].length;F++){if(typeof h[H][F]=="function"){h[H][F].call(this,G)}}}};x.dispatchInstreamEvent=function(F){if(y){y.dispatchEvent(F,arguments)}};function w(){if(D){var H=arguments[0],F=[];for(var G=1;G<arguments.length;G++){F.push(arguments[G])}if(typeof i!="undefined"&&typeof i[H]=="function"){switch(F.length){case 4:return(i[H])(F[0],F[1],F[2],F[3]);case 3:return(i[H])(F[0],F[1],F[2]);case 2:return(i[H])(F[0],F[1]);case 1:return(i[H])(F[0]);default:return(i[H])()}}return null}else{p.push(arguments)}}x.playerReady=function(F){D=true;if(!i){x.setPlayer(g.getElementById(F.id))}x.container=g.getElementById(x.id);a.foreach(h,function(G){j(i,G)});z(e.JWPLAYER_PLAYLIST_ITEM,function(G){s={}});z(e.JWPLAYER_MEDIA_META,function(G){a.extend(s,G.metadata)});x.dispatchEvent(e.API_READY);while(p.length>0){w.apply(this,p.shift())}};x.getItemMeta=function(){return s};x.getCurrentItem=function(){return w("jwGetPlaylistIndex")};function u(H,J,I){var F=[];if(!J){J=0}if(!I){I=H.length-1}for(var G=J;G<=I;G++){F.push(H[G])}return F}return x};f.selectPlayer=function(i){var h;if(!a.exists(i)){i=0}if(i.nodeType){h=i}else{if(typeof i=="string"){h=g.getElementById(i)}}if(h){var j=f.playerById(h.id);if(j){return j}else{return f.addPlayer(new f(h))}}else{if(typeof i=="number"){return c[i]}}return null};f.playerById=function(i){for(var h=0;h<c.length;h++){if(c[h].id==i){return c[h]}}return null};f.addPlayer=function(h){for(var i=0;i<c.length;i++){if(c[i]==h){return h}}c.push(h);return h};f.destroyPlayer=function(j){var i=-1,k;for(var m=0;m<c.length;m++){if(c[m].id==j){i=m;k=c[m];continue}}if(i>=0){var n=k.id,h=g.getElementById(n+(k.renderingMode=="flash"?"_wrapper":""));if(a.clearCss){a.clearCss("#"+n)}if(h){var l=g.createElement("div");l.id=n;h.parentNode.replaceChild(l,h)}c.splice(i,1)}return null};d.playerReady=function(i){var h=d.api.playerById(i.id);if(h){h.playerReady(i)}else{d.api.selectPlayer(i.id).playerReady(i)}}})(jwplayer);(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal("jwLoadInstream",o,r)}function n(s,t){d.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+j.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s<g[v].length;s++){if(typeof g[v][s]=="function"){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};;
(function($, Drupal, undefined){
  /**
   * When set to enable mediaelement for all audio/video files add it to the page.
   */
  Drupal.behaviors.mediaelement = {
    attach: function(context, settings) {
      if (settings.mediaelement !== undefined) {
        // @todo Remove anonymous function.
        $.each(settings.mediaelement, function(selector, options) {
          var opts;
          $(selector, context).once('mediaelement', function() {
            if (options.controls) {
              $(this).mediaelementplayer(options.opts);
            }
            else {
              $(this).mediaelement();
            }
          });
        });
      }
      // The global option is seperate from the other selectors as it should be
      // run after any other selectors.
      if (settings.mediaelementAll !== undefined) {
        $('video,audio', context).once('mediaelement', function() {
          $(this).mediaelementplayer();
        });
      }
    }
  };
})(jQuery, Drupal);;
(function ($) {

// Check that shadowbox library is available
if (typeof Shadowbox === 'undefined') return;

Drupal.behaviors.shadowbox = {
  attach: function(context, settings) {
    if (settings.shadowbox.auto_enable_all_images == 1) {
      $("a[href$='jpg'], a[href$='png'], a[href$='gif'], a[href$='jpeg'], a[href$='bmp'], a[href$='JPG'], a[href$='PNG'], a[href$='GIF'], a[href$='JPEG'], a[href$='BMP']").each(function() {
        if ($(this).attr('rel') == '') {
          if (settings.shadowbox.auto_gallery == 1) {
            $(this).attr('rel', 'shadowbox[gallery]');
          }
          else {
            $(this).attr('rel', 'shadowbox');
          }
        }
      });
    }
    Shadowbox.setup();
  }
};

})(jQuery);;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
;
/**
 * @file
 * Add jCarousel behaviors to the page and provide Views-support.
 */

(function($) {

Drupal.behaviors.jcarousel = {};
Drupal.behaviors.jcarousel.attach = function(context, settings) {
  settings = settings || Drupal.settings;

  // If no carousels exist on this part of the page, work no further. 
  if (!settings.jcarousel || !settings.jcarousel.carousels) {
    return;
  }

  $.each(settings.jcarousel.carousels, function(key, options) {
    var $carousel = $(options.selector + ':not(.jcarousel-processed)', context);

    // If this carousel has already been processed or doesn't exist, move on.
    if (!$carousel.length) {
      return;
    }

    // Callbacks need to be converted from a string to an actual function.
    $.each(options, function(optionKey) {
      if (optionKey.match(/Callback$/) && typeof options[optionKey] == 'string') {
        var callbackFunction = window;
        var callbackParents = options[optionKey].split('.');
        $.each(callbackParents, function(objectParent) {
          callbackFunction = callbackFunction[callbackParents[objectParent]];
        });
        options[optionKey] = callbackFunction;
      }
    });

    // Add standard options required for AJAX functionality.
    if (options.ajax && !options.itemLoadCallback) {
      options.itemLoadCallback = Drupal.jcarousel.ajaxLoadCallback;
    }

    // If auto-scrolling, pause animation when hoving over the carousel.
    if (options.auto && options.autoPause && !options.initCallback) {
      options.initCallback = function(carousel, state) {
        Drupal.jcarousel.autoPauseCallback(carousel, state);
      };
    }

    // Add navigation to the carousel if enabled.
    if (!options.setupCallback) {
      options.setupCallback = function(carousel) {
        Drupal.jcarousel.setupCarousel(carousel);
        if (options.navigation) {
          Drupal.jcarousel.addNavigation(carousel, options.navigation);
        }
      };
      if (options.navigation && !options.itemVisibleInCallback) {
        options.itemLastInCallback = {
          onAfterAnimation: Drupal.jcarousel.updateNavigationActive
        };
      }
    }

    if (!options.hasOwnProperty('buttonNextHTML') && !options.hasOwnProperty('buttonPrevHTML')) {
      options.buttonNextHTML = Drupal.theme('jCarouselButton', 'next');
      options.buttonPrevHTML = Drupal.theme('jCarouselButton', 'previous');
    }

    // Initialize the jcarousel.
    $carousel.addClass('jcarousel-processed').jcarousel(options);
  });
};

Drupal.jcarousel = {};
Drupal.jcarousel.ajaxLoadCallback = function(jcarousel, state) {
  // Check if the requested items already exist.
  if (state == 'init' || jcarousel.has(jcarousel.first, jcarousel.last)) {
    return;
  }

  var $list = jcarousel.list;
  var $view = $list.parents('.view:first');
  var ajaxPath = Drupal.settings.jcarousel.ajaxPath;
  var target = $view.get(0);

  // Find this view's settings in the Views AJAX settings.
  var settings;
  $.each(Drupal.settings.jcarousel.carousels, function(domID, carouselSettings) {
    if ($list.is('.' + domID)) {
      settings = carouselSettings['view_options'];
    }
  });

  // Copied from ajax_view.js:
  var viewData = { 'js': 1, 'first': jcarousel.first - 1, 'last': jcarousel.last };
  // Construct an object using the settings defaults and then overriding
  // with data specific to the link.
  $.extend(
    viewData,
    settings
  );

  $.ajax({
    url: ajaxPath,
    type: 'GET',
    data: viewData,
    success: function(response) {
      Drupal.jcarousel.ajaxResponseCallback(jcarousel, target, response);
    },
    error: function(xhr) {
      Drupal.jcarousel.ajaxErrorCallback(xhr, ajaxPath);
    },
    dataType: 'json'
  });

};

/**
 * Init callback for jCarousel. Pauses the carousel when hovering over.
 */
Drupal.jcarousel.autoPauseCallback = function(carousel, state) {
  function pauseAuto() {
    carousel.stopAuto();
  }
  function resumeAuto() {
    carousel.startAuto();
  }
  carousel.clip.hover(pauseAuto, resumeAuto);
  carousel.buttonNext.hover(pauseAuto, resumeAuto);
  carousel.buttonPrev.hover(pauseAuto, resumeAuto);
};

/**
 * Setup callback for jCarousel. Calculates number of pages.
 */
Drupal.jcarousel.setupCarousel = function(carousel) {
  // Determine the number of pages this carousel includes.
  // This only works for a positive starting point. Also, .first is 1-based
  // while .last is a count, so we need to reset the .first number to be
  // 0-based to make the math work.
  carousel.pageSize = carousel.last - (carousel.first - 1);

  // jCarousel's Views integration sets "size" in the carousel options. Use that
  // if available, otherwise count the number of items in the carousel.
  var itemCount = carousel.options.size ? carousel.options.size : $(carousel.list).children('li').length;
  carousel.pageCount =  Math.ceil(itemCount / carousel.pageSize);
  carousel.pageNumber = 1;

  // Disable the previous/next arrows if there is only one page.
  if (carousel.pageCount == 1) {
    carousel.buttonNext.addClass('jcarousel-next-disabled').attr('disabled', true);
    carousel.buttonPrev.addClass('jcarousel-prev-disabled').attr('disabled', true);
  }

  // Always remove the hard-coded display: block from the navigation.
  carousel.buttonNext.css('display', '');
  carousel.buttonPrev.css('display', '');
}

/**
 * Setup callback for jCarousel. Adds the navigation to the carousel if enabled.
 */
Drupal.jcarousel.addNavigation = function(carousel, position) {
  // Don't add a pager if there's only one page of results.
  if (carousel.pageCount <= 1) {
    return;
  }

  // Add a class to the wrapper so it can adjust CSS.
  $(carousel.list).parents('.jcarousel-container:first').addClass('jcarousel-navigation-' + position);

  var navigation = $('<ul class="jcarousel-navigation"></ul>');

  for (var i = 1; i <= carousel.pageCount; i++) {
    var pagerItem = $(Drupal.theme('jCarouselPageLink', i));
    var listItem = $('<li></li>').attr('jcarousel-page', i).append(pagerItem);
    navigation.append(listItem);

    // Make the first page active by default.
    if (i === 1) {
      listItem.addClass('active');
    }

    // Scroll to the correct page when a pager is clicked.
    pagerItem.bind('click', function() {
      // We scroll to the new page based on item offsets. This works with
      // circular carousels that do not divide items evenly, making it so that
      // going back or forward in pages will not skip or repeat any items.
      var newPageNumber = $(this).parent().attr('jcarousel-page');
      var itemOffset = (newPageNumber - carousel.pageNumber) * carousel.pageSize;

      if (itemOffset) {
        carousel.scroll(carousel.first + itemOffset);
      }

      return false;
    });
  }

  $(carousel.list).parents('.jcarousel-clip:first')[position](navigation);
}

/**
 * itemVisibleInCallback for jCarousel. Update the navigation after page change.
 */
Drupal.jcarousel.updateNavigationActive = function(carousel, item, idx, state) {
  // The navigation doesn't even exist yet when this is called on init.
  var $listItems = $(carousel.list).parents('.jcarousel-container:first').find('.jcarousel-navigation li');
  if ($listItems.length == 0) {
    return;
  }

  // jCarousel does some very odd things with circular wraps. Items before the
  // first item are given negative numbers and items after the last are given
  // numbers beyond the total number of items. This complicated logic calculates
  // which page number is active based off this numbering scheme.
  var pageNumber = Math.ceil(idx / carousel.pageSize);
  if (pageNumber <= 0 || pageNumber > carousel.pageCount) {
    pageNumber = pageNumber % carousel.pageCount;
    pageNumber = pageNumber == 0 ? carousel.pageCount : pageNumber;
    pageNumber = pageNumber < 0 ? pageNumber + carousel.pageCount : pageNumber;
  }
  carousel.pageNumber = pageNumber;
  var currentPage = $listItems.get(carousel.pageNumber - 1);

  // Set the current page to be active.
  $listItems.not(currentPage).removeClass('active');
  $(currentPage).addClass('active');
}

/**
 * AJAX callback for all jCarousel-style views.
 */
Drupal.jcarousel.ajaxResponseCallback = function(jcarousel, target, response) {
  if (response.debug) {
    alert(response.debug);
  }

  var $view = $(target);
  var jcarousel = $view.find('ul.jcarousel').data('jcarousel');

  // Add items to the jCarousel.
  $('ul.jcarousel > li', response.display).each(function(i) {
    var itemNumber = this.className.replace(/.*?jcarousel-item-(\d+).*/, '$1');
    jcarousel.add(itemNumber, this.innerHTML);
  });

  // Add Drupal behaviors to the content of the carousel to affect new items.
  Drupal.attachBehaviors(jcarousel.list.get(0));

  // Treat messages the same way that Views typically handles messages.
  if (response.messages) {
    // Show any messages (but first remove old ones, if there are any).
    $view.find('.views-messages').remove().end().prepend(response.messages);
  }
};

/**
 * Display error messages using the same mechanism as Views module.
 */
Drupal.jcarousel.ajaxErrorCallback = function (xhr, path) {
  var error_text = '';

  if ((xhr.status == 500 && xhr.responseText) || xhr.status == 200) {
    error_text = xhr.responseText;

    // Replace all &lt; and &gt; by < and >
    error_text = error_text.replace("/&(lt|gt);/g", function (m, p) {
      return (p == "lt")? "<" : ">";
    });

    // Now, replace all html tags by empty spaces
    error_text = error_text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");

    // Fix end lines
    error_text = error_text.replace(/[\n]+\s+/g,"\n");
  }
  else if (xhr.status == 500) {
    error_text = xhr.status + ': ' + Drupal.t("Internal server error. Please see server or PHP logs for error information.");
  }
  else {
    error_text = xhr.status + ': ' + xhr.statusText;
  }

  alert(Drupal.t("An error occurred at @path.\n\nError Description: @error", {'@path': path, '@error': error_text}));
};

Drupal.theme.prototype.jCarouselButton = function(type) {
  // Use links for buttons for accessibility.
  return '<a href="javascript:void(0)"></a>';
};

Drupal.theme.prototype.jCarouselPageLink = function(pageNumber) {
  return '<a href="javascript:void(0)"><span>' + (pageNumber) + '</span></a>';
};

})(jQuery);
;
