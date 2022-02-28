// window.onload = function(){
//     console.log('Loaded');
// };

import { genData } from "./gamedata.js";

const a = genData();

const frame = document.getElementById('frame');

const game = document.createElement('div');
//outer grid
game.classList.add('grid');
game.classList.add('major');

// let gridArray = [];

for (let i = 0; i < 9; i++){
    //inner gird
    let innerGrid = document.createElement('div');
    innerGrid.classList.add('grid');
    innerGrid.classList.add('minor');
    for (let n = 0; n < 9; n++){
        let card = document.createElement('div')
        card.classList.add('card');
        // let text = document.createTextNode('');
        card.append('');
        innerGrid.appendChild(card);
    }
    game.appendChild(innerGrid);
}

frame.appendChild(game);

const cards = document.getElementsByClassName('card');
for ( let i = 0; i < cards.length; i++ ){
    cards[i].childNodes[0].data = a.data[i]
}

// const rows = a.data.length/9;
let organised = [];
// console.log(organised)

for ( let i = 0; i < a.rows; i++){
    // console.log(a.data.slice(i*9, (i*9)+9));
    // organised[i] = a.data.slice(i * 9, (i * 9) + 9);
    // console.dir(a.data.slice(i * a.cols, i * a.cols + a.cols ));
    organised[i] = a.data.slice(i * a.cols, (i * a.cols) + a.cols);
    // console.dir(organised);
}

// console.dir(organised);
organised = [];

//convert the incoming array into a 2d array
for (let i = 0; i < 3; i++){
    console.log(i);
    let start = i * (3 * 9);
    console.log(`start = ${start}`);
    organised[(i * 3)] = [].concat(a.data.slice(start, start + 3), a.data.slice(start + 9, start + 9 + 3), a.data.slice(start + 18, start + 18 + 3));
    start = start + 3;
    console.log(`next = ${start}`);
    organised[(i * 3) + 1] = [].concat(a.data.slice(start, start + 3), a.data.slice(start + 9, start + 9 + 3), a.data.slice(start + 18, start + 18 + 3));
    
    start = start + 3;
    console.log(`next = ${start}`);
    organised[(i * 3) + 2] = [].concat(a.data.slice(start, start + 3), a.data.slice(start + 9, start + 9 + 3), a.data.slice(start + 18, start + 18 + 3));
    
}
console.dir(organised);
