/**
 * Created by rain on 2017/8/3.
 */

/**
 * 加;, 为了避免插件前面的代码没有写;而产生错误, 造成无法执行插件代码
 *
 *
 * 把jQuery 通过参数传递给插件, 避免和外界代码产生冲突.
 * 参数名称为 $, 但是和jQuery的别名$ 不相同. 参数$只在此函数内部有作用.
 * */

/**
 * 1. 为什么前面写 ; ?
 * 2. 为什么使用函数自调用?
 *      为什么将插件代码写在函数内部?
 *      为什么自调用?
 *
 * 3. 为什么要将jQuery传进函数, 为什么使用$做参数名称, 它和jQuery中的$是什么关系? 不传jQuery, 函数内部是否能使用$?
 *
 *
 * 4. 为什么要对imgs做判断?
 *
 *
 * 5. 为什么要写 Preload.DEFFAULTS 默认值, 默认值为什么赋值为null?
 *
 *
 * 6. $.extend({}, Preload.DEFFAULTS, opts); 为什么第一个参数要写{},
 *
 *      不写第一个参数, 返回值也是正确的啊?
 *
 *
 *
 * 7. 如果$.extend()只有一个参数, 是什么意思? 例如最后的$.extend({
        preload: function (imgs, opts) {

            return new Preload(imgs, opts);
        }

    })


 * 8. opts.each && opts.each(); 这条语句是什么含义?
 *
 *
 *
 * 9. 为什么返回新创建的Preload的实例对象?
 *
 * */


;(function ($) {

    /**
     *
     * @param imgs
     * @param opts
     * @constructor
     */
    function Preload(imgs, opts) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, Preload.DEFFAULTS, opts);
        this._loadImages();
    }
    Preload.DEFFAULTS = {
        each: null,
        all: null
    };
    Preload.prototype._loadImages = function () {
        var imgs = this.imgs;
        var opts = this.opts;
        var count = 0,
            length = imgs.length;
        $.each(imgs, function (index, src) {
            if (typeof src !== 'string') return;
            var imageObj = new Image();
            imageObj.src = src;
            $(imageObj).on('load', function () {
                count++;
                opts.each && opts.each(count, length);

                if (count === length) {
                    opts.all && opts.all(count, length);
                }

            });
        })
    };
    $.extend({
        preload: function (imgs, opts) {
             return new Preload(imgs, opts);
        }
    })
})(jQuery);