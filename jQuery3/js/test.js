/**
 * Created by intern on 2017/8/2.
 */
;(function ($) {
    function Preload(imgs,opts) {
        this.imgs = (typeof imgs === 'string')?[imgs]:imgs;
        this.opts = $.extend({},Preload.DEFFAULTS,opts);
        this._loadImages();
    }
    Preload.DEFFAULTS = {
        each:null,
        all:null
    };
    Preload.prototype._loadImages =function () {
        var imgs = this.imgs;
        var opts = this.opts;
        var count =0,
            length = imgs.length;
        $.each(imgs,function (index,src) {
            if( typeof src !=='string')return;
            var imageObj = new Image();
            imageObj.src = src;
            $(imageObj).on('load',function () {
                count ++;
                opts.each && opts.each(count,length);
                if(count===length){
                    opts.all && opts.all(count,length);
                }
            });
        });
    }
    $.extend({
        preload:function (imgs,opts) {
            return new Preload(imgs,opts);
        }
    });
})(jQuery);
