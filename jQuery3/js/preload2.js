/**
 * Created by intern on 2017/8/4.
 */

$(function () {
    // var imgs = [
    //     'http://img2.imgtn.bdimg.com/it/u=1724337809,3334736965&fm=26&gp=0.jpg',
    //     'http://img4.imgtn.bdimg.com/it/u=2478348785,905143055&fm=26&gp=0.jpg',
    //     'http://img3.imgtn.bdimg.com/it/u=2917191212,3271723673&fm=26&gp=0.jpg',
    //     'http://img1.imgtn.bdimg.com/it/u=1884738033,3459235394&fm=26&gp=0.jpg'
    // ];
    //
    // var index = 0;
    // var count = 0;
    // //点击按钮之前,加载图片
    //
    // //遍历数组
    // $.each(imgs,function (index) {
    //
    //     //创建Image对象
    //     var imgObj = new Image();
    //     //给image对象的src属性赋值
    //     imgObj.src = imgs[index];
    //
    //     //之后可以利用这个Image对象,判断图片是否加载完成
    //     $(imgObj).on('load',function () {
    //         count++;
    //
    //         //计算当前速度
    //         var pro = Math.round((count / imgs.length)*100) + "%";
    //         $('.loading .progress').html(pro);
    //
    //         //当count等于图片数量时,证明加载完成。
    //         if(count == imgs.length){
    //             $('.loading').hide();
    //         }
    //     })
    //
    // });

    /**点击button时,替换图片的路径*/
    $('#box .btn').on('click',function () {

        //如果data-control的属性值为prev,则代表点击的事上一页按钮
        if($(this).data('control') === 'prev'){
            /**返回较大值*/
            index = Math.max(0,--index);
            var src = imgs[index];
            $('#box .bigImg').attr('src',src);
        }

        else if($(this).data('control') === 'next'){
            index = Math.min(imgs.length-1,++index);
            var src = imgs[index];
            //设置图片src的属性值
            $('#box .bigImg').attr('src',src);
        }

        //
        $('title').html( (index+1) + '/' + imgs.length);
        var src = imgs[index];
        $('#box .bigImg');
    });
});