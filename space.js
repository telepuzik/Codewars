if (!MyNamespace) {
    var MyNamespace = {};
}
MyNamespace.MyClass = function (a) {
    this.sayHello = function() {
        return a;
    }
}


var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'

var a = new MyNamespace.MyClass("Hello");
//console.log(phrase);


var Foo = function(value) {
    this.val = value;
}

Foo.prototype.valueOf = function () {
    return this.val;
}

var foo = new Foo(2);     // foo.val = 2;
var boo = new Foo(3);    // boo.val = 3;

//console.log(foo + boo);


var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!')}
    // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
    if ((typeof (obj.sayHoHoHo) === "function") && (typeof (obj.distributeGifts) === "function") && (typeof (obj.goDownTheChimney) === "function") )  {
        return true;
    }
    return false;
}

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE

function getSlope(p1, p2) {
    var a = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    if (isNaN(a)) {return null}
    return a;
}

//console.log(getSlope([2,2], [2,2]));

function Counter(){
    this.a = 0;
}

Counter.prototype.incr = function() {
    this.a++;
}

Counter.prototype.valueOf = function() {
    return this.a
}

var c = new Counter();
//console.log(c.incr()); // counter is now at 1
//console.log(c + 1); // 2
//console.log(c > 1); // false
//console.log(c > 0); // true
//c == 1; // true
//Math.sqrt(c); // 1


function zero(a) {
    if (!a) { return "0"; }
    else {
        a = "0" + a;
        return eval(a);
    }
}
function one(a) {
    if (!a) { return "1"; }
    else {
        a = "1" + a;
        return eval(a);
    }
}
function two(a) {
    if (!a) { return "2"; }
    else {
        a = "2" + a;
        return eval(a);
    }
}
function three(a) {
    if (!a) { return "3"; }
    else {
        a = "3" + a;
        return eval(a);
    }
}
function four(a) {
    if (!a) { return "4"; }
    else {
        a = "4" + a;
        return eval(a);
    }
}
function five(a) {
    if (!a) { return "5"; }
    else {
        a = "5" + a;
        return eval(a);
    }
}
function six(a) {
    if (!a) { return "6"; }
    else {
        a = "6" + a;
        return eval(a);
    }
}
function seven(a) {
    if (!a) { return "7"; }
    else {
        a = "7" + a;
        return eval(a);
    }
}
function eight(a) {
    if (!a) { return "8"; }
    else {
        a = "8" + a;
        return eval(a);
    }
}
function nine(a) {
    if (!a) { return "9"; }
    else {
        a = "9" + a;
        return eval(a);
    }
}

function plus(a) {
    return "+" + a;
}
function minus(a) {
    return "-" + a;
}
function times(a) {
    return "*" + a;
}
function dividedBy(a) {
    return "/" + a;
}

//console.log(seven(times(five())));
//console.log(four(plus(nine()))); // must return 13
//console.log(eight(minus(three()))); // must return 5
//console.log(six(dividedBy(two()))); // must return 3

var compose = function() {
    var res = arguments[0];
    for (var i=1; i<arguments.length; i++){
            res = arguments[i](res);
    }
    return res;
}

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

//console.log(compose(5, doubleTheValue)); // should === 10
//console.log(compose(5, doubleTheValue, addOneToTheValue)); // should === 11

function mergesorted(a, b) {

//    for (var i=0; i< a.length; i++) { res.push(a[i]); }
//    for (var i=0; i< b.length; i++) {
//        res.push(b[i]);
//    }
    var res = a.concat(b);
    var arr = [];
    while (res.length > 0) {
        var min = res[0]; var ind = 0;
        for (var i=0; i<res.length; i++) {
            if (min > res[i]) { min = res[i]; ind = i; }
        }
        arr.push(min);
        res.splice(ind,1);
    }
    return arr;
}

//console.log(mergesorted([1,2],[3,4])); //should: [1,2,3,4]
//console.log(mergesorted([1,2],[3])); //should: [1,2,3]
//console.log(mergesorted([1],[2, 3]));
//console.log(mergesorted([1,2,3],[1,2,3]))//should: [1,2,3]


var extend = function() {
    var res = {};
    for (var i=0; i<arguments.length; i++) {
        if (isObject(arguments[i])) {
            for (var k in arguments[i]) {
                if (res[k] === undefined) {
                    res[k] = arguments[i][k];
                }
            }
        }
    }
    return res;
}

//console.log(extend( {a: 1, b: 2}, {c: 3} )); // should === {a: 1, b: 2, c: 3}
//console.log(extend( {a: 1, b: 2}, {c: 3}, {d: 4} )); // should === {a: 1, b: 2, c: 3, d: 4}
//console.log(extend( {a: 1, b: 2}, {a: 3, c: 3} )); // should  === {a: 1, b: 2, c: 3}
//console.log(extend( {a: false, b: null}, {a: true, b: 2, c: 3} )); // should  === {a: false, b: null, c: 3}
//console.log(extend( {a: 1, b: 2}, {c: 3} ), 1);


