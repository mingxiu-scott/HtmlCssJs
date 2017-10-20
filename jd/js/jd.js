/**
 * Created by intern on 2017/7/31.
 */
$(document).ready(function () {
    $('#serach .sou .sousuo input.kuang').focus(function () {
        $(this).val("");
    });
    $('#serach .sousuo input.kuang').blur(function () {
        $(this).val('跨界');
    });
    /**京东小金库和七日年华图片定时切换*/
    var dhtuIndex = 0;
    setInterval(function () {

        /**链式语法
         * 每调用一次函数就返回当前获取到对象（单个元素或集合元素）,再继续调用后面的函数,并重复这个过程;
         * */
    $('#daohang .dhright .dhtu ul li').eq(dhtuIndex).addClass('on').siblings().removeClass('on');
        dhtuIndex = dhtuIndex?0:1;
        dhtuIndex = ++dhtuIndex==$('#daohang .dhright .dhtu ul li').length?0:++dhtuIndex;
    },2000);
    /**京东小金库和七日年化图片定时器切换结束*/

    /**轮播图*/
    var lbIndex = 0;
    var lbTimeId = setInterval(lunbo,2000);
    function lunbo() {
        //判断下标
        lbIndex = (lbIndex >= $('#main .mainleft .lunbo .pic li').length -1)?0:++lbIndex;
        currentImg(lbIndex);
    }
    //给大图片添加鼠标移入事件
    $('#main .mainleft .lunbo .pic li').mouseover(function () {
       clearInterval(lbTimeId);
    });
    //给大图添加鼠标移除事件
    $('#main .mainleft .lunbo .pic li').mouseout(function () {
        lbTimeId = setInterval(lunbo,2000);
    });
    //给轮播图标添加鼠标移入事件
    $('#main .mainleft .lunbo .nav li').mouseover(function () {
        clearInterval(lbTimeId);
        //给鼠标移除时,可以从当前图片的下一张图片开始轮播。
        lbIndex = $(this).index();
        currentImg($(this).index());
    });
    //根据下标,显示图片和伦布图片对应的标号
    function currentImg(index) {
        $('#main .mainleft .lunbo .pic li').eq(index).fadeIn().siblings().hide();
        $('#main .mainleft .lunbo .nav li').eq(index).addClass('on').siblings().removeClass('on');
    }


    /**浏览商品*/
    $('#main .mainleft .liulan .liuleft').hover(
        //鼠标移入是执行的函数,不冒泡
        function () {
            $('#main .mainleft .liulan .liuleft .lefttu').css({
                'background-position': '1px -6px',
                'background-image':'url(images/15.png)',
            });
            $(this).css('background-color','#f3f3f3');
        },
        //鼠标移出时执行的函数,不冒泡
        function () {
            $('#main .mainleft .liulan .liuleft .lefttu').css({
                'background-position': '-83px -51px',
                'background-image':'url(images/16.png)',
            });
            $(this).css('background-color','#fff');
        }
    );
    $('#main .mainleft .liulan .liuright').hover(
        //鼠标移入是执行的函数,不冒泡
        function () {
            $('#main .mainleft .liulan .liuright .righttu').css({
                'background-position': '5px -42px',
                'background-image':'url(images/15.png)',
            });
            $(this).css('background-color','#f3f3f3');
    },
    //鼠标移出时执行的函数,不冒泡
        function () {
            $('#main .mainleft .liulan .liuright .righttu').css({
                'background-position': '-50px -51px',
                'background-image':'url(images/16.png)',
            });
            $(this).css('background-color','#fff');
        }
    );

    var pageIndex = 0;
    var width = 606;
    ///////////给右按钮添加点击事件
    $('#main .mainleft .liulan .liuright').click(function () {
        pageIndex = (pageIndex>=3)?0:++pageIndex;
        $('#main .mainleft .liulan .liucenter ul').stop(1,1).animate({left:-pageIndex * width},8000);
        // $('#main .mainleft .liulan .liucenter ul').stop(0,0.5);
    });

    $('#main .mainleft .liulan .liuleft').click(function () {
        pageIndex = (pageIndex<=0)?3:--pageIndex;
        $('#main .mainleft .liulan .liucenter ul').stop(0,1).animate({left:-pageIndex * width});
    });
    /**浏览商品结束*/

    /**图标区*/
    var swi = 0;

    $('#main .mainright .tubiao ul li.xiala').mouseover(function () {

        if(swi==0){$(this).parent().animate({top:'-168'});}
        else {swi=0;}
        aaa($(this).index());
    });

    /****** *******/
    $('#main .mainright .tubiao ul .tubiaola .c_main .box').click(function () {

        $('#main .mainright .tubiao ul').animate({top:'0'});
        swi = 1;
    });

    /** ***************/
    $('#main .mainright .tubiao ul .tubiaola .close_menu ul li').mouseover(function () {

        aaa($(this).index());

    });
    /**根据下标切换不同模块*/
    function aaa(index) {
        $('#main .mainright .tubiao ul .tubiaola .c_main .box').eq(index).fadeIn().siblings().hide();
        $('#main .mainright .tubiao ul .tubiaola .close_menu ul li').eq(index).css('border-bottom','none').siblings().css('border-bottom','1px solid #ccc');
    }
    /**图标区域结束*/

    /** 商品展示区***********/

    $('#lifewindow .lifemain > div').each(function (index) {
        if(index<8) {
            $(this).hover(
                function () {
                    $(this).children('img').animate({left: -10});
                },
                function () {
                    $(this).children('img').animate({left: 0});
                }
            );
        }
    });
    /** ***********/

    /** 滑块移动***********/
    function huakuaimove(floorId,th) {
        $('.huakuai').css('left',th.index()*158+'px');
        th.children('h3').css('color','#e4393c');
        th.siblings('li').children('h3').css('color','black');

        $(floorId+' .onemain .cent1').eq(th.index()).fadeIn().siblings().hide();
    }
    $('#onefloor .one_top ul li').mouseover(function () {

        $('.huakuai').css('left',$(this).index()*158+'px');
        $(this).children('h3').css('color','#e4393c');
        $(this).siblings('li').children('h3').css('color','black');

        $('#onefloor .onemain .cent1').eq($(this).index()).fadeIn().siblings().hide();
    });
    $('#twofloor .one_top ul li').mouseover(function () {

        $('.huakuai').css('left',$(this).index()*158+'px');
        $(this).children('h3').css('color','#e4393c');
        $(this).siblings('li').children('h3').css('color','black');

        $('#twofloor .onemain .cent1').eq($(this).index()).fadeIn().siblings().hide();
    });
    // $('#threefloor .one_top ul li').mouseover(function () {
    //
    //     $('.huakuai').css('left',$(this).index()*158+'px');
    //     $(this).children('h3').css('color','#e4393c');
    //     $(this).siblings('li').children('h3').css('color','black');
    //
    //     $('#threefloor'+' .onemain .cent1').eq($(this).index()).fadeIn().siblings().hide();
    // });
    $('#threefloor .one_top ul li').mouseover(function () {
        huakuaimove('#threefloor',$(this));
    });



    /** 轮播图************/
    $('#onefloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function () {
        var index = $(this).index();
        var img_left = index*473;
     $(this).css('background','#7abd54').siblings().css('background','#ccc');
        // $('#onefloor .onemain .maincenter .cent1 .cenlunbo .luntu').css('left',(-$(this).index()*473)+'px');
        $('#onefloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate({left:-img_left});

    });

    /** 热门晒单*************/
    setInterval(function () {
        var $ul = $('#hot .hotleft .shaidan .shaimain ul');
        //
        $ul.children().last().css('height','0px');

        //将最后一个列表项添加到列表容器的第一个位置
        $ul.prepend($ul.children().last());

        //姜此时列表容器中的第一个列表项的高度变为80px;
        $ul.children().first().animate({height:80},500);

    },2000);
});
