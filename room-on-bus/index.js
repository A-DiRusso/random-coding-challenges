const cap = 50;
const on = 3;
const wait = 39;

function enough(cap, on, wait) {
    let t = on + wait;
    if(t < cap) { 
        let r = cap - t;
        return `There are ${r} seats left on the bus after the next stop.`;   
    } else {
        let s = t - cap;
        return `There are ${s} too many people to fit on the bus at this stop.`;
    }
}

console.log(enough(cap, on, wait));

// Shorter solution - but no descriptive sentences :)

function enoughShortVersion(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }


  console.log(enoughShortVersion(cap, on, wait));