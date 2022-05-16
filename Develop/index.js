// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation guide',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?',
      },
      {
        type: 'list',
        message: "Choose license",
        name: 'license',
        choices: ["MIT", "ISC", "GNUPLv3" ],
    },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },
    ])

    
};


// TODO: Create a function to initialize app and logs error if there is an error
const init = () => {
      promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
  
// Function call to initialize app
init();
 