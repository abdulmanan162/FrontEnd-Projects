
console.log("This is tutorial 58");
// setTimeout--> Allow us to run the function once after the interval of time 
//  clearTimeout--> Allow us to run the function repeatedly after the interval of time 


function greet(name, byetext){
    console.log("Hello Good Morning " + name+" " +byetext);  
}
// timeout=setTimeout(greet,5000,"Manan","Take Care");
// console.log(timeout)

// clearTimeout(timeout)

// setTimeout(greet() , 2000);--> Wrong as it is calling the function inside set time out 

// inte
function displayTime(){
    time= new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);


















