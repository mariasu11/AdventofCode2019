//Part 1

const fs = require('fs')
const input = fs.readFileSync('/Users/asfalohani/Desktop/advent of code/data.js', 'utf-8');
let formatted_input = input.trim()
                          .split('\n')
                          .map(x => parseInt(x));

let sum = 0;
for(let i = 0; i < formatted_input.length; i++) {
    sum += Math.floor(formatted_input[i]/3) - 2
}

console.log(sum)

//Part 2 

let sum = 0;
for(let i = 0; i < formatted_input.length; i++) {
    let inputMass = Math.floor(formatted_input[i]/3) - 2;
    
    while(inputMass>0) {
        sum += inputMass
        inputMass = (Math.floor(inputMass/3)) - 2
    }

}

console.log(sum)

