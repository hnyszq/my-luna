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
	get_cookie_sum = $.cookie('source_cookie_sum');//���ջ�ȡ����utm_sourceֵ
	//$("#adqudao").val(get_cookie_artiz);
	$('#adqudao').val(get_cookie_sum); 
	$('#adqudaoa').val(get_cookie_sum); 
	//alert($('#adqudaoa').val());
	///alert (get_cookie_artiz);
});  

function getUrlParam(name){  
    //����һ������Ŀ�������������ʽ����  
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
    //ƥ��Ŀ�����  
    var r = window.location.search.substr(1).match(reg);  
    //���ز���ֵ  
    if (r!=null) return unescape(r[2]);  
    return null;  
}  

