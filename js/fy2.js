/**
 * Created by web-01 on 2018/7/23.
 */
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
            function move() {
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
                function () {
                    clearInterval(timer);
                    timer = null;
                }, function () {
                    autoMove();
                }
            );
            var $spanLeft = $("[data-move=left]"),
                $spanRight = $("[data-move=right]");
            // console.log($spanRight);
            $spanRight.click(function (e) {
                // console.log(1);
                e.preventDefault();
                if (!$ulImgs.is(":animated"))
                    move();
            });
            $spanLeft.click(function (e) {
                // console.log(2);/
                e.preventDefault();
                if (moved == 0) {
                    moved = products.length;
                    $ulImgs.css("left", -LIWIDTH * moved);
                }
                moved--;
                $ulImgs.animate({
                    left: -moved * LIWIDTH
                }, interval)
            })
        }
    })
})
// 小轮播
$(function () {
    var $ulImg = $("[data-toggle=bannerImg]");
    var $ula = $("[data-toggle=get]");
    var $y = $("[data-toggle=hover]");
    var LIWIDTH = 378, interval = 500, wait = 3000, moved = 0, timer = null;
    $.ajax({
        type: "get",
        url: "data/index/getCarousel_2.php",
        dataType: "json",
        success: function (products) {
            var html = "";
            for (var {href, img} of products) {
                html += `<li>
              <a href="${href}">
                <img src="${img}">
              </a>
            </li>`;
            }
            html += `<li>
              <a href="${products[0].href}" >
                <img src="${products[0].img}">
              </a>
            </li>`;
            $ulImg.html(html)
                .css("width", LIWIDTH * (products.length + 1));
            $ula.html("<a href=''>1</a><a href=''>2</a><a href=''>3</a><a href=''>4</a><a href=''>5</a>")
                .on("click", "a", function (e) {
                    // console.log(1);
                    e.preventDefault();
                    var $a = $(this);
                    moved = $a.index();
                    $ulImg.stop(true).animate({
                        left: -moved * LIWIDTH
                    }, interval, function () {
                        $a.css("background", "#E4393C")
                            .siblings().css("background", "#999")
                    });
                }).children(":first-child").css("background", "#E4393C").siblings().css("background", "#999");
            function autoMove() {
                timer = setInterval(function () {
                    moved++;
                    $ulImg.animate({
                        left: -moved * LIWIDTH
                    }, interval, function () {
                        if (moved == products.length) {
                            moved = 0;
                            $ulImg.css("left", 0);
                        }
                        $ula.children(":eq(" + moved + ")")
                            .css("background", "#E4393C").siblings().css("background", "#999");
                    })//动画持续3s
                }, wait + interval)//每隔3.5s
            };
            autoMove();
            $y.hover(
                function () {
                    clearInterval(timer);
                    timer = null;
                }, function () {
                    autoMove();
                })
        }
    })

})
 // 点击隐藏
 $(function(){
     var $a2=$("#a2");
     var $a1=$("#a1");
     var $img=$(".hd_img");
     var $font=$(".ycwz");
     // $font.click(function(){
     //     console.log(2);
     // })
     $a2.click(function() {
         // console.log(1);
         $a2.addClass("hover").siblings().removeClass("hover");
         $img.css("display","none");
         $font.css("display","block")
     }),
     $a1.click(function() {
         // console.log(1);
         $a1.addClass("hover").siblings().removeClass("hover");
         $img.css("display","block");
         $font.css("display","none")
     })
 })