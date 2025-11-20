// console.log("Javascript pratice space ");

var number = 5;
var string = "Hello There ";
var isRad = true;

// document.getElementById('box1').innerHTML = string;


// if(number == 10){
//     console.log('yeah buddy');
// }else{
//     console.log('Nope!');
// }
// document.getElementById('box1').innerHTML = number+5;


// var groceries = ['Milk','Eggs','Cheese'];
// function listGroceries(){
//     for(i=0; i< groceries.length;i++){
//     console.log(groceries[i]);
// }
// }
// listGroceries();

// document.getElementById('bt').addEventListener('click',function(){
//     alert('successfully submitted')
// }); 

// Promise

function getUsers(){
    return[
        {username: 'john', email:'john@test.com'},
        {username: 'jane', email:'jane@test.com'},
    ]
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user)=> user.username === username);
    return user;
}

console.log(findUser('john'));






