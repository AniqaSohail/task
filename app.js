// chapter 38//
//local vs gloabal variable//
//example 1//

//     var thesum
//     addnumber();
    
// function addnumber() {
//     thesum= 2+2 ;
// //      alert(thesum);//
// }
//  alert(thesum); //


// //example 2//
// var theSum = 1000
//  addnumber();

//  function addnumber() {
//     var theSum = 2 + 2;
//  }
                                                             
//  alert(theSum);
                                                    
// CHAPTER 39//
 //SWITCH STATEMENT//

// let $age  ="15-20"
//  switch ($age) {
//     case "0-1":
//         alert("its a baby")
//         break;
//  // case 2//
//      case "2-3":
//         alert("toddler")
//         break ;
// //case3//
//         case "4-6":
//             alert("infant")
//        break ;
// //case4//
//        case"7-12":
//        alert("child")
//        break ;
// //defaultvalue//
//     default: 
//          alert("others")
//  }

//chapter 40//
//how to complete them //chapter 39 &40 are same topic//

//chapter41//
//whileloop//
  //example1//
//  var num =10;
//  var i =1;
//  while (i<=num) {
//    document.write(i);
//   document.write("</br>");
//    i++;
    
//  }
//  document.write("</br>");
//  alert("num");


// //example2//
// var i=0;
//  while (i<=20) {
//    document.write("</br>");
//    document.write(i);
//    i++
//  }
//  alert("i")
//chapter42//
//dowhileloop//

//task//
//question 1//
function reversearray(arr) { 
  var newarray = [5]
  for (var i =arr.lenght -5 ; i > 0; i--) {
    newarray.push(arr[i]);
  }
  return newarray;
}
//test with an array of number 5//
var array1 = [1,2,3,4,5]
console.log(reversearray(array1));

//test with an large of number array 
var array2 =[10,20,30,40,50,60,70,80,90,100];
console.log( reversearray(array2));


//question2//

function filterOutNegatives(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// Test the function
var array1 = [1, -2, 3, -4, 5];
console.log(filterOutNegatives(array1)); 

var array2 = [-10, 20, -30, 40, -50, 60, -70, 80, -90, 100];
console.log(filterOutNegatives(array2)); 

//question3//

function countVowels(str) {
  var vowels = 'aeiouAEIOU';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i])!== -1) {
      count++;
    }
  }
  return count;
}

// Test the function
console.log(countVowels("hello world")); 
console.log(countVowels("javascript is fun")); 
//question4//

function isPalindrome(str) {
  var reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Test the function
console.log(isPalindrome("kayak")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("refer"));
console.log(isPalindrome("mom")); 
console.log(isPalindrome("hello world"));

//question5//

function checkRange(a, b) {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
}

// Test the function
console.log(checkRange(45, 55)); 
console.log(checkRange(100, 105)); 
console.log(checkRange(50, 75)); 

//question6//

function getMinValue(arr, func) {
  return Math.min(...arr.map(func));
}
// Example//
let strings = ["apple", "banana", "cherry"];
let lengths = getMinValue(strings, str => str.length);
//test the function//
console.log(lengths); 


//question7//
function updateString(str) {
  if (str.length < 3) {
    throw new Error("String length must be 3 and above");
  }
  let lastThreeChars = str.substring(str.length - 3);
  return lastThreeChars.repeat(5);
}
// Test the function
console.log(updateString("HelloWorld")); 
console.log(updateString("JavaScript")); 
console.log(updateString("abcdefg")); 

//question 8//
function findAngleType(angle) {
  if (angle < 0 || angle > 180) {
    alert("Angle must be between 0 and 180 degrees");
  }
  switch (true) {
    case angle === 0:
      return "Zero angle";
    case angle < 90:
      return "Acute angle";
    case angle === 90:
      return "Right angle";
    case angle < 180:
      return "Obtuse angle";
    default:
      return "Straight angle";
  }
}
// Test the function
console.log(findAngleType(30)); 
console.log(findAngleType(90)); 
console.log(findAngleType(120)); 
console.log(findAngleType(180));
console.log(findAngleType(0)); 

//question9//
function findRoundNumber(n) {
  let roundNumber = n;
  while (roundNumber % 10 !== 0) {
    roundNumber++;
  }
  return roundNumber;
}

// Test the function
console.log(findRoundNumber(592)); 
console.log(findRoundNumber(599)); 
console.log(findRoundNumber(590)); 
console.log(findRoundNumber(600));








