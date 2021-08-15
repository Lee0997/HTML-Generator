// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require("inquirer");
const fs = require("fs")

const readMeDetails = [
    {
        title: "Team name",
        message: "What is your team name?",
        name:"teamName"
    },
    {
        title: "1st",
        message: "Who is your first team member?",
        name: "memberOne"
    },
    {
        title: "1st-Info",
        message:"What is their email and/or Github link?",
        name: "memberOneInfo",
    },
    {
        title: "2nd",
        message: "Who is your second team member?",
        name: "memberTwo"
    },
    {
        title: "2nd-Info",
        message:"What is their email and/or Github link?",
        name: "memberTwoInfo"
    },
    {
        title: "3rd",
        message: "Who is your third team member?",
        name: "memberThree",
    },
    {
        title: "3nd-Info",
        message:"What is their email and/or Github link?",
        name: "memberThreeInfo"
    },
    {
        title: "4th",
        message: "Who is your 4th team member?",
        name: "memberFour",
    },
    {
        title: "4th-Info",
        message:"What is their email and/or Github link?",
        name: "memberFourInfo"
    },
]

function createHTML () {
    inquirer.prompt(readMeDetails)
    .then((inquirerResponse) => {   
        console.log("Making HTML");
        const markdown = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="main-header">
        <div class="main-header-text">
            ${inquirerResponse.teamName}
        </div>
    </header>
    <card class="teamCard">
        <header class="teamName">
        ${inquirerResponse.memberOne}
        </header>
        <a href="url">
        https://github.com/${inquirerResponse.memberOneInfo}
        </a>
    </card>
    <card class="teamCard">
        <header class="teamName">
        ${inquirerResponse.memberTwo}
        </header>
        <a href="url">
        https://github.com/${inquirerResponse.memberTwoInfo}
        </a>
    </card>
    <card class="teamCard">
        <header class="teamName">
        ${inquirerResponse.memberThree}   
        </header>
        <a href="url">
        https://github.com/${inquirerResponse.memberThreeInfo}   
        </a>
    </card>
    <card class="teamCard">
        <header class="teamName">
        ${inquirerResponse.memberFour}   
        </header>
        <a href="url">
        https://github.com/${inquirerResponse.memberFourInfo}   
        </a>
    </card class="teamName">
</body>
</html>
`
        fs.writeFileSync("index.html", markdown);
    })
    .catch((err) => {
        console.log(err);
    })
}
createHTML();
