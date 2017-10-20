
/**
 * Created by intern on 2017/7/31.
 */

$(document).ready(function () {
    var swi = 0;
    $('#main .mainright .tubiao ul li.xiala').mouseover(function () {
        if(swi==0){
            $(this).parent().animate({left:-168,});
        }
        else{swi=0;}
        aaa($(this).index());
    });

});