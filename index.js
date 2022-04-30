// TODO: Include packages needed for this application
const fs= require("fs");
const path= require("path");
const inq= require("inquirer");
const gMark= require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your github Username?",
        name: "username"
    },
    {
        type: "input",
        message: "Name of project/repo?",
        name: "reponame"
    },
    {
        type: "input",
        message: "Project description?",
        name: "description"
    },
    {
        type: "checkbox",
        message: "Languages used?",
        name: "lang",
        choices: ["HTML","CSS","Javascript","MySQL","PHP","Python","C++"]
    },
    {
        type: "input",
        message: "Any installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        message: "Want to detail usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Any contribution guidelines?",
        name: "contributions"
    },
    {
        type: "input",
        message: "Any test instructions?",
        name: "test"
    },
    {
        type: "list",
        message: "License used?",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: "input",
        message: "Want to add a link?",
        name: "link"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.error(err);
        } else{
            console.log("All done. Check the files for your readme")
        }
    })
    
}

// TODO: Create a function to initialize app
function init() {
    let data;
    inq.prompt(
        {
        type: "confirm",
        message: "This is a readme markdown generator, you'll be prompted with a series of questions to fill it out. If you don't want a specific area filled out leave the prompt blank. Confirm to start or decline to exit.",
        name: "truthy"
        }
    ).then((response) =>{
        console.log(response.truthy);
        if(response.truthy==true){
            inq.prompt(questions).then((answers)=>{
                data = gMark(answers);
                writeToFile("readme.md", data);
            })
        } else{
            return;
        }
    }).catch((err)=>{
        if(!err){
            console.log("building readme...");
        } else{
            throw(err);
        }
    })
}

// Function call to initialize app
init();
