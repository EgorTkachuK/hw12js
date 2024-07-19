


// 1

// let user = {
//     name: 'Oslo',
//     age: 1000,
//     premium: true ,
//      hobby: 'playing tennis'
// };


// user.mood = 'happy'


// user.hobby = "'skydiving'"

// user.premium = "false"



// for (let key of Object.keys(user) ){
//     console.log(`${key} : ${user[key]}`)
// }


// 2


// let user = {
//     name: 'Oslo',
//     age: 1000,
//     premium: true ,
//      hobby: 'playing tennis'
// };

// let countProps = (obj) =>{
//   return  Object.keys(obj).length 
// }

// console.log(countProps(user))



// 3




// let company = {
//     OLaf : 3 , 
//     Niko : 4 , 
//     Otto : 2 
// }


// let bestWorkerCheck = (workersList) => { 
//     let bestWorker = 1 
//     for(let val of Object.values(workersList)){
    
//  if ( bestWorker < val) {  bestWorker = val }

//     }
//     console.log(`НАйкращим працівником є людина що виконала ${bestWorker}  завдань`)
//  }

//  bestWorkerCheck(company)

//  for (let key of Object.keys(company) ){
//     console.log(`${key} : ${company[key]}`)
// }

// 4

// let company = {
//     OLaf : 300 , 
//     Niko : 400 , 
//     Otto : 200 
// }

// let totalSalaryCheck = (workersList) => { 
//     let totalSalary =  0
//     for(let val of Object.values(workersList)){
//    totalSalary += val


//     }
//     console.log(totalSalary)
//  }
//  totalSalaryCheck(company)