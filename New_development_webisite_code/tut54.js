// alert in  in-browser java script  does-not return anything
// alert("this is a message");

// prompt in js
// let name=prompt("what is your name?","guest");
// console.log(name)

// Confirm in js 
let deletePost =confirm( "do you really want to delete this post?")
// console.log( deletePost)
if(deletePost){
    // Code to delete this post
    console.log("Your post has been delete succesfully")
} 
else{
    // Code to cancel delete of the post      
        console.log("Your post has not been deleted")
      
}
