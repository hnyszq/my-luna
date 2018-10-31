$(".kezhao>a").hover(function(){
    var $a=$(this);
    $a.children(":last-child").toggleClass("span_1").toggleClass("span_2");
})
///****轮播****//
$(function () {
    var $ulImgs = $("[data-load=bannerImgs]");
    var $banner = $("[data-load=banner]");
    var LIWIDTH = 1920, interval = 500, wait = 3000, moved = 0, timer = null;
    $.ajax({
        type: "get",
        url: "data/index/getCarousel.php",
        dataType: "json",
        success: function (products) {
            var html = "";
            for (var {href, img, title} of products) {
                html += `<li>
              <a href="${href}">
                <img src="${img}">
              </a>
            </li>`;
            }
            html += `<li>
              <a href="${products[0].href}">
                <img src="${products[0].img}">
              </a>
            </li>`;
            $ulImgs.html(html)
                .css("width", LIWIDTH * (products.length + 1));
            function move(){
                moved++;
                $ulImgs.animate({
                    left: -moved * LIWIDTH
                }, interval, function () {
                    if (moved == products.length) {
                        moved = 0;
                        $ulImgs.css("left", 0);
                    }
                })
            }
            function autoMove() {
                timer = setInterval(function () {
                    move();
                }, wait + interval)
            }
            autoMove();
            $banner.hover(
                function(){
                    clearInterval(timer);
                    timer=null;
                },function(){
                    autoMove();
                }
            );
            var $spanLeft=$("[data-move=left]"),
                $spanRight=$("[data-move=right]");
            console.log($spanRight);
            $spanRight.click(function(e){
                e.preventDefault();
                // console.log(1);
                if(!$ulImgs.is(":animated"))
                    move();
            });
            $spanLeft.click(function(e){
                // console.log(2);
                e.preventDefault();
                if(moved==0){
                    moved=products.length;
                    $ulImgs.css("left",-LIWIDTH*moved);
                }
                moved--;
                $ulImgs.animate({
                    left:-moved*LIWIDTH
                },interval)
            })
        }
    })
})
/////////左挂件////////
$(function(){
    var $a=$("#zuoguajian>a");
    $a.click(function(e){
        e.preventDefault();
        console.log(1);
        $a.parent().css("left","-140px");
        console.log(2)
    })
})
////////右挂件/////////////
$(function(){
    var $div=$("#youguajian");
    $div.click(function(e){
        e.preventDefault();
        console.log(4);
        $div.css("opacity","0")
    })
})