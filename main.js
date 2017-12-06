// var people = [
//     {
//         name: "Bob", 
//         department: "sales", 
//         title: "sales manager"
//     },
//     {
//         name: "Tina", 
//         department: "finance", 
//         title: "director of finance"
//     },

//     {
//         name: "Randy", 
//         department: "IT",
//         title: "Hardware guy"
//     },
//     {
//         name: "Glenda",
//         department: "C-suite", 
//         title: "CEO"}
// ]

// for (let i = 0; i < people.length; i++) {
//     console.log(`${people[i].name}'s job title is ${people[i].title}`);
// };

// for (var i=0; i < people.length; i++) {
//     if (i === 0)
//     document.getElementById("Bob").innerHTML+="<p>" + name[i].name + "'s" + " job title is " + name[i].title
// }
//     else if (i === 1) {
//     document.getElementById("Tina").innerHTML+="<p>" + name[i].name + "'s" + " job title is " + name[i].title
// }
//     else if (i === 2) {
//     document.getElementById("Randy").innerHTML+="<p>" + name[i].name + "'s" + " job title is " + name[i].title
// }
//     else if (i === 3) {
//     document.getElementById("Bob").innerHTML+="<p>" + name[i].name + "'s" + " job title is " + name[i].title
// }


//   let lunch = { 
    
//         name: "Peanut Butter",
//         type: "Sandwhich",
//         bread: "wheat",
//         fullName: function() {
//             return lunch.name + " " + lunch.type
//     }
// };

// console.log(lunch);

//     let dinner = Object.create(lunch);
//     dinner.time = "7:30 PM";
//     dinner.location = "The Kitchen Table";

// console.log(dinner);
// console.log(dinner.hasOwnProperty("name")); 
// console.log(dinner.hasOwnProperty("time")); 
        
let loop = [
    45, 
    "I",
    true, 
    null, 
    "am", 
    3.56, 
    "a", 
    undefined, 
    { catchphrase: "Oh hai, Mark"}, 
    "JS", 
    "rockstar"
].filter( (item) => {
    return typeof(item) === "string";
});

console.log('string array', loop)

// function result(loop) {

// let strings = loop.filter( (item) => {
//     return typeof(item) === "string";
// })
// };
// console.log(result);

