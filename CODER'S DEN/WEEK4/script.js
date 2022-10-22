// // //Exercise day4 level 1 number 1 
// let age = Number(prompt('Enter your age'))

// if(age >= 18){
//   console.log('You are old enough too drive')
// } else if(age < 18){
//   console.log(`You are left with ${18 - age} years to drive.`)
// } 


// //Exercise day4 level 1 number 2
// let  myAge = Number(prompt('Enter your age'))
// let  yourAge = Number(prompt('Enter your age'))

// if(yourAge > myAge){
//   console.log(`You are ${yourAge - myAge} years older than me.`)
// }else{
//   console.log(`I am ${myAge - yourAge} years older than you.`)
// }


// // Exercise day4 level 1 number 3
// let a = 4
// let b = 3

// if(a > b){
//   console.log(`${a} is greater than ${b}`)
// }else{
//   console.log(`${a} is less than ${b}`)
// }

// // using ternary
// ?(a > b) console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)


// //Exercise day4 level 1 number 4
// let num = Number(prompt('Enter a number'))
// if(num % 2 == 0){
//   console.log(`${num} is an even number`)
// }else{
//   console.log(`${num} is an odd number`)
// }


//Exercise day4 level 2 number 1
let grade = Number(prompt('Enter student grade'))
if(grade >= 80 && grade <= 100){
  console.log('A')
}else if(grade >= 70 && grade <= 89){
  console.log('B')
}else if(grade >= 60 && grade <= 69){
  console.log('C')
}else if(grade >= 50 && grade <= 59){
  console.log('D')
}else if(grade >= 0 && grade <= 40){
  console.log('F')
}else{
 console.log('Please Enter range of 0 to 100')
}



//Exercise day4 level 2 number 2
let season = (prompt('Enter season')).toLowerCase()

if(season === 'september'){
  console.log('Autumn')
}else if(season === 'october'){
  console.log('Autumn')
}else if(season === 'november'){
  console.log('Autumn')
}else if(season === 'december'){
  console.log('Winter')
}else if(season === 'january'){
  console.log('Winter')
}else if(season === 'february'){
  console.log('Winter')
}else if(season === 'march'){
  console.log('Spring')
}else if(season === 'april'){
  console.log('Spring')
}else if(season === 'may'){
  console.log('Spring')
}else if(season === 'june'){
  console.log('Summer')
}else if(season === 'july'){
  console.log('Summer')
}else if(season === 'august'){
  console.log('Summer')
}



//Exercise day4 level 2 number 3
let day = (prompt('What is the day today?')).toLowerCase()


if (day === 'monday') {
    console.log('Monday is a working day')
  }else if(day === 'tuesday'){
    console.log('Tuesday is a working day')
  }else if(day === 'wednesday'){
    console.log('Wednesday is a working day')
  }else if(day === 'thursday'){
    console.log('Thursday is a working day')
  }else if(day === 'friday'){
    console.log('Friday is a working day')
  }else if(day === 'saturday'){
    console.log('Saturday is a weekend')
  }else if(day === 'sunday'){
    console.log('Sunday is a weekend')
  }else {
    console.log('It is not a week day.')
  }


//Exercise day4 level 3 number 1
let month = (prompt('enter a month')).toLowerCase()

if(month === 'january'){
  console.log('January has 31 days.')
}else if(month === 'february'){
  console.log('February has 28 days.')
}else if(month === 'march'){
  console.log('March has 31 days.')
}else if(month === 'april'){
  console.log('April has 30 days.')
}else if(month === 'may'){
  console.log('May has 30 days.')
}else if(month === 'june'){
  console.log('June has 31 days.')
}else if(month === 'july'){
  console.log('July has 31 days.')
}else if(month === 'august'){
  console.log('August has 31 days.')
}else if(month === 'september'){
  console.log('September has 30 days.')
}else if(month === 'october'){
  console.log('October has 31 days.')
}else if(month === 'november'){
  console.log('November has 30 days.')
}else if(month === 'december'){
  console.log('December has 31 days.')
}else {
  console.log('invalid input')
}