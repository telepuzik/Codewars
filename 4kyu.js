/**
 * Created by IMELNIKOV on 24.04.2014.
 */

function solution(roman){
    var arr = roman.split("");
    var sum =0, num = 0;

    for (var i=0; i<arr.length; i++)  {
        switch (arr[i]) {
            case "I":
                num = 1;
                break
            case "V":
                if (num < 5) {
                    num = 5 - num * 2;
                }
                else {
                    num = 5;
                }
                break
            case "X":
                if (num < 10) {
                    num = 10 - num * 2;
                }
                else {
                    num = 10;
                }
                break
            case "L":
                if (num < 50) {
                    num = 50 - num * 2;
                }
                else {
                    num = 50;
                }
                break
            case "C":
                if (num < 100) {
                    num = 100 - num * 2;
                }
                else {
                    num = 100;
                }
                break
            case "D":
                if (num < 500) {
                    num = 500 - num * 2;
                }
                else {
                    num = 500;
                }
                break
            case "M":
                if (num < 1000) {
                    num = 1000 - num * 2;
                }
                else {
                    num = 1000;
                }
                break
        }
        sum += num;
    }
    return sum;
}

//console.log(solution('IX'));
//console.log(solution('MDCLXVI'));


function sumIntervals(intervals){
    var res = [];
    var arr = intervals.sort(function(a,b){return a[0]-b[0];});
    var max = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i][0] < max) {
            if (arr[i][1] > max) {
                res.push(arr[i][1] - max)
            }
        }
        else {
            res.push(arr[i][1] - arr[i][0]);
        }
        max = arr[i][1];
    }
    return res.reduce(function(a, b) {
        return a + b;
    });
}

//console.log(sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
//] )); //=> returns 9
//
//console.log(sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
//] )); //=> returns 7
//
//console.log(sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
//] )); //=> returns 19


//console.log(sumIntervals( [
//    [1,5],
//    [3, 6],
//    [4, 8],
//    [10, 12],
//    [16, 19]
//] ));

function parseInt2(string) {
    // TODO: it's your task now
    var mas = [, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty" ]
    mas[30] = "thirty";
    mas[40] = "forty";
    mas[50] = "fifty";
    mas[60] = "sixty";
    mas[70] = "seventy";
    mas[80] = "eighty";
    mas[90] = "ninety";
    mas[100] = "hundred";
    mas[1000] = "thousand";
    mas[1000000] = "million";
    var arr = string.split(" ");
    var res = 0;
    for (var i=0; i < arr.length; i++) {
        if (arr[i].search("-") != -1) {
            res += mas.indexOf(arr[i].split("-")[0]) + mas.indexOf(arr[i].split("-")[1]);
        }
        else
        {
            if (mas.indexOf(arr[i]) != -1) {
                if (arr[i] == "hundred") {
                    res = res - mas.indexOf(arr[i-1]) + (100 * mas.indexOf(arr[i-1]));
                }
                else {
                    if ((arr[i] == "thousand") || (arr[i] == "million")) {
                        res = res * mas.indexOf(arr[i]);
                    }
                    else {
                        res += mas.indexOf(arr[i]);
                    }
                }
            }
        }
    }
    return Number(res);
}

//console.log(parseInt("twenty"));
//console.log(parseInt("two hundred forty-six"));
//console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"));
//console.log(parseInt("one million"));


function List() {}

function EmptyList() {
    this.list = "()";
    return this.list;
}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { /* implement this */ };
EmptyList.prototype.isEmpty = function() { /* implement this */ };
EmptyList.prototype.length = function() { /* implement this */ };
EmptyList.prototype.push = function(x) { /* implement this */
    //var s = x.substr(1, x.length - 2);
    //var arr = s.split(" ");
    this.list += x;
    return this.list;
};
EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };

function ListNode(value, next) { /* implement this */ }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { /* implement this */ };

ListNode.prototype.toString = function() { /* implement this */ };

ListNode.prototype.head = function() { /* implement this */ };
ListNode.prototype.tail = function() { /* implement this */  };
ListNode.prototype.length = function() { /* implement this */ };
ListNode.prototype.push = function(x) { /* implement this */ };
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };


//var list0 = new EmptyList();
//var list1 = list0.push(3);          // => "(3)"
//var list2 = list1.push(2);          // => "(2 3)"
//var list3 = list2.push(1);          // => "(1 2 3)"
//var list13 = list1.append(list3);   // => "(3 1 2 3)"
//console.log(list0);
//console.log(list1);
//console.log(list2);
//console.log(list3);
//console.log(list13);

//console.log(list13.head());    // => 3
//console.log(list13.tail());    // => list3


function SortedList() {
    this.list = [];
    this.length = 0;
}

SortedList.prototype.add = function(val) {
    this.list.push(val);
//    for (var i=0; i < this.list.length; i++) {
//        console.log(this.list[i]);
//    }
    //this.list.sort(function (a, b) {
    //    return a - b;
    //})
    this.length = this.list.length;
    console.log(this.length);
    //return val;
}

SortedList.prototype.get = function(i) {
    return this.list[i];
}


//var list = new SortedList();
//list.add(1);
//list.add(3);
//list.add(2);
//list.add(-1);
//var a = list.get(1);
//console.log(list.list);
//console.log(a);
//console.log(List.length);

function isAN(value) {
    if (((typeof value) != "number") && ((typeof value) != "object") || (value == null)) {
        return false;
    }
    return !isNaN(value);
}

//console.log(isAN(true));
//console.log(isAN(new Number(1)));
//console.log(isAN(null));

function goto(level,button){
    //TODO:return a number, how much levels the elevator must go up or down
    console.log(level);
    console.log("b:" + button + ";l:" + level);
    if ((button < 4) && (level<4) && (!isNaN(parseInt(level)))) {
        return button - level;
    }
    return 0;
}

console.log(goto(0,'2'));