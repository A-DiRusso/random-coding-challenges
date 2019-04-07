const arr = [1, 2, 3, 99, 4, 0, 32, 23];

function minMax(arr) {
    let miniMax = [];
    miniMax.push(Math.min(...arr),
                 Math.max(...arr));
    return miniMax;
    

}

console.log(minMax(arr));