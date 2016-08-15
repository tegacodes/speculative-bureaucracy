var date1 = new Date(1982, 07, 20);
var date2=Date.now();

var hours = Math.abs(date1 - date2) / 36e5;
var days = Math.round(hours/24);
hours = Math.round(hours);
alert("Get back to work. You have "+hours+" hours (only "+days+" days) left to live!");

//NOTES:
//JS dates see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
