var typer = (function() {
    var TO_BE_DEFINED_BY_YOU
    return {
        isNumber: function (item) {
            try {
                item.toExponential();
                if (isNaN(item)) {return false;}
                return true;
            }
            catch (e) {return false};
        },
        isString: function (item) {
            if (item.constructor == "function String() { [native code] }") {return true;}
            else return false;
        },
        isArray: function (item) {
            try {
                item.map(function () {
                    return item * 2
                });
                return true;
            }
            catch (e) {return false;}
        },
        isFunction: function (item) {
            try {
                item.call();
                return true;
            }
            catch (e) {
                return false;
            }
        },
        isDate: function (item) {
            try {
                item.getDate();
                return true;
            }
            catch (e) {
                return false;
            }
        },
        isRegExp: function (item) {
            try {
                item.test("");
                return true;
            }
            catch (e) {
                return false;
            }
        },
        isBoolean: function (item) {
            if ((typeof item === "boolean") || (item.valueOf() === true) || (item.valueOf() === false) ) {return true;}
            else {return false;}
        },
        isError: function (item) {
            if (item instanceof Error) { return true; }
            else {return false;}

        },
        isNull: function (item) {
            if (item == null) {return true;}
            else return false;
        },
        isUndefined: function (item) {
            if (typeof(item) == "undefined") {return true;}
            else return false;
        }
    };
}(null));

console.log(typer.isBoolean(new Boolean()));