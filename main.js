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
        
// let loop = [
//     45, "I",true, null, "am",  3.56, "a", undefined,  { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"
// ].filter( (item) => {
//     return typeof(item) === "string";
// });

// console.log('string array', loop)

// function result(loop) {

// let strings = loop.filter( (item) => {
//     return typeof(item) === "string";
// })
// };
// console.log(result);

// 1/2/18

// Loop-a-looza:
// // Make a for loop, .forEach and .filter on this array to get the same result
// // Make an array called fave_demo that contains only ages from 18 - 49

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = [];

// for (let i = 0; i < ages.length; i++) {
//     if ( ages < 50 && ages> 17 ) fave_demo.push(ages[i])
//     // console.log(ages);
//     console.log("This is a fave demo " + fave_demo);
// }
// // for each

// // let fE = []; look at with salde 
// ages.forEach( (age) => {
//     if (age < 50 && age > 17) fave_demo.push(age);
// });
// console.log(fave_demo + " This is the For Each");

// // filter


// // // let fave_demo = ages.filter( (age) => age < 50 && age > 17 )
// // // console.log(fave_demo);

// // Part 2 for 1/2/18
// hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

//   // use dot notation to acces the value of the key "meaning_of_life" in this object

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// let yoda_quote = ["the", "greatest", "teacher", "failer", "is"];

// Captitalize 'the', insert a comma after 'teacher' and output "Yoda" says, "The greatest teacher, failuer is"

// let newQuote = yoda_quote.splice(0, 1, "The") + yoda_quote.splice(1);
// console.log(newQuote);
// let newQuote = yoda_quote.map( (word) => {
//     if(word ==="the")
//         word = word.slice(0,1).toUpperCase() + word.slice(1)
//     if(word === "teacher")
//         word = word + ","
//     return word
// }).join(" ")

// console.log(newQuote);


// 1/4/18
// Choose a loop method of your choice to get this result from this array:
// // expected result: [3, 5, 7, 9, 11, 13]
// let nums = [1, 2, 3, 4, "5", 6, "7"]
// for (let i = 0; i < nums.length; i++) {
//     let newNums = nums[i] + ;
//     console.log(newNums);
// }
// let result = [];
// for (let i = 0; i < nums.length-1; i++) {
//     result.push(+nums[i] + +nums[i + 1]);
// }

// 1 / 8 / 18
// lightning exercise:
// Loop through this object and add each member object's key as an ID. Log the results.
let customers = {
    active: {
      a87b6345: {
        name: "Gary Harrison",
        age: 23,
        member_level: "gold"
      },
      b345hy66: {
        name: "Harry Garrison",
        age: 34,
        member_level: "silver"
      },
      nh56yht8: {
        name: "Mary Terryson",
        age: 78,
        member_level: "platinum"
      },
      j677yd456: {
        name: "Barry Sonnyman",
        age: 44,
        member_level: "gold"
      }
    },
    inactive: {
      ur56tfgt: {
        name: "Barb Justice",
        age: 56,
        member_level: "none"
      },
      d56gt6: {
        name: "Jane L'eggo",
        age: 11,
        member_level: "none"
      }
    }
}

  console.log(Object.keys(customers));
let properties = Object.keys(customers);
console.log(Object.keys(properties));
  
    for (let status in customers) {
        let keys = Object.keys(customers[status]) // making an array out of indiviual keys in customers
        keys.forEach( (key) => {
            customers[status][key].id = key;
        });

    }
    console.log(customers);