// Will always receive the date in dd-mm-yyyy format. i.e: 01-02-5
function getGoodOldDay(input){
    var dateArray = input.split("-");
    var d = new Date(dateArray[2], dateArray[1]-1, parseInt(dateArray[0]) + 1);
    d.setFullYear(dateArray[2]);

    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    if (d.getDay() == 0) { var a = 6 }
    else { a = d.getDay() - 1; }
    return weekday[a];
};

//console.log(getGoodOldDay('19-11-0017')); // Returns Sunday
//console.log(getGoodOldDay('19-12-1917')); // Returns Sunday
//console.log(getGoodOldDay('5-7-53')); // Returns Saturday

function flattenTwoLevels(array) {
    var res = [];
    //console.log(array);
    for (var i=0; i<array.length; i++) {
        if (array[i] instanceof Array) {
            for (var j=0; j<array[i].length; j++){
                if (array[i][j] instanceof Array) {
                    var a = a.concat.apply(a, array[i])
                }
            }
        }
    }
    return array;
    //res = res.concat.apply(res, array);
    //var res2 = [];
    //res2 = res2.concat.apply(res2, res);
    //return res2;
}

var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
//console.log(flattenTwoLevels(array)); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]
//console.log(flattenTwoLevels([1,[2, 3, [], [4, [], 5]]])); // should return [1,[2,3,4,5]]


var Vector = function (components) {
    this.val = components;
    this.add = function(b){
        var res = [];
        if (this.val.length != b.val.length) { throw "Error!"}
        for (var i=0; i<this.val.length; i++) {
            res.push(this.val[i] + b.val[i])
        }
        return new Vector(res);
    }
    this.subtract = function(b){
        var res = [];
        if (this.val.length != b.val.length) { throw "Error!"}
        for (var i=0; i<this.val.length; i++) {
            res.push(this.val[i] - b.val[i])
        }
        return new Vector(res);
    }
    this.dot = function(b){
        var res = 0;
        if (this.val.length != b.val.length) { throw "Error!"}
        //for (var i=0; i<this.val.length; i++) {
        //   res += this.val[i] * b.val[i];
        //}
        //return res;
    }
    this.norm = function(){
        var res = 0;
        for (var i=0; i<this.val.length; i++) {
            res += this.val[i] * this.val[i];
        }
        return Math.sqrt(res);
    }

    this.equals = function(r) {
        if (this.val.join("") == r.val.join("")) {
            return true;
        }
        return false;
    }

    this.toString = function() {
        return "(" + this.val.join(',') + ")";
    }
};



var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);
var fdd = "";


//console.log(a.add(b)); // should return Vector([4,6,8])
//console.log(a.subtract(b)); // should return Vector([-2,-2,-2])
//console.log(a.dot(b)); // should return 1*3+2*4+3*5 = 26
//console.log(a.norm()); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
//console.log(a.add(c)); // throws an error

//d =  a.add(b);
//console.log(b.equals());


var extend = function() {
    var res = {};
    for (var i=0; i<arguments.length; i++) {
        if (isObject)
        for (k in arguments[i]) {
            if (res[k] == undefined) {
                res[k] = arguments[i][k];
            }
        }
    }
    return res;
}

//console.log(extend( {a: 1, b: 2}, {c: 3} )); // should === {a: 1, b: 2, c: 3}
//console.log(extend( {a: 1, b: 2}, {c: 3}, {d: 4} )); // should === {a: 1, b: 2, c: 3, d: 4}
//console.log(extend( {a: 1, b: 2}, {a: 3, c: 3} )); // should  === {a: 1, b: 2, c: 3}
//console.log(extend( {a: false, b: null}, {a: true, b: 2, c: 3} )); // should  === {a: false, b: null, c: 3}

function add(a, b) {
    var arrA = a.split('');
    var arrB = b.split('');

    while (arrA.length != arrB.length) {
        if (arrA.length < arrB.length) {
            arrA.unshift("0");
        }
        else {
            arrB.unshift("0");
        }
    }

    var arrRes = [];
    var ind = 0;
    var sum = 0;
    for (var i=arrA.length-1; i>=0; i--) {
        sum = parseInt(arrA[i], 10) + parseInt(arrB[i],10);
        if (ind === 1) {
            sum++;
            ind = 0;
        }
        if (sum >= 10) {
            ind = 1;
            sum = sum - 10;
        }
        arrRes[i+1] = sum;
    }

    if (ind === 1) {
        arrRes[0] = 1;
    }

    if (arrRes[0] == 0) {
        arrRes[0] = ""
    }
    if (arrRes[1] == 0) {
        if (arrRes[0] == undefined) {
            arrRes[1] = "";
        }
    }
    return arrRes.join(''); // Fix this!
}

//console.log(add("123", "321"));// -> "444"
//console.log(add("11", "99"));// -> "110"
//console.log(add("3333", "4"));// -> "110"
//console.log(add("1", "999999999"));// -> "110"
//console.log(add("823094582094385190384102934810293481029348123094818923749817", "234758927345982475298347523984572983472398457293847594193837"));

console.log(add('00103', '08567'));