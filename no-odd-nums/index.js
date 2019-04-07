const arr = [1,2,3,4,5];

function noOdds(arr) {
    let arrEven = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        }
    }
    return arrEven;
}

console.log(noOdds(arr))