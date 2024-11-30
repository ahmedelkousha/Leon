// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); //Zero
// console.log(a.charAt(13).toUpperCase().repeat(8));  //8H
// console.log(a.split(" ",1)); // [Elzero]
// console.log(a.substr(0,6) + " " + a.substr(11)); // Elzero School
// console.log(a.charAt(0).toLowerCase() + a.slice(1 , a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase()); //eLZERO WEB SCHOOl

// let b = 10;

// if (b < 10) {
//     console.log(10);
// }
// else if (b>=10 && b<=40) {
//     console.log("10 to 40");
// }
// else if (b>40) {
//     console.log("> 40");
// }
// else {
//     console.log("Unknown");
// }

// //Ternary If
// (b<10)?console.log(10):(b>=10 && b<=40)?console.log("10 to 40"):(b>40)?console.log("> 40"):console.log("Unknown");

// let st = "Elzero Web School";
// if (typeof(st) === typeof("34")) {
//     console.log("Good");
// }


// if (st.includes("W") || st.includes("w")) {
//     console.log("Good");
// }
// console.log(st.indexOf("W"));
// console.log(`The youtube channel name is ${st}`);
// console.log(Array.isArray(st));

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// let array1 = my.slice(0,++counter).reverse()
// console.log(array1);
// array1.shift() && array1.pop();
// console.log(array1);
// array1.shift();
// let array2 = array1.toString().slice(2,6);
// console.log( "El" + array2);
// let array3 = array2.slice(2,4);
// console.log(array3.slice(0,1) + array3.charAt(1).toUpperCase());

// for (i=0; i<my.length; i++) {
// //     console.log(my[i]);
// }

// console.log("-----------------------");

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Black"];
// let models = [2019, 2020, 2021, 2022, 2023, 2024];
// showCount= 5;

// for (let i=0; i<products.length; i++) {
//     console.log("#".repeat(15));
//     console.log(`# ${products[i]}`);
//     console.log("#".repeat(15));
//     console.log(`Available Colors for ${products[i]}`);
//     for(let j=0; j<colors.length; j++){
// console.log(` - ${colors[j]}`);
// }
// console.log("Available models")
// for(let k=0; k<models.length; k++){
//     console.log(" - " + models[k]);
// }
// }

/*
document.write(`<h1>Show ${showCount} Products</h1>`);
for (i=0; i<showCount; i++){
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    document.write(`<h4>Available Colors</h4>`);
    document.write(`<p>${colors.join(" | ")}</p>`);
    // for(let j=0; j<colors.length; j++){
    //     document.write(`<p>${colors[j]}</p>`);
    // } Alternative
    document.write(`<h4>Available Models</h4>`);
    document.write(`<p>${models.join(" | ")}</p>`);
    document.write(`<br>`);
    // for(let k=0; k<models.length; k++){
    //     document.write(`<p>${models[k]}</p>`);
    // } Alternative
    
    document.write(`</div>`);
}
*/

/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Rady", "STOP", "Samera"];
let myEmployees = ["Amgad", "Sameh", "Ameer", "Omar", "Onana", "Othman", "Amany", "Samia", "Ragaa"];

const new_array = myAdmins.map(word => word.toLowerCase()); //myAdmins to lower case
const new_array2 = myEmployees.map(word => word.toLowerCase()); //myEmployees to lower case
console.log(new_array);
console.log(new_array2);

if (new_array.includes("stop")) {
adminsNum = myAdmins.slice(0, new_array.indexOf("stop")) //employees til stop word
}

document.write(`<div>We have ${adminsNum.length} Admins</div>`); //employeeNum
document.write(`<hr>`);
for(let i=0; i<adminsNum.length; i++){
    
    document.write(`<h3>The Admin for team ${i+1} is ${myAdmins[i]}</h3>`);
    document.write(`<h4>Team Members</h4>`);
    for (let j=0, x=1; j<myEmployees.length; j++){
            
    if(new_array[i].charAt(0) === new_array2[j].charAt(0)){
        document.write(` - [${x}] ${myEmployees[j]}`);
        document.write(`<br>`);
        document.write(`<br>`);
        x++;
    }
}
}
*/

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);

// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filteredFriends = friends.filter(function(element){
// return element.startsWith("A")? true: element.startsWith("A".toLowerCase())? true: false;
// })
// console.log(filteredFriends);

// let sentence = "I Love Foood Code Too Playing Much";
// // console.log(sentence.split(" ").length);
// let smallWords = sentence.split(" ").filter(function(element) {
//     return element.length <= 4;
// })
// console.log(smallWords.join(" "));

//Filter strings + Multply

// let mix = "A13BS2ZX";
// let filteredMix = mix.split("").filter(function(element){
// return !isNaN(parseInt(element));
// }).map(function(element){
// return element * element;
// })
// console.log(filteredMix.join(" "));

// const array = [1,2,3,4,5];
// let initial = 2;
// let val = array.reduce(function(acc, curr, initial){
//     return initial * acc * curr;
// });

// console.log(val);


// const redfunc = (array) => {
//     let sum = 0;
//     for(i=0; i<array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(redfunc([1,2,3]));

// function customReduce(array, callback, initialValue){
//     let accumlator;
//     let startIndexCurrent;

//     if(initialValue !== undefined){
//         accumlator = initialValue;
//         startIndexCurrent = 0;
//     } else {
//         accumlator = array[0];
//         startIndexCurrent = 1;
//     }

//     for(let i =startIndexCurrent; i < array.length; i++){
//         accumlator = callback(accumlator, array[i])
//     }

//     return accumlator;


// }

// console.log(customReduce([1,2,3], function (acc, curr){
//     return acc + curr;
// },4))


// [1,1,1,1,2,2,3,4,4,4,4,4,5,5];
// let new_Array = [];
// function filteredArray(array){
//     for(i=0; i<array.length; i++){
//         if(!new_Array.includes(array[i])){
//             new_Array.push(array[i]);
//         }
//     }
//     return new_Array;
// }
// console.log(filteredArray([1,1,1,1,2,2,3,4,4,4,4,4,5,5]));

// let arr = ['aaa', 'bb', 'cccc', 'dd'];
// console.log(arr.join(""));

// let new_Array = [];
// function filteredArray(text){
//     let str = text.join("")
//     for(i=0; i<str.length; i++){
//         if(!new_Array.includes(str.charAt(i))){
//             new_Array.push(str.charAt(i));
//         }
//     }
//     return new_Array;
// }
// console.log(filteredArray(['aaa', 'bb', 'cccc', 'dd']));
