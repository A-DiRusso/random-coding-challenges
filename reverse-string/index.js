function reverse(str) {
    const arrayOfStr = str.split('');
    const reversed = arrayOfStr.reverse();
    console.log(reversed.join(''));
}

reverse('Hello');