import { Circle, Square, Triangle } from "./lib/shapes.js";
import { writeFileSync } from 'fs';
import colors from 'colors';
import inquirer from 'inquirer';

// This test checks if a given string is valid hexadecimal
const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
const customColors = {
    'red': 'red'.red,
    'blue': 'blue'.blue,
    'green': 'green'.green,
    'yellow': 'yellow'.yellow,
    'magenta': 'magenta'.magenta,
    'orange': 'orange'.brightOrange,
    'cyan': 'cyan'.cyan,
    'grey': 'grey'.grey,
    'black': 'black'.black,
    'white': 'white'.white,
};

function createShapeSVG(text, shape, textColor, shapeColor) {
    // A list of the available classes
    const shapeClasses = {
        circle: Circle,
        square: Square,
        triangle: Triangle
    };
    
    const ShapeClass = shapeClasses[shape];
    // Check that the class chosen is valid
    if (!ShapeClass) {
        throw new Error("Unknown shape");
    }
    
    // Create the renderer for the chosen class
    // and pass the arguments to it
    const renderer = new ShapeClass(text, textColor, shapeColor);
    // Render the SVG and return it as a string
    const svg = renderer.render();

    // Write the new SVG to disk
    writeFileSync('logo.svg', svg);
    console.log("Generated logo.svg");
}

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo:',
            validate: (input) => {
                if (input.length < 1) {
                    return 'Please enter at least one character';
                }

                if (input.length > 3) {
                    return 'Please enter no more than three characters.';
                }
                
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'customTextColor',
            message: 'Do you want to use a custom hexadecimal color for the text?',
            default: false
        },
        {
            type: 'input',
            name: 'textColorHex',
            message: 'Enter the custom hexadecimal color for the text:',
            when: (answers) => answers.customTextColor,
            validate: (input) => {
                if (hexRegex.test(input)) { return true; }

                return 'Please enter a valid hexadecimal number.';
            }
        },
        {
            type: 'list',
            name: 'textColorKeyword',
            message: 'Choose a color keyword for the text:',
            choices: Object.keys(customColors).map(key => ({ name: customColors[key], value: key })),
            when: (answers) => !answers.customTextColor
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'confirm',
            name: 'customShapeColor',
            message: 'Do you want to use a custom hexadecimal color for the shape?',
            default: false
        },
        {
            type: 'input',
            name: 'shapeColorHex',
            message: 'Enter the custom hexadecimal color for the shape:',
            when: (answers) => answers.customShapeColor,
            validate: (input) => {
                if (hexRegex.test(input)) { return true; }

                return 'Please enter a valid hexadecimal number.';
            }
        },
        {
            type: 'list',
            name: 'shapeColorKeyword',
            message: 'Choose a color keyword for the shape:',
            choices: Object.keys(customColors).map(key => ({ name: customColors[key], value: key })),
            when: (answers) => !answers.customShapeColor
        }
    ]).then(answers => {
        // Select the colors based on the user's choice
        const textColor = answers.customTextColor ? answers.textColorHex : answers.textColorKeyword;
        const shapeColor = answers.customShapeColor ? answers.shapeColorHex : answers.shapeColorKeyword;
      
        const { text, shape } = answers;
        createShapeSVG(text, shape, textColor, shapeColor);
    })
}

init();