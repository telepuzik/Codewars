/**
 * Created by IMELNIKOV on 08.04.2014.
 */
function a() {
    var a = "log from node";
    console.log(a);
}

function prime(num) {
    // Generate an array containing every prime number between 0 and the num specified (inclusive)
    var resArray = [];
    for (var i=2; i<=num; i++){
        for (var y=2; y<=i; y++) {
            if (i % y == 0) {
                break;
            }
        }
        if (i==y) {
            resArray.push(i);
        }
        //console.log(i);
    }
    return resArray;
}

var sing = function () {
    // return the lyrics as a string ...
    var song = [];
    for (var i=99; i>=0; i--){
        if (i != 0) {
            if (i != 1) {
                song.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
                if (i!=2) {
                    song.push("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
                }
                else {
                    song.push("Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
                }

            }
            else {
                song.push("1 bottle of beer on the wall, 1 bottle of beer.");
                song.push("Take one down and pass it around, no more bottles of beer on the wall.")
            }
        }
        else {
            song.push("No more bottles of beer on the wall, no more bottles of beer.");
            song.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    }
    return song;
};

Array.range = function(start, count) {
    var res = [];
    for (var i = start; i<(start+ count); i++) {
        res.push(i);
    }
    return res;
}

Array.prototype.sum = function() {
    var res = 0;
    for (var i = 0; i<this.length; i++) {
       res += this[i];
    }
    return res;
}

//console.log(Array.range(-1,4).sum());

//console.log(prime(14));
//console.log(sing());

function plural(n) {
    return (n != 1);
}

//console.log(plural(1));
//console.log(plural(10));

function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    //var res = 0;
    //for (var i=0; i<array.length; i++){
    //            res += array[i];
    //}
    //return res;

    return array.reduce(function(a, b){
        return a + b;
    });
}



//console.log(sum([1,2,3,4,5,6,7,8,9,10]))

function solution(nums){
    if (nums != null) {return nums.sort(function(a,b){return a-b;});}
    return null;
}

//console.log(solution([1,10,2,3,5]));
//console.log(solution(null));

String.prototype.reverse = function (){
    var arr = this.toString().split('');
    var res = [];
    for (var i = arr.length-1; i>=0; i-- ) {
        res.push(arr[i]);
    }
    return res.join('');
}

//console.log("String".reverse())

var MyNamespace = {
    MyClass: function (a){
          this.SayHello = function () {};
          //  var b = a;
          //return {
          //   b: a,
          //   sayHello: function(){
          //       return this.b;
          //   }
         }
     }

//var MyNameSpace = {
//    MyClass: function (a) {
//        this.a = a;
//    }
//}

//var myObject = new ff.class();

//var phrase = myObject.Request();



//var myObject = new MyNamespace.MyClass('Hello!');

//var phrase = myObject.sayHello();

/////var test = new mynamespace.CoolClass('test');
//console.log(phrase);

//var Person = (function (myName){
//    return {
//        name: myName,
//        greet: function(yourName) {
//          return "Hello " + yourName + ", my name is " + myName;
//    }
//    }
//})

//var joe = new Person("Joe");
//console.log(joe.greet("Kate"));

function squareSum(numbers){
    var res = 0;
    for (var i=0; i<numbers.length; i++) {
      res += numbers[i] * numbers[i];
    }
    return res;
}

//console.log(squareSum([1,3,2]));


function getNiceNames(people){

    return people.reduce(function(s,v) {
        if (v.wasNice) {
            s.push(v.name);
        }
        return s;
    }, []);

    //var res = [];
    //for (var i=0; i<people.length; i++) {
    //    if (people[i].wasNice) {res.push(people[i].name)};
    //}
    //return res;
}

function getNaughtyNames(people){
    var res = [];
    for (var i=0; i<people.length; i++) {
        if (!people[i].wasNice) {res.push(people[i].name)};
    }
    return res;
}

//console.log(getNiceNames( [
//    { name: 'Warrior reading this kata', wasNice: true },
//    { name: 'xDranik', wasNice: false },
//    { name: 'Santa', wasNice: true }
//] ));
//
//console.log(getNaughtyNames( [
//    { name: 'Warrior reading this kata', wasNice: true },
//    { name: 'xDranik', wasNice: false },
//    { name: 'Santa', wasNice: true }
//] ));

function a (obj){
    var keys = [];
    var values = [];
    for (var a in obj){
        keys.push(a);
        values.push(obj[a]);
    }
    var res = [];
    res.push(keys);
    res.push(values);
    return res;
}
//var arr = Array.prototype.map(obj, function (value, key) { return value; });


//console.log (a ({a: 1, b: 2, c: 3}));

function reverseWords(str) {
    var res = [];
    str.split(" ").reduce(function(a, b){
        res.push((b.split("").reverse().join("")));
    }, "");
    return res.join(" ");
}

//console.log(reverseWords("This is an example!"));


function reject(array, iterator) {
    var a = [];
    array.reduce(function(c,b){
        if (!iterator(b)) { a.push(b) };
    }, "");
    return a;
}

//var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//console.log(odds);

function squareSum(numbers){
    var res = 0;
    return numbers.reduce(function(a,b){
        return a + b*b;
    },"")
    return res;
}

//console.log(squareSum([3,2,2]));

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    var newpattern = "^" + pattern.replace(/\?/g, "\\w")  + "$";
    var res = [];
    for (var i=0; i<this.words.length; i++) {
        if (this.words[i].match(newpattern)) {
            res.push(this.words[i]);
        }
    }
    return res;
}

//var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry', 'blackberry']);
//console.log(fruits.getMatchingWords('lemon')); // must return []
//console.log(fruits.getMatchingWords('cherr??')); // must return []
//console.log(fruits.getMatchingWords('?a?a?a')); // must return ['banana', 'papaya']
//console.log(fruits.getMatchingWords('??????')); // must return ['banana', 'papaya', 'cherry']

Math.round = function(number) {
    if ((number%1)<0.5) {
        return number - (number%1);
    }
    else {
        return number - (number%1) + 1;
    }
};

Math.ceil = function(number) {
    if (number%1!=0){return number - (number%1) + 1};
    return number;
};

Math.floor = function(number) {
    return number - (number%1);
};

//console.log("round:" + Math.round(20.89));
//console.log("ceil:" + Math.ceil(5));
//console.log("floor:" + Math.floor(20.89));

var largestDifference = function(data) {
    var a = data.sort();
    return (data[data.length-1] - data[0]);
};

//console.log(largestDifference([-1,2,3]));

var numberToPrice = function(number) {
//    res = Math.ceil(number);
//    resultString = (number%1).toFixed(2).toString().substring(1);
//    while (res > 1000) {
//        res = res / 1000;
//        console.log(res);
//        resultString = (res%1).toString().substring(1) + resultString
//    }
//    return resultString;

    var res = Math.floor(number);
    var resultArray = res.toString().match(/.{1,3}/g);
    var resultString = resultArray.join(',') + (number%1).toFixed(2).toString().substring(1);
    return resultString;
}

var price = numberToPrice(13253.5123);
//console.log(price); // 13,253.51


