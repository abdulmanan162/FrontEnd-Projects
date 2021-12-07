console.log("This is about tutorial of 55")
// let i = 0;
// for(i=0;i<3;i++){
//     console.log(i)
// }   
let friends=["manan","irtash", "ahmad", "hanan", "harry", "abubaker"]
// for (let index = 0; index < friends.length; index++) {
//       console.log("hello friend," +friends[index]);
    
// }

// friends.forEach(function f(element){
//     console.log("hello friends,"+element + "to modern java script")
// })


// for(element of friends){
// console.log("hello friends,"+element + "to modern java script again");
// }

let employee ={
    name:"harry",
    channel:"CWH",
    salary:2,
}


// use this loop to iterate over Object in javascript
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`); 
}

// while loop in js 
let i=0;
while(i<4){
    console.log(`${i} is less than 4`)
    i++;
}



// DO  while loop in js 
let j=34;
do{
    console.log(`${34} is less than 4 and we are inside do while loop`);
    j++;
}while(j<4);