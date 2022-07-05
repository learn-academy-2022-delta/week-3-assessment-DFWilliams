// ASSESSMENT 3: Coding Practical Questions with Jest

const { boolean, number, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided. 

describe("nacciArray", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]

        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(nacciArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(nacciArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

  //ReferenceError: nacciArray is not defined


  
// b) Create the function that makes the test pass.

//Pseudo Code:
  // Create a function named nacciArray
  // set param - num
  // declare a variable named fibArray as an array with 2 numbers [1,1]
  // use a for loop to iterate through each number 
  // use .push add numbers to the array that are in Fibonacci's sequence 
  // return the array with the newly pushed values


 const nacciArray = (num) => {
    const fibArray = [1,1];
       for (let i=2; i < num; i++){
       fibArray.push(fibArray[i-2] + fibArray[i-1])
    } 
    return fibArray
} 


//Test Suites: 1 passed, 1 total




 
 
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("leasttoGreatest", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
         // expected output = [-9, 7, 9, 199]
        
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // expected output: [-823, 7, 23]
    expect(leasttoGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(leasttoGreatest(fullArr2)).toEqual([-823, 7, 23])
    })
  })

  //    ReferenceError: leasttoGreatest is not defined


// b) Create the function that makes the test pass.
  
  //Pseudo code:
    // declare a function called leasttoGreatest
    // use .filter to get a new array 
    //  use .sort with two arguments (a,b) to sort the new from least to greatest


const leasttoGreatest = (array) => {
  const newArray = array.filter (value => typeof
    value === "number" && value % 2 !== 0
  ); newArray.sort((a,b) => {return a - b})
    return newArray
} 

// console.log (leasttoGreatest(fullArr1))

// Test Suites: 1 passed, 1 total




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulateSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]

        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]

        const numbersToAdd3 = []
        // Expected output: []
    expect(accumulateSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulateSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulateSum(numbersToAdd3)).toEqual([])
    })
  })

//   ReferenceError: accumulateSum is not defined


// b) Create the function that makes the test pass.

  //Psuedo code:
    // declare a function called accumulateSum 
    // declare a variable called sum and assign it to 0 
    // use .map to return an array with the same length 
    // use addition assignment (+=) to add the values with each iteration



    const accumulateSum = (array) => {
        let sum = 0;
       return array.map (value => {
            return  sum += value
        })

    }
// console.log (accumulateSum(numbersToAdd1))

// Test Suites: 1 passed, 1 total