/**
 * Created by web-01 on 2018/6/28.
 */
$(".main_right>div").hover(function () {
    var $a = $(this);
    $a.children().children(":last-child").toggleClass("back").toggleClass("pan");
});
$(".kezhao>a").hover(function () {
    var $a = $(this);
    $a.children(":last-child").toggleClass("span_1").toggleClass("span_2");
})
/********************预定电话************************/
$(function () {
    var $ul = $("[data-load=pho]");
    i = -95;
    setInterval(function () {
        $ul.animate({
            top: i
        }, 8000, function () {
            if (i == -95) {
                $ul.css("top", 0);
            }
        });
    }, 500);
})
////////////////////轮播图片///////////////////////////
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
///////////////////////////小轮播//////////////////////////
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
/////////////////////////特色轮播///////////////////////
$(function () {
    var $ulImgs = $("[data-load=tslb]");
    var $banner = $("[data-load=banner]");
    var $xlb = $("[data-ul=xlb]");
    var LIWIDTH = 974, interval = 500, wait = 3000, moved = 0, timer = null;
    $.ajax({
        type: "get",
        url: "data/index/getCarousel_3.php",
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
            $xlb.html("<li> <a href='#'><img src='img/1-1fs11u945351.jpg'></a></li> <li> <a href='#'><img src='img/1-1fr915324r40.jpg'></a></li> <li> <a href='#'><img src='img/1-16062119542y92.jpg'></a></li> <li> <a href='#'><img src='img/1-160622154f2546.jpg'></a></li> <li> <a href='#'><img src='img/1-160622163510u6.jpg'></a></li>")
                .on("click", "li>a>img", function (e) {
                    e.preventDefault();
                    // console.log(1);
                    var $img = $(this);
                    moved = $img.parent().parent().index();
                    // console.log(88)
                    $ulImgs.stop(true).animate({
                        left: -moved * LIWIDTH
                    }, interval, function () {
                        $img.addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
                        // console.log($img.parent().parent().siblings().children(0).children());
                    });

                })
                .children(":first-child").children().children().addClass("xlb");
            // .parent().parent().next().children(":first-child").children(0).removeClass("xlb");
            function move() {
                moved++;
                $ulImgs.animate({
                    left: -moved * LIWIDTH
                }, interval, function () {
                    if (moved == products.length) {
                        moved = 0;
                        $ulImgs.css("left", 0);
                    }
                    $xlb.children().children().children(":eq(" + moved + ")").addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
                    // console.log($xlb.children(0).children(0).children(":eq("+moved+")").parent().parent().siblings().children(0).children(0));
                })
            }

            // <li><a href="#"><img src="img/1-1fr915324r40.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-16062119542y92.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-160622154f2546.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-160622163510u6.jpg" alt=""></a></li>");
            function autoMove() {
                timer = setInterval(function () {
                    move();
                }, wait + interval)
            }

            autoMove();
            ///动画悬停
            $("#ting").hover(function () {
                    clearInterval(timer);
                    timer = null;
                }, function () {
                    autoMove();
                }
            );
            //鼠标点击
            var $xlbL = $("[data-xlb=left]");
            var $xlbR = $("[data-xlb=right]");
            // console.log($xlbR);
            $xlbR.click(function () {
                // console.log(1);
                if (!$ulImgs.is(":animated"))
                    move();
            });
            $xlbL.click(function () {
                console.log(2);
                if (moved == 0) {
                    moved = products.length;
                    $ulImgs.css("left", -LIWIDTH * moved);
                }
                moved--;
                $ulImgs.animate({
                    left: -moved * LIWIDTH
                }, interval, function () {
                    $xlb.children(":eq(" + moved + ")").children().children().addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
                    // console.log($xlb.children(":first-child").children().children().parent().parent().next().children(":first-child").children(0));
                });
            })

        }
    })
})
/////////////////特写小轮播////////////////////
// function tark(){
//     var img=document.querySelector(".ts_xlb>ul>li>a>img.xlb");
//      img.className="";
//
//      if(img.parentNode.parentNode.nextElementSibling!=null){
//         img.parentNode.parentNode.nextElementSibling.children[0].children[0].className="xlb";
//      }else{
//          img.parentNode.parentNode.parentNode.children[0].children[0].children[0].className="xlb";
//      }
// }
// setInterval(tark,3500);
/////////左挂件////////
$(function () {
    var $a = $("#zuoguajian>a");
    $a.click(function (e) {
        e.preventDefault();
        console.log(1);
        $a.parent().css("left", "-140px");
        console.log(2)
    })
})
////**右挂件***************///
$(function () {
    var $div = $("#youguajian");
    $div.click(function (e) {
        e.preventDefault();
        console.log(4);
        $div.css("opacity", "0")
    })
})
