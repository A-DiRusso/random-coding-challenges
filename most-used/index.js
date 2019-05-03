console.log('is this thing on?')

 // this function works for any array int, or strings       
const arr = [1, 2, 3, 4, 3, 3, 5, 5, 5, 1, 3];

// this is an Immediately Invoked Function Expression(IIFE)
// that is set to a const to log the result
const result = (function(arr){
    //set up object to be built out with arr[i] as keys 
    //with Object.value to = arr[i] frequency
    let counts = {};
    //Set initial value of 'compare' to 0
    let compare = 0;
    //Set holder for the most frequent item
    let mostFrequent;

    //caching length in the len variable
    for (let i = 0, len = arr.length; i < len; i++) {
        //for the looping set the num variable
        let num = arr[i];
        //if this is the 1st instance of an item
        if(counts[num] === undefined){
            //store it in counts object with key of num and value of 1
            counts[num] = 1;
        } else {
            //counts[num] key exsists so add value 1 to exsisting key
            counts[num] = counts[num] + 1;
        }
        //Now go through the object and compare 
        //first round against 0 (set above)
        //then agianst the currently highest counts[num]
        if(counts[num] > compare){
            compare = counts[num];
            //set most Frequent to the object Key  
            //for the highest object value
            mostFrequent = arr[i]
        }
        
    }
    return mostFrequent;
    
})(arr);

console.log('result:', result);
