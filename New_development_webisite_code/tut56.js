
//  for id only

let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

// for class only 

let container= document.getElementsByClassName('container')
console.log(container)


// let sel=document.querySelector('.container');
// console.log("selector returns", sel)
 
// let sel=document.querySelector( '#nav>li');
// console.log("selector returns", sel)
 
let sel=document.querySelectorAll( '#nav');
console.log("selector returns", sel)
 