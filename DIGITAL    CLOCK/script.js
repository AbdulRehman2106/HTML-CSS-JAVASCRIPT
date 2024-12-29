


let clockSecond = document.getElementById('seconds');

let clockMinute = document.getElementById('minutes');

let clockHour = document.getElementById('hours');

let clockAmPm = document.getElementById('am-pm');



setInterval(function(){

    const date = new Date()

    const options={

        hour : '2-digit',

        minute : '2-digit',

        second : '2-digit',

        hours12 : true

    };

// convet to local time with option

// example output format 00:00:00 AM

const time = date.toLocaleTimeString('en-US' , options);

// extract AM/PM

const ampm = time.slice(-2)   

// extract hours , minutes , seconds

const[hours , minute ,seconds] = time.slice(0, -3).split(':')



clockHour.textContent = hours;

clockMinute.textContent = minute

clockSecond.textContent = seconds

clockAmPm.textContent = ampm

}, 1000)