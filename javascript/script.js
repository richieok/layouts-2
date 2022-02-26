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
        let text = document.createTextNode('');
        card.appendChild(text);
        innerGrid.appendChild(card);
    }
    game.appendChild(innerGrid);
}

frame.appendChild(game);
