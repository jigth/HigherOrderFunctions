import {countries} from '../data/countries_data.js'

// Find words that contains the same pattern (in this case, that substring cuz we're not using advanced regular expressions here!)
function findSimilarWords(pattern){
    // Countries with the specified pattern
    return countries.map(countrie => countrie.name)
                    .filter(name => name.toLowerCase().includes(pattern))
}

function countStartsWithLetter(letter) {
    // Count of countries that start with an specific letter
    return countries.map(countrie => countrie.name)
                    .filter(name => name.toLowerCase().startsWith(letter))
                    //.length
}

function lastTen() {
    let names = countries.map(countrie => countrie.name)
    return names.slice(names.length-10)
}


/* Testing functions */

function testSimilarWords(){
    let pattern1 = 'an',
    pattern2 = 'bar',
    pattern3 = 'buda';

    // console.log(findSimilarWords(pattern1))
    // console.log(findSimilarWords(pattern2))
    // console.log(findSimilarWords(pattern3))
}

function testCountStartsWithLetter() {
    let letter1 = 'a',
    letter2 = 'b',
    letter3 = 'c';

    //console.log(countStartsWithLetter(letter1))
    //console.log(countStartsWithLetter(letter2))
    //console.log(countStartsWithLetter(letter3))
}