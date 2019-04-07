const db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

// console.log(Object.vaules(db)[0]);  === 'welcome'
// function greet(language) {
//     for (let i = 0; i < language.length; i++) {
//         for(let j = 0; j < db.length; j++) {
//             if (language.i === Object.values(db)[j]) {
//                 return Object.keys(value);
//             } else {
//                 return 'Welcome', "Your function should have returned 'Welcome';
//             }
//         }
//     }
// }

// function greet(language) {
//     let aWord = language.split(' ');
//     console.log(aWord[0]); // === 'english' 'dutch' AKA Object.keys(db)[i]
//     for (let i = 0; i < db.length; i ++) {
//         if (language.forEach(aword[0] === Object.keys(db)[i])) {
//             console.log(Object.keys(db)[i])
//         }

//     }
// }
function greet(language) {
    let Language = language.toLowerCase();
    let str = "";
    
    const obj = {english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    if (Language) {
        if (obj[Language]) {
            str += obj[language];  
        } else {
            str += obj['english'];
        }
    } else {
        str += obj['english'];
    }
    return str;
}

console.log(greet('english')); // 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet('dutch'));// 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('IP_ADDRESS_INVALID')); // 'Welcome', "Your function should have returned 'Welcome'. Try again.");

// this also works its from Repl.it so much to learn 
function greet(lang) {
    return langs[lang]||langs['english'];
  }