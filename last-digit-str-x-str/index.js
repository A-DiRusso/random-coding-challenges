
function lastDigit(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('').slice(-2).join('');
    let base = parseInt(str1[str1.length - 1]);
    let power = ((str2 - 2) % 4) + 10;
  
  
    if (str2.length === 1 && power === 8) {
      return 1;
      
    } else if (str1.length === 1 && (power - 7 === 1)) {
      return 0;
      
    } else if (str2 === "00") {
      return 0;
      
    } else {
      let calc = Math.pow(base, power).toString().split('');
      return parseInt(calc[calc.length -1]);
    }
}

function lastDigitAlt(str1, str2){  
    return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
  }


console.log(lastDigit('234', '342'));
console.log(lastDigitAlt('432', '243'));