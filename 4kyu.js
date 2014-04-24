/**
 * Created by IMELNIKOV on 24.04.2014.
 */

function solution(roman){
    var arr = roman.split("");
    var sum =0, num = 0;

    for (var i=0; i<arr.length; i++) {
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

console.log(solution('IX'));
console.log(solution('MDCLXVI'));