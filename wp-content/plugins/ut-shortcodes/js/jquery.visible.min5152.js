
(function(a){a.fn.visible=function(k,j){var h=a(this).eq(0),m=h.get(0),e=a(window),d=e.scrollTop(),g=d+e.height(),l=h.offset().top,i=l+h.height(),c=k===true?i:l,b=k===true?l:i,f=j===true?m.offsetWidth*m.offsetHeight:true;return !!f&&((b<=g)&&(c>=d))}})(jQuery);