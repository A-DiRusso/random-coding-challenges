function reverse(str) {
    const arrayOfStr = str.split('');
    const reversed = arrayOfStr.reverse();
    console.log(reversed.join(''));
}

reverse('Hello');

// also
function reverseAgain(s) {
    if(s.length === 0) {
return s;
    }
    let indexA = Math.floor(s.length/2) - 1;
    let indexB = s.length % 2 === 0 ? Math.floor(s.length/2) :
                                        Math.floor(s.length/2) + 1;
    while(indexA >= 0) {
        [s[indexA], s[indexB]] = [s[indexB], s[indexA]];
        indexA --;
        indexB ++;
    }
    return s;
};

console.log(reverseAgain('olleH'));

function recursionTernary(str) {
    return (str === '') ? '' : recursionTernary(str.substr(1)) + str.charAt(0);
}

console.log(recursionTernary('yranreT noisruceR'));