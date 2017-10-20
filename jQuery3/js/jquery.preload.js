/**
 * Created by rain on 2017/8/3.
 */

/**
 *为什么前面写分号
 *      避免前面代码没有分号,而产生错误,影响代码执行
 *
 * 为什么使用函数自调用,为什么将插件代码写在函数内部
 *      当js文件加载完成就立即调用函数
 *
 * 为什么jQuery传进函数,为什么使用$做参数名称,它和jQuery中的$有什么关系,不传jQuery,函数内部是否能使用$
 *      把jQuery全局对象作为实参传给$符号,可以在函数内部使用$符代表jQuery。可能其他插件或文件设置$不表示jQuery,而不能使用$表示jQuery
 *
 * 为什要对imgs做判断,
 *      图片可能有多张,也可能只有一张,所以进行一下判断,提高执行效率
 *
 *
 * 为什么要写Preload.DEFFAULTS默认值,默认值为什么赋值null
 *      避免调用函数未传参而产生错误而设置的默认值,默认值设置为null是
 *
 * 如果$.extend()只有一个参数, 是什么意思? 例如最后的$
 $.extend({
        preload: function (imgs, opts) {

            return new Preload(imgs, opts);
        }

    })
 */
;(function ($) {
    /**
     *
     */

    /** 加;, 为了避免插件前面的代码没有写;而产生错误, 造成无法执行插件代码*/
    function Preload(imgs,opts) {
    /**
     *
     */
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        //后面参数Preload覆盖前面对象
        this.opts = $.extend({} , Preload.DEFFAULTS, opts);
        // this.opts = $.extend({} , Preload.DEFFAULTS, opts ,opts2);
        /**jQuery.extend(target,[,obj1][,objN]);
         * target:一个对象,一个参数时,jQuery被当做对象
         * */

        this._loadImages();
        /***/
    }

    Preload.DEFFAULTS = {//大写属性DEFFAULTS表示一个插件的默认值
        each: null,
        all: null
    };

    Preload.prototype._loadImages = function () {
        /** */
        var imgs = this.imgs;
        /** 对象*/
        var opts = this.opts;
        var count = 0,
            length = imgs.length;

        $.each(imgs, function (index, src) {



            if (typeof src !== 'string') return;

            var imageObj = new Image();
            imageObj.src = src;


            $(imageObj).on('load', function () {

                opts.each && opts.each();

                count++;

                if (count === length) {
                    opts.all && opts.all();
                }

            });
        });

    };

    $.extend({
        preload: function (imgs, opts) {
            /** */
            return new Preload(imgs, opts);
        }
    });

})(jQuery);//函数加载完成变自调用