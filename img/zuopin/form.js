$(document).ready(function(){  
    //alert('a');
	get_cookie_sum = $.cookie('source_cookie_sum');
	
	if($.cookie("source_cookie_sum") == null){
	     url_source_sum= getUrlParam('utm_source');
		 $.cookie('source_cookie_sum', url_source_sum);  
	}else{
	     url_source_sum = getUrlParam('utm_source');
		 if(url_source_sum != null){
			 if(url_source_sum!=get_cookie_sum){
				  $.cookie('source_cookie_sum', url_source_sum);
			 }
		 }
	}
	get_cookie_sum = $.cookie('source_cookie_sum');//最终获取到的utm_source值
	//$("#adqudao").val(get_cookie_artiz);
	$('#adqudao').val(get_cookie_sum); 
	$('#adqudaoa').val(get_cookie_sum); 
	//alert($('#adqudaoa').val());
	///alert (get_cookie_artiz);
});  

function getUrlParam(name){  
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);  
    //返回参数值  
    if (r!=null) return unescape(r[2]);  
    return null;  
}  

