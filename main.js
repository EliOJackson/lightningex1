var people = [
    {
        name: "Bob", 
        department: "sales", 
        title: "sales manager"
    },
    {
        name: "Tina", 
        department: "finance", 
        title: "director of finance"
    },

    {
        name: "Randy", 
        department: "IT",
        title: "Hardware guy"
    },
    {
        name: "Glenda",
        department: "C-suite", 
        title: "CEO"}
]

for (let i = 0; i < people.length; i++) {
    console.log(`${people[i].name}'s job title is ${people[i].title}`);
};

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