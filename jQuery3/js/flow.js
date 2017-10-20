/**
 * Created by intern on 2017/8/2.
 */

$(function () {//
    //设置每一列的宽度
    var liwidth = 200;

    //设置图片的间距（左右间距和上下间距相同）
    var lispace = 20;

    //设置数组,储存每一列当前的高度。
    var columnHeightArr = [];//此时columnHeightArr是空数组;没有任何值,甚至连下标都没有定义。

    //循环,创建图片,添加到ul中
    for(var i = 0 ;i<98;i++){
        //设置图片路劲字符串
        var imgSrc = 'images/'+i+'.jpg';
        var createLi = $('<li><img src="'+imgSrc+'" alt=""></li>');
        $('#flow').append(createLi);
    }

    flowInit();
    //设置瀑布流初始设置
    function flowInit() {
        //获取页面可以放下多少列

        //获取页面的宽度
        var bodywidth = $('body').width();

        //Math.floor（）取整
        var columnCount = Math.floor(bodywidth/(liwidth+lispace));

        //设置数组长度
        columnHeightArr.length = columnCount;

        //给数组中的每个元素设置一个默认值
        columnHeightArr.fill(lispace);

        //计算ul的宽度,
        var ulWidth = columnCount * (liwidth + lispace) - lispace;
        $('#flow').width(ulWidth);
    }


    /**
     *
     * resize是窗口大小改变的时候触发事件
     *
     * */
    $(window).on('resize',function () {
        /**重新初始值设置*/
        flowInit();
        $('#flow > li').each(function () {
            layoutLi($(this));
        });
    });
function layoutLi(liEle) {
    var minIndex = 0;
    var minValue = columnHeightArr[0];
    //首先从数组中获取到最小的列高的下标
    $.each(columnHeightArr,function (index,value) {
        /**
         * columnHeightArr代表的是便利的数组或集合
         * functtion(index,value)代表的是遍历时执行的方法
         *  index 代表当前元素的下标
         *  value 代表的是当前元素的值
         *
         *  $.each 是全局变量jquery下的方法。
         *
         *  .each() 是jquery对象的方法。*/

        /**找出最小列高*/
        if(value<minValue){
            minValue = value;
            minIndex = index;
        }
    });

    /**计算 left 和 top 的值*/
    var liLeft = minIndex * (liwidth + lispace) + 'px';
    var liTop = columnHeightArr[minIndex] + 'px';

    //获取当前img元素的父元素li元素,设置他的 left 和 top 值
    liEle.css({
        'left':liLeft,
        'top':liTop,
    });

    //更新图片所在咧的高度
    columnHeightArr[minIndex] += liEle.height() + lispace;
}

    // 对图片进行布局
    // on()可以添加一个或多个事件.

    $('#flow > li >img').on('load',function () {

        layoutLi($(this).parent());
        /**设置变量存储最小列高的下标和值*/
        // var minIndex = 0;
        // var minValue = columnHeightArr[0];
        // //首先从数组中获取到最小的列高的下标
        // $.each(columnHeightArr,function (index,value) {
        //     /**
        //      * columnHeightArr代表的是便利的数组或集合
        //      * functtion(index,value)代表的是遍历时执行的方法
        //      *  index 代表当前元素的下标
        //      *  value 代表的是当前元素的值
        //      *
        //      *  $.each 是全局变量jquery下的方法。
        //      *
        //      *  .each() 是jquery对象的方法。*/
        //
        //     /**找出最小列高*/
        //     if(value<minValue){
        //         minValue = value;
        //         minIndex = index;
        //     }
        // });
        //
        // /**计算 left 和 top 的值*/
        // var liLeft = minIndex * (liwidth + lispace) + 'px';
        // var liTop = columnHeightArr[minIndex] + 'px';
        //
        // //获取当前img元素的父元素li元素,设置他的 left 和 top 值
        // $(this).parent('li').css({
        //     'left':liLeft,
        //     'top':liTop,
        // });
        //
        // //更新图片所在咧的高度
        // columnHeightArr[minIndex] += $(this).parent('li').height() + lispace;

    });
});