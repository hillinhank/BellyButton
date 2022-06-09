// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//

//var numbers = [0,2,4,6,8];
//var added = numbers.map(function(addit){return addit +5;});

//-----------------------------
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", trace, layout);
//----------------------
// Since the code below is displaying percentages, the pie chart is used (line 36)
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

//----------------------------
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);
   
//-----12.2.1 Functiional java - select specific data, sort specific data, ---------------------


// .map()


// Example:
//let words = ['these','words', 'need', 'capitalized']
//let caps = words.map(word => word.toUpperCase())
//console.log(caps)
//----------------------------
// Example:
//let numbers = [1,2,3,4]
//let squared = numbers.map(number => number*number)
//console.log(squared)
//-------------------
// Example: Note: the anonymous function "num" could be named anything
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);
//----------------------
// Example: same as above but uses an arrow function
// var numbers = [1,2,3,4,5];


// var doubled = numbers.map(num => num * 2);
// console.log(doubled);
//---------------------
// Example: here map() is used to extract a specific property from each object in an array.
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);


// .filter()


// Example: return even numbers
//let numbers = [13,22,56,79,90]
//let evenNumbers = numbers.filter(number => number % 2 == 0)
//console.log(evenNumbers)
//---------------------------
// Example: return numbers greater than 1
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);


// .sort()


//-----------------------
// Example: takes in an anonymous function. During each iteration, the anonymous function, an arrow function in this case, compares one element of the array (a) with another element in the array (b). From a, it subtracts b. If the result is negative (i.e., b is larger than a) then it stays put. If the result of the subtraction is positive, the order of the two elements is reversed.
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);
// //------------------------
// // Example: same as above but .reverse() flips it
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
//     sortedAge.reverse()
// console.log(sortedAge);


// .slice()


//------------
//Example: not sure why it didnt work
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
//-----------
//Example: again, not working
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//words.slice(3, );


// this is where 12.2.2 starts and start using data.js

