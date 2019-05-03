//this doesn't work yo :(
function divisibleBy(numbers, divisor){
    let n = numbers;
    let d = divisor;
    for (let i = 0; i < n.length; i++) {
        (n[i] % d[i] !== 0) ? n : false;
    }
}

console.log('on?')
const numbers = [4]
const divisor = [2]
console.log(divisibleBy(numbers, divisor));