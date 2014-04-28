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

console.log(sumIntervals( [
    [1,2],
    [6, 10],
    [11, 15]
] )); //=> returns 9

console.log(sumIntervals( [
    [1,4],
    [7, 10],
    [3, 5]
] )); //=> returns 7

console.log(sumIntervals( [
    [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
] )); //=> returns 19


//console.log(sumIntervals( [
//    [1,5],
//    [3, 6],
//    [4, 8],
//    [10, 12],
//    [16, 19]
//] ));
