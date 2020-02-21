import {countries} from '../data/countries_data.js'

// Exercise 1
export function sortCountries(criteria="name", order="ascending") {
    if (["ascending", "descending"].includes(order) === false)
        throw "Please use a valid sorting order ('ascending', or 'descending'";
    
    let sortingSide = order === "ascending" ? 1 : -1;
    if (["name", "capital", "population"].includes(criteria) === false)
        throw "Please use a valid sorting criteria ('name', 'capital', or 'population'";
    else {
        return countries.sort((a, b) => {
            return a[criteria] > b[criteria] ? sortingSide
                 : a[criteria] < b[criteria] ? -sortingSide
                 : 0
          });
    }
}


// Exercise 2
export function mostSpokenLanguages(amountToShow=10) {
    let langsMap = new Map();
    countries.forEach(countrie => countrie.languages
                .forEach(language => {
                    if (!langsMap.has(language)) {
                        // Add language to the map if it doesn't exists
                        langsMap.set(language, 1);
                    }
                    else {
                        // Increments current language in the Map by 1
                        langsMap.set(language, langsMap.get(language) + 1);
                    }
                })
            );
            
    let queryResult = [...langsMap]
                        .sort((langA, langB) => {  // Make the map an array and sort descengly
                            if (langA[1] > langB[1]) return -1;
                            if (langA[1] < langB[1]) return 1;
                            return 0;
                        })
                        .slice(0, amountToShow);  // Get top N most frequent languages
    
    queryResult.forEach(element => [element[1], element[0]] = [element[0], element[1]]);
    return queryResult;
}

// Exercise 3
export function mostPopulatedCountries(amountToShow=10) {
    const topNcountries = sortCountries("population", "descending")
                          .slice(0, amountToShow);

    const queryResult = [];
    // Create new array in the correct output format from "topNcountries"
    topNcountries.forEach(countryObj => {  
        let country = {
            country: countryObj.name,
            population: countryObj.population
        };
        queryResult.push(country);
    });
    return queryResult;
}