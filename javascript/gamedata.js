export function genData(){
    let a = []
    for (let i = 0; i < 81; i ++){
        // a.push(Math.floor(Math.random()*10));
        a.push(i);
    }
    return {
        rows: 9,
        cols: 9,
        data: a
    };
}