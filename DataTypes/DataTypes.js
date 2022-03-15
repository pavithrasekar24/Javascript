//number
let age=24;
let firstName="prabath"
let my_age='25' // string -'' ,""
//bollean -either -> true/false
let isApprove=true
let isDecline=false;
//null
let place=null;
//undefined -only declare a varaible not assign any value
let country;

// DOM-document object model -element atribute , function
document.getElementById('age').innerHTML=age;
//concat using +
document.getElementById('details').innerHTML=firstName+" "+isApprove+" "+isDecline+" "+age
//template literal backticks - ``
document.getElementById('my_details').innerHTML=`Name - ${firstName} ${isApprove}`
console.log(age,firstName,my_age,isApprove,isDecline,place,country)



// reference types
//object -{key:value , key:value ,...}

let person ={
    name:'abc',
    age:24,
    city:'chennai',
    isIndian:true
}


//dynamcially creating element from javascript
let head=document.createElement('h3');
head.innerHTML=person.age;
head.style.color='red';
head.className='my-head'
document.body.appendChild(head)


//access obj value ->1. dot operator objName.key  2. [] operator objName['key']
document.getElementById('person').innerHTML=person.name +" "+person['city'] ;

 // array -> contain multiple values  -number,string,object , null,undefined, 
 // no need to have same group
//  value should be within [] ,
//  separtor ,
//access using index ,  start index should be 0
let fruits=['Apple','mango','pineapple'];
console.log(fruits[0],fruits.length)
let personDetails=[{ name:'abc',
age:24,
city:'chennai',
isIndian:true},{ name:'xyz',
age:24,
city:'trichy',
isIndian:true},{ name:'lmn',
age:24,
city:'bangalore',
isIndian:true}]

console.log(personDetails.length,personDetails[2],personDetails[2].city,personDetails[2]['city'])


//functions

function display(){
    //logic implementes;
console.log("display calling")
}
display();

//function sum(a,b)-parameter
function sum(num1,num2){
    console.log("sum")
    return num1+num2;
}
let a=90,b=89;
let total=sum(a,b); 
// sum(a,b) =>arguments calling that function
console.log(total)

//arrow function  -function expres -w/o function keyword ,
let sumOfNum=()=>{
  console.log('arrow_fun')
}
sumOfNum();


//scope of variable 
//let,var,const diff
//let -> block scope,  {}
//var -> function scope , function  funName () { }
//const -function scope , 
 
// 1.const  you should assign value while decalre variable
// 2.once assign can't change 
// 3.primitive type not reference(obj,arr can change value)
function scopeOfVariable(){
    var place_1="chennai";
    const pincode=600945;
    const employee={id:1,name:"abc"}
    // const mobile; // missing initialization of const variable
    // pincode=900089; //assignment error 
    if(true){
        let age_1=90;
        console.log("scope insid block",place_1,pincode,age_1);
    }
    employee.name="lxy";
    
    console.log("scope inside fun",place_1,pincode,employee) 
}
scopeOfVariable();
// console.log("scope out side fun",pincode)
// console.log("scope out side fun",place_1) 

