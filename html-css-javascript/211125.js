// // //arrays 

// // let num = 10;
// // let name = "Gokul";


// // let cities = ["chennai", "Madurai","Trichy"];

// // let marks = [78, 23, 4, 23, 34 ];

// // // length - total element in the array 

// // // console.log(cities.length);
// // // console.log(marks.length);

// // // console.log(cities[0]);
// // // console.log(cities[1]);
// // // console.log(cities[2]);

// // // last element 

// // // console.log(marks[marks.length-1]);
// // // console.log(marks[marks.length-2]);
// // // console.log(marks[marks.length-3]);

// // // mix of int and string 

// // // let arr = [3, 4, 5, 6, 'a', "abc",[3,4]];

// // // console.log(arr);
// // // console.log(arr[6][0]);
// // // console.log(arr[6][1]);


// // //2d array 

// // // let matrix = [[3, 4, 5], [4, 5, 7], [6, 7, 8]];

// // // console.log(matrix[0]);
// // // console.log(matrix[1]);
// // // console.log(matrix[2]);

// // // console.log(matrix[0][0]);
// // // console.log(matrix[0][1]);
// // // console.log(matrix[0][2]);

// // // console.log(matrix[1][0]);
// // // console.log(matrix[1][1]);
// // // console.log(matrix[1][2]);

// // // console.log(matrix[2][0]);
// // // console.log(matrix[2][1]);
// // // console.log(matrix[2][2]);

// // // Array Methods 

// // let array = ['a', 'b', 'c', 'd', 'e'];

// // // push - add element to the end 

// // array.push('f')

// // console.log(array.pop());
// // console.log(array.shift());
// // console.log(array.shift());
// // console.log(array.unshift('a'));
// // console.log(array);

// // // delete array[2]
// // // console.log(array);

// // // array.splice(2,2);
// // // array.splice(0,1);
// // console.log(array);

// // array.splice(1,1,'m')
// // console.log(array);

// // console.log(array.slice(1,3));
// // console.log(array.slice(1,2));

// // array.reverse()
// // console.log(array);

// // let str = array.join()
// // console.log(str);

// // let str3 = "g,t,r,e"
// // let arr3 = str3.split(',')
// // console.log(arr3);


// // let nums = [1, 2, 3];
// // let doubled = nums.map(n => n*2);

// // console.log(doubled);

// // let firstArr = [1, 2, 3];
// // let secoundArr = [1, 2, 3];

// // let joinedArr = [firstArr,secoundArr];
// // console.log(joinedArr)

// // joinedArr = firstArr.concat(secoundArr)
// // console.log(joinedArr)

// // let joined = [...firstArr, ...secoundArr];
// // console.log(joinedArr)


// // // for loop 

// // let Arr = [12, 10, 23];

// // for(let i=0; i<Arr.length; i++){
// //     // console.log(Arr[i]);
    
// // } 

// // for(let value of Arr){
// //   console.log(value);
// // }

// // Arr.forEach(item => {
// //   console.log(item);
// // });


// let person ={
//     name : "Gokul",
//     age: 23,
//     location: "Guduvancheri"
// };

// console.log(person.name); // Accessing Values Dot notation

// console.log(person["age"]); //Bracket notation 

// let keys = Object.keys(person);
// console.log(keys);     // Object.keys() — Returns array of keys

// let values = Object.values(person);
// console.log(values);


// for (let key in person){
//     console.log(key,person[key]);   //Looping Objects (for…in)
    
// }

// let student = {
//   name: "Gokul",
//   marks: {
//     maths: 90,
//     science: 85,
//     english: 88
//   }
// };


// console.log(student.marks.maths);    
// console.log(student["marks"]["science"]); 

// for (let subject in student.marks) {
//   console.log(subject, student.marks[subject]);
// }

// const timeoutId = setTimeout(()=>{
//     console.log("Hello after 2s");
    
// },2000)

// clearTimeout(timeoutId);


// const intervalId = setInterval(()=>{
//     console.log("tick");
    
// },1000)


// function doTask(data, callback) {
//   setTimeout(() => {
//     const result = data * 2;
//     callback(null, result); 
//   }, 1000);
// }

// doTask(5, (err, res) => {
//   if (err) return console.error(err);
//   console.log(res); 
// });


// login(user, (err, user) => {
//   if (err) return;
//   loadProfile(user.id, (err, profile) => {
//     if (err) return;
//     saveAnalytics(profile, (err) => {
//       // deeply nested...
//     });
//   });
// });



// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const ok = true;
//     if (ok) resolve("Done");
//     else reject(new Error("Failed"));
//   }, 1000);
// });

// p.then(value => {
//   console.log("Success:", value);
// }).catch(err => {
//   console.error("Error:", err);
// });



// fetchUser() // returns a promise
//   .then(user => fetchOrders(user.id))
//   .then(orders => processOrders(orders))
//   .catch(err => console.error("Any step failed:", err));


const element = React.createElement("h1", null,"Hello" )




























