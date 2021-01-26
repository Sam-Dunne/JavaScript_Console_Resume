let myName = "Sam Dunne";
console.log('Name: ' + myName.toUpperCase());

let field = "Software Developer";
console.log('Career: ' + field);

let description = "Innovate Birmingham student in Software Development Program";
console.log('Description: ' + description);

console.log('  ')

console.log('Interests:')
let interests = ["TV Shows", "Cooking", "Finding a Job", "Passing this Course"];
for (let i of interests) {
    console.log('* ' + i);
}

console.log('  ')

let prevJobs = [
    {   
        company: 'Signal Flow Audio',
        title: 'Owner',
        duties: 'Consulting, Training, Sales, Installation of Audio Equipment.'
    },
    {
        company: 'All Events LLC',
        title: 'A1/A2',
        duties: 'Setup and operate large PA systems for Live Events.'
    },
    {
        company: 'Big Friendly Productions',
        title: 'FOH-A1 and Warehouse Manager',
        duties: 'Lead crews to prep and setup production for Live Events.'
    }
];



console.log('My Previous Experience:');
function displayPosition(company, title, duties) {
    console.log('* ' + title + ' at ' + company + '. Responsible for ' + duties);
}

prevJobs.forEach (function(element) {
    displayPosition(element.company, element.title, element.duties)
});

//or
// displayPosition(prevJobs[0].company, prevJobs[0].title, prevJobs[0].duties);
// displayPosition(prevJobs[1].company, prevJobs[1].title, prevJobs[1].duties);
// displayPosition(prevJobs[2].company, prevJobs[2].title, prevJobs[2].duties);

console.log('  ')

console.log('My Skills:')
let skills = [
    {
        skill: "Extra-dextrous fingers",
        cool: true
    },
    {
        skill: 'Ringing out monitors',
        cool: false
    },
    {
        skill: 'Sick Bo Staff Skills',
        cool: true
    }
];

function displaySkill(skill, cool) {
    if (cool == true) {
        console.log('* BAM: ' + skill)
    }
    else { 
        console.log('* ' + skill)
    }
}

displaySkill(skills[0].skill, skills[0].cool);
displaySkill(skills[1].skill, skills[1].cool);
displaySkill(skills[2].skill, skills[2].cool);
