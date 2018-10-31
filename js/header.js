/**
 * Created by web-01 on 2018/7/9.
 */
$("div.nav>ul>li").hover(function(){
    var $li=$(this);
    $li.children(":first-child").children(":last-child").toggleClass("span");
    // $li.children(":first-child").children(":first-child").toggleClass("a");
})
