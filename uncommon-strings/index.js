const A = "this apple is sweet";
const B = "this apple is sour";

function uncommonFromStrings(A, B) {
    const arrayA = A.split(' ');
    const arrayB = B.split(' ');
    const arrayC = arrayA.concat(arrayB);
    const sortedArray = arrayC.sort();

    // let string = sortedArray.filter((v, i, self) => {
    //     return self.indexOf(v) === i;
    // });
    // return string; this returns all the values but with only one instance for each index
    return [...new Set(sortedArray)].sort().join('');
}