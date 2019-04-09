var path = require('path')
var logger_tag = path.basename(__filename).split(".")[0]
// var logger = require('./logger').getLogger(logger_tag)

/**
 * 中文转换
 * @param obj
 */
function getChinese(obj) {
    for (var k in obj) {
        if (typeof(obj[k]) == "object") {
            getChinese(obj[k]);
        } else if (typeof(obj[k]) == "string") {
            if (isChineseChar(obj[k])) {
                //obj[k] = toUnicode(obj[k]);
                obj[k] = encodeURI(obj[k]);
            }
        }
    }
}


/**
 * 是否中文
 * @param str
 * @returns {boolean}
 */
function isChineseChar(str) {
    var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
    return reg.test(str);
}


exports.fromQueryOrBody=(req, name, isTranscoding,isReplace)=> {
    //等有时间改一改这个方法。。。。。
    // logger.info(util.format("from query or body [name: %s]", name))
    var parmVal = req.query[name] || req.body[name];
    if (Number.isFinite(parmVal)) {
        return parmVal;
    }

    if (null == parmVal || "" == parmVal || "undefined" == parmVal || typeof(parmVal) == "undefined") {
        return "";
    }

    if (typeof(parmVal) == "string") {
        //过滤到恶意攻击
        if ((parmVal.indexOf("<") >= 0 || parmVal.indexOf("\\u003c") >= 0 || parmVal.indexOf("\\u003C") >= 0) && parmVal.indexOf("script") >= 0) {
            var this_val = parmVal.split("<");
            if (this_val.length <= 1) {
                this_val = parmVal.split("\\u003C");
                if (this_val.length <= 1) {
                    this_val = parmVal.split("\\u003c");
                }
            }
            parmVal = this_val[0];
        }

        if (null == isReplace || isReplace || undefined == isReplace) {
            parmVal = parmVal.replace("\\\\", "\\").replace("&", "&amp;")
                .replace("<", "&lt;").replace(">", "&gt;")
                .replace("\r", "\\r")
                .replace("\f", "\\f").replace("\b", "\\b");
        }
        if (null != isTranscoding && !isTranscoding) {
            return parmVal;
        }
        var type = 0;
        if (typeof(parmVal) == "string" && (parmVal.indexOf("[") >= 0 || parmVal.indexOf("{") >= 0 )) {
            try {
                parmVal = JSON.parse(parmVal);
                type = 1;
            } catch (e) {
            }
        }
        //如果是中文，转码
        if (typeof(parmVal) == "object") {
            for (var k in parmVal) {
                if (typeof(parmVal[k]) == "object") {
                    getChinese(parmVal[k])
                } else if (typeof(parmVal[k]) == "string") {
                    if (isChineseChar(parmVal[k])) {
                        //parmVal[k] = toUnicode(parmVal[k]);
                        parmVal[k] = encodeURI(parmVal[k]);
                    }
                }
            }
        }
        if (typeof(parmVal) == "string") {
            if (isChineseChar(parmVal)) {
                //parmVal[k] = toUnicode(parmVal[k]);
                parmVal = encodeURI(parmVal);
            }
        }

        if (type == 1) {
            parmVal = JSON.stringify(parmVal);
        }
    }


    return parmVal;
}