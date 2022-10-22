//Exercise day3 level 1 number 1
let firstName = "Robert"
let lastName = "Adoga"
let country = "Nigeria"
let city = "Benin"
let age = 26
let isMArried = false
let year = 2022
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMArried)
console.log(typeof year)

//Exercise day3 level 1 number 2
console.log((typeof "10") == 10)

//Exercise day3 level 1 number 3
console.log((parseInt("9.8") == 10))

//Exercise day3 level 1 number 4
let myName = "Robert"
console.log(myName == "Robert")


let today = "Monday"
console.log(today == "Monday")


let thisYear = 2022
console.log(thisYear == 2022)


//Exercise day3 level 1 number 4
// let myName = "Robert"
console.log(myName != "Robert")

// let today = "Monday"
console.log(today != "Monday")

// let thisYear = 2022
console.log(thisYear != 2022)
 
//Exercise day3 level 1 number 5
4 > 3 == true; console.log(4 > 3)
4 >= 3 == true; console.log(4 >= 3)
4 < 3 == false; console.log(4 < 3)
4 <= 3 == false; console.log(4 <= 3)
4 == 4 == true; console.log(4 == 4)
4 === 4 == true; console.log(4 === 4)
4 != 4 == false; console.log(4 != 4)
4 !== 4 == false; console.log(4 !== 4)
4 != '4' == false; console.log(4 != '4')
4 == '4' == true; console.log(4 == '4')
4 === '4' == false; console.log(4 === '4')

let lenOfPython = "python"
let lenOfJargon = "jargon"

console.log(lenOfPython.length  != lenOfJargon.length)


//Exercise day3 level 1 number 6
4 > 3 && 10 < 12 == true; console.log(4 > 3 && 10 < 12)
4 > 3 && 10 > 12 == false; console.log(4 > 3 && 10 > 12)
4 > 3 || 10 < 12 == true; console.log(4 > 3 || 10 < 12)
4 > 3 || 10 > 12 == false; console.log(4 > 3 || 10 > 12)
!(4 > 3) == false; console.log(!(4 > 3))
!(4 < 3) == true; console.log(!(4 < 3))
!(false) == true; console.log(!(false))
!(4 > 3 && 10 < 12) == false; console.log(!(4 > 3 && 10 < 12))
!(4 > 3 && 10 > 12) == true; console.log(!(4 > 3 && 10 > 12))
!(4 === '4') == true; console.log(!(4 === '4'))

let dragon = "dragon"
let python = "python"

console.log(!(dragon.includes("on") && python.includes("on")))


//Exercise day3 level 1 number 7

// what is the year of today
let date = new Date()
console.log(date.getFullYear())

// What is the month today as a number?
console.log(date.getMonth())

// What is the date today?
console.log(date.getDate())

// What is the day today as a number?
console.log(date.getDay())

// What is the hours now?
console.log(date.getHours())

// What is the minutes now?
console.log(date.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getSeconds(1970, 52))

//Exercise day3 level 2 number 1
// let base = Number(prompt("enter base"))
// let height = Number(prompt("enter height"))
// let area = 0.5 * base * height
// console.log(area)

// //Exercise day3 level 2 number 2
// let sideA = Number(prompt("enter side a"))
// let sideB = Number(prompt("enter side b"))
// let sideC = Number(prompt("enter side c"))
// let perimeter = sideA + sideB + sideC
// console.log(`The perimeter of the triangle is ${perimeter}`)

// //Exercise day3 level 2 number 3
// let length = Number(prompt("enter length"))
// let width = Number(prompt("enter width"))
// let sum = length * width
// let perimeter1 = 2 * sum
// console.log(`The area of a rectangle is ${perimeter1}`)

// //Exercise day3 level 2 number 4
// const myPi = 3.14
// let radius = Number(prompt("enter radius"))
// let result = myPi * radius * radius
// console.log(`The area of a circle is ${result}`)
// // circumference of a circle 
// let circum = 2 * myPi * radius
// console.log(`The circumference of the circle is ${circum}`)


// //Exercise day3 level 2 number 5

// //Exercise day3 level 2 number 6

// //Exercise day3 level 2 number 7

// //Exercise day3 level 2 number 8

// //Exercise day3 level 2 number 9
// let hours = Number(prompt("enter hour"))
// let ratePerHour = Number(prompt("enter rate"))
// let myResult = hours * ratePerHour
// console.log(`Your weekly earning is ${myResult}`)


//Exercise day3 level 2 number 10
let myNameLen = "Robert"

if(myNameLen.length > 7){
  console.log("my name is long")
}else{
  console.log("My name is short")
}


//Exercise day3 level 2 number 11
let myFirstName = "Robert"
let myLastName = "Adoga"

if(myFirstName.length > myLastName.length){
  console.log("My first name is greater than my last name")
}else{
  console.log("My last name is greater than my first name")
}


//Exercise day3 level 2 number 12
let myAge = 26
let yourAge = 20
let rslt = myAge - yourAge
console.log(`I am ${rslt} years older than you`)

//Exercise day3 level 2 number 13
let birthYear = Number(prompt("enter birth year"))

if(birthYear == 1995){
  console.log("You are 25. You are old enough to drive")
}else if(birthYear == 2005){
  console.log('you are 15, You will be allowed to drive after 3 years.')
}

//Exercise day3 level 2 number 14
let newDate = new Date()
let myUser = Number(prompt('Enter number of years you live'))
let input = newDate.getSeconds()
console.log(`You lived ${input * myUser} seconds`)


//Exercise day3 level 2 number 15
const now = new Date()
const myYear = now.getFullYear()
const month = now.getMonth() +1
const hours = now.getHours() 
const minutes = now.getMinutes() 
const day = now.getDate() 

console.log(`${myYear}-${month}-${day} ${hours}:${minutes}`) //(i)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`) //(ii)
console.log(`${day}/${month}/${year} ${hours}:${minutes}`) //(iii)


//Exercise day3 level 3 number 1
console.log(`${myYear}-${month}-${"00"+day.slice(-2)} ${hours}:${minutes}`) //(i)
