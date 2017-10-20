/**
 * Created by intern on 2017/8/2.
 */

$(function () {
    var liwidth = 200;
    var lispace = 20;
    var columnHeightArr = [];
    for(var i=0 ;i<98;i++){
        var srcImg = 'images/'+i+'.jpg';
        var creatLi = $('<li><img src="'+srcImg+'" alt=""></li>');
        $('#flow').append(creatLi);
    }
   flowInit();
    function flowInit() {
        var bodyWidth = $('body').width();
        var columnCount = Math.floor(bodyWidth/(liwidth+lispace));
        columnHeightArr.length = columnCount;
        columnHeightArr.fill(lispace);
        var ulWidth = columnCount*(lispace+liwidth)-lispace;
        $('#flow').width(ulWidth);
    }
    $(window).on('resize',function () {
       flowInit();
        $('#flow >li').each(function () {
            layoutLi($(this));
        });
    });
    function layoutLi(li) {
        var minIndex = 0;
        var minValue = columnHeightArr[0];
        $.each(columnHeightArr,function (index,value) {
            if(value<minValue){
                minValue = value;
                minIndex = index;
            }
        });
        var Left = minIndex * (liwidth+lispace)+'px';
        var Top = columnHeightArr[minIndex] +'px';
        li.css({
            'left':Left,
            'top':Top
        });
        columnHeightArr[minIndex] += li.height()+lispace;
    }
    $('#flow > li >img').on('load',function () {
        layoutLi($(this).parent());
    });
});