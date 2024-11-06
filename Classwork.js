const fs = require('node:fs');
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// const arr = [1,4,7,9];
// const student = {
//     name: 'John Dow',
//     age: 22,
// };


fs.readFile('1.txt', 'utf8', (err, data) => {
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
})

const lastLetters = lorem.split(' ').map(word => {
    const newWord = word.slice(0,-1) + word.slice(-1).toUpperCase();

    return newWord
}).join(' ');

const arr = [];

for(){
    arr.push(lastLetters[-1]);
}



fs.writeFile('2.txt', arr.toString(), 'utf8', (err, data) => {
    
    if (err){
    console.error(err);
    return;
    }
})





// fs.writeFile('1.txt', lorem, 'utf8', (err) => {
//     if (err){
//         console.error(err);
//     }
// })