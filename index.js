const showDate = document.querySelector(".show--day");

const showTime = document.querySelector(".show--time");

const todayDate = new Date().getUTCDay();

let day;
switch(todayDate) {
    case 0:
        day= "Sunday";
        break;
    case 1:
        day= "Monday";
        break;
    case 2:
        day= "Tuesday";
        break;
    case 3:
        day= "Wednesday";
        break;
    case 4:
        day= "Thursday";
        break;
    case 5:
        day= "Friday";
        break;
    case 6:
        day= "Saturday";
        break;
}
showDate.textContent= `Today is ${day}`


let Jan01 = new Date().getUTCMilliseconds();


showTime.textContent= `Milliseconds: ${Jan01}`;