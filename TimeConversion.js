Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format

Sample Input 

07:05:45PM

Sample Output 

19:05:45

function timeConversion(s) {
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0,-2).split(":");

    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12;
    }
    return timeArr.join(":");
}
