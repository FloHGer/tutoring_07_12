// calc v1
console.log('\nex[45][B][1]');

function add(){
    return '+';
}

function sub(){
    return '-';
}

function mult(){
    return '*';
}

function div(){
    return '/';
}


function calculator(num1, num2, cb){
    switch(cb()){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}


console.log(calculator(3, 5, add));



//////////////////////////////////////////////////
// calc v2
console.log('\nex[45][B][1]');

function add2(num1, num2){
    return num1 + num2;
}

function sub2(num1, num2){
    return num1 - num2;
}

function mult2(num1, num2){
    return num1 * num2;
}

function div2(num1, num2){
    return num1 / num2;
}


function calculator2(num1, num2, cb){
    return cb(num1, num2);
}


console.log(calculator2(3, 5, add2));



//////////////////////////////////////////////////
// word ranking ex39(5)
console.log('\nex[39][5]\n')

const task5 = (str) => {
    let words = str.replace(/[\W_]+/g," ").split(" ");
    let scores = [];
    for(let i=0; i<words.length; i++){
        let score = 0;
        for(let j=0; j<words[i].length; j++){
            score += words[i].toLowerCase().charCodeAt(j) - 64;
        }
        scores.push(score);
    }
    return words[scores.indexOf(Math.max(...scores))];
}



console.log(task5('The quick brown fox.'));
console.log(task5('Nancy is very pretty.'));
console.log(task5('Check back tomorrow, man!'));
console.log(task5('Today is Wednesday.'));




//////////////////////////////////////////////////
// pig latin ex39(B3)
console.log('\nex[39][B3]');

function taskB3(str){                                           // Create a function that takes a string 
    let arr = str.toLowerCase().split(' ');                     // string of words
    for(let i=0; i<arr.length; i++){
        for(let i=0; i<arr.length; i++){
            if('aeiou'.includes(arr[i].charAt(0))){                 // * Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.
                arr[i] += 'way';
                continue;
            }
            arr[i] = arr[i].slice(1) + arr[i][0] + 'ay';            // * Move the first letter of each word to the end of the word.
                                                                    // * Add "ay" to the end of the word.
        }
        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);  // * Preserve proper capitalization as in the examples below.
        return arr.join(' ');
    }
}

console.log(taskB3('Cats are great pets'));
console.log(taskB3('Tom got a small piece of pie'));
console.log(taskB3('He told us a very exciting tale'));



//////////////////////////////////////////////////
// square ex46
console.log('\nex[46]');

function squareNumber(num){
   return num ** 2;
}

function squareArr(array, cb){
    return array.map(elem => cb(elem));
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(squareArr(arr, squareNumber));