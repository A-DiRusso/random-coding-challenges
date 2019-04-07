const words = "'all2', 'ball3', 'ca1l'";

function order(words){
    // ...
    return words
      .split(' ')
      .sort(function( wordA, wordB ) {
      var numA = +(wordA.match(/\d+/g) [0]);
      var numB = +(wordB.match(/\d+/g) [0]);
      return numA - numB;
    })
    .join(' ');
  }
  
  function order(words){
    return words.split(' ').sort(function(a, b){
       return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
 }  

console.log(order(words));