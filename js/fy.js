/**
 * Created by web-01 on 2018/7/22.
 */
$(function(){
    var $span=$(".a6");
    var $ul=$(".yc");
    var timer = null;
    $span.mouseover(function(){
        $ul.css("display","block");
    })
    $span.mouseout(function(){
        timer = setTimeout(function(){
            $ul.css("display","none");
        },500)
    })
    $ul.mouseover(function(){
        clearTimeout(timer);
        timer = null;
        $ul.css("display","block");
    })
    $ul.mouseout(function(){
        timer = setTimeout(function(){
            $ul.css("display","none");
        },500)
    })
});