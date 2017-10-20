/**
 * Created by intern on 2017/7/27.
 */
var EventHandle = {
    addEventHandle: function (element, type, handle) {
        if (element.addEventHandle) {
            element.addEventHandle(type, handle, false);
        }
        else if (element.attachEvent) {
            element.attachEvent("on " + type, handle);
        }
        else {
            element['on' + type] = handle;
        }
    },

    removeEventHandle: function (element, type, hangle) {
        if (element.removeEventHandle) {
            element.removeEventHandle(type, hangle, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, hangle);
        }
        else {
            element['on' + type] == null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {

        return event.target || event.srcElement;

    },
    /**
     * 取消默认事件
     * @param event
     */
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     * 取消事件冒泡
     * @param event
     */

    stop : function (event) {

        if(event.stopPropagation){
            //取消事件冒泡
            event.stopPropagation();
        }else{
            //IE的取消事件冒泡
            event.cancelBubble = true;
        }
    }
};
