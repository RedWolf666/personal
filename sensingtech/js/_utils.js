window._utils = (() => {
    /**
    * 作用：将类数组转化为数组
    * 部分浏览器不支持ES6
    */
    let _toArray = () => {
        try {
            return Array.from(arguments)
        } catch (e) {
            let arr = []
            for (let i = 0; i < arguments.length; i++) {
                arr[length] = arguments[i]
            }
            return arr
        }
    }
    /**
    * 作用：将JSON字符串转化为JSON对象
    * IE8以下没有window下没有JSON静态方法，做适配
    */
    let _toJSON = (data) => {
        return 'JSON' in window?JSON.parse(data):eval(`${data}`)
    }
    /**
    * 作用：获取、设置浏览器窗口的盒模型属性
    * 不同浏览器的适配
    */
    let _windowBox = (attr,val) => {
        if(typeof(val)=='undefined')  
        {
            return document.documentElement[attr]||document.body[attr]
        }
        document.documentElement[attr]=document.body[attr]=val
    }
    /**
    * 作用：获取当前元素距离body 左偏移和上偏移
    */
    let _offsetLeft = (obj) => {
        if(obj.offsetParent.nodeName=='BODY')
        {
            return obj.offsetLeft
        }
        return obj.offsetLeft+obj.offsetParent.clientLeft+_offsetLeft(obj.offsetParent)
    } 
    let _offsetTop = (obj) => {
        if(obj.offsetParent.nodeName=='BODY')
        {
            return obj.offsetTop
        }
        return obj.offsetTop+obj.offsetParent.clientTop+_offsetTop(obj.offsetParent)
    }
    let _offset = (obj) => {    
        return {
            left:_offsetLeft(obj),
            top:_offsetTop(obj)
        }
    }
    let _offset1 = (obj) => {
        let left = obj.offsetLeft
        let top = obj.offsetTop
        while(obj.offsetParent&&obj.offsetParent.nodeName!=='BODY')
        {
            left+= obj.offsetParent.offsetLeft+obj.offsetParent.clientLeft
            top+= obj.offsetParent.offsetTop+obj.offsetParent.clientTop
            obj = obj.offsetParent
        }
        return {
            left:left,
            top:top
        }
    } 
    let _getUrlParams = (url) => {
        let reg = /([^&+?]+)=([^&=?]+)/g
        let params = {}
        url.replace(reg,(...rest) => {
            params[rest[1]] = rest[2]
        })
        return params
    }
    let _getStyle = function (ele, attr) {
      var val = ''
      if (window.getComputedStyle) { // 标准浏览器
        val = window.getComputedStyle(ele, null)[attr]
      } else { // IE6 - 8
        if (attr === 'opacity') {
          // "alpha(opacity=10)" 10
          var reg = /alpha\(opacity=(.+)\)/;
          let op = ele.currentStyle['filter']
          val = reg.test(op) ? reg.exec(op)[1] / 100 : 1
        } else {
          val = ele.currentStyle[attr]
        }
      }
      //去单位处理
      var reg = /^[-+]?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem|%)?/
      reg.test(val)&&(val = parseFloat(val))
      return val
    }
    let _setStyle = function(obj,attr,value){
        if(attr === 'opacity')
        {
            obj.style[attr] = value
            obj.style.filter = 'alpha(opacity='+value*100+')'
            return
        }
        //自动加单位

        var reg = /(width|height)|(margin|padding)|(top|left|right|bottom)?/i
        
        if(reg.test(attr)){
           !isNaN(value)&&(value +='px')
        }
        obj.style[attr] =value
    }
    let _setStyleBatch = function(ele,obj){
        if(typeof obj != 'object') return
        for(var attr in obj)
        {
            if(obj.hasOwnProperty(attr))
            {
                _setStyle(ele,attr,obj[attr])
            }
        }
    }
    let _css = function(ele,param,val){
        if(typeof param==='object')
        {
            _setStyleBatch(ele,param)
            return
        }
        //第二个参数是字符串并且没有第三个参数，说明获取css
        if(typeof param==='string' && typeof val === 'undefined')
        {
            return _getStyle(ele,param)
        }
        //有第三个参数，并且不是undefined，说明是单独设置样式
        if(typeof val !== 'undefined'){
            _setStyle(ele, param, val)
        }
    }
    let _$ = function(id){
        return document.getElementById(id)
    }
    let _queryIndex = (ele) => {
        //先获取他的所有哥哥，有几个哥哥他的索引就是几
        let arr = []
        let pre = ele.previousElementSibling
        white(pre)
        {
            arr.unshift(pre)
            pre = ele.previousElementSibling
        }
        return arr.length
    }
    return {
        _toArray,
        _toJSON,
        _windowBox,
        _offset,
        _offset1,
        _getStyle,
        _setStyle,
        _setStyleBatch,
        _css,
        _$,
        _queryIndex
    }
})()
