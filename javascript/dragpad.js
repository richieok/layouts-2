// const d = document.getElementById("handle");
// const m = document.getElementById("mobile")
// const bubble = document.getElementById('bubble')
// const canv = document.getElementById('canv');
let p1 = 0, p2 = 0, p3 = 0, p4 = 0 

let shapesList = [];
let count = 0;

canv.addEventListener("mousedown", (e) => {
    if (e.target === canv){
        return;
    }
    const circle = e.target;
    circle.classList.add('moving')
    let startX = e.clientX;
    let startY = e.clientY;
    console.log(circle.cx.baseVal.value)

    canv.onmousemove = (e) =>{
        let dx = startX - e.clientX;
        let dy = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;
        circle.setAttribute('cx', String(circle.cx.baseVal.value - dx))
        circle.setAttribute('cy', String(circle.cy.baseVal.value - dy))
    }

    document.onmouseup = (e) => {
        circle.classList.remove('moving')
        canv.onmousemove = null;
        canv.onmouseup = null;
    };
})

// canv.addEventListener("mousedown", (e)=>{
//     if (e.target !== bubble ){
//         // console.log(e.target.cx.baseVal.value);
//         // bubble.style.cx = '100';
//         // bubble.style.cy = '100';
//         console.log(e.target);
//         return;
//     }
//     console.log(bubble.style.stroke = "#ff0000")
//     let xoffset = bubblePos.cx - e.clientX;
//     let yoffset = bubblePos.cy - e.clientY;
//     let startX = e.clientX;
//     let startY = e.clientY;
//     canv.onmousemove = (e)=>{
//         // console.log(startX,' ', startY);
//         let dx = startX - e.clientX;
//         let dy = startY - e.clientY;
//         bubblePos.cx = bubblePos.cx - dx;
//         bubblePos.cy = bubblePos.cy - dy;
//         startX = e.clientX;
//         startY = e.clientY;
//         console.log(bubblePos.cx, ' ', bubblePos.cy);
//         bubble.style.cx = String(bubblePos.cx);
//         // bubble.style.cy = String(bubblePos.cy);
//         bubble.setAttribute('cy', String(bubblePos.cy));
//     };
//     document.onmouseup = (e)=>{
//         canv.onmousemove = null;
//         canv.onmouseup = null;
//     };
// })

let bubblePos = {
    cx: 14,
    cy: 14
};

newBubble.addEventListener('click', ()=>{
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    const rect = canv.getBoundingClientRect();
    circle.setAttribute('id', 'newB'+count)
    count += 1;
    circle.setAttribute('r', '14');
    circle.setAttribute('cx', String(getRndInteger(0, rect.width)))
    circle.setAttribute('cy', String(getRndInteger(0, rect.height)))
    circle.setAttribute('fill', '#555500')
    circle.classList.add('grab')
    shapesList.push(circle)
    canv.appendChild(circle)
});

function cleanup(e){
    const circle = e.target;
    console.log(circle);
    circle.onmousemove = null;
    circle.onmouseup = null;
    console.log('clean up');
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


// dragElement(d)

function dragElement(el){
    el.onmousedown = dragMouseDown
}

function dragMouseDown(e){
    e = e || window.event
    e.preventDefault()
    console.log(e.target);
    p3 = e.clientX;
    p4 = e.clientY;
    // console.log(p3, ' ', p4);
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
}

function closeDragElement(){
    document.onmouseup = null;
    document.onmousemove = null;
}

function elementDrag(e){
    e = e || window.event
    e.preventDefault()
    // console.log(e.target);
    p1 = p3 - e.clientX;
    p2 = p4 - e.clientY;
    p3 = e.clientX;
    p4 = e.clientY;
    // set the element's new position:
    m.style.top = (m.offsetTop - p2) + "px";
    m.style.left = (m.offsetLeft - p1) + "px";
}