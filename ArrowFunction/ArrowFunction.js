function display(){
    console.log("Hello")
}

display();
//function expr / arrow function ()=>
let greeting=()=>{
    console.log("Good Afternoon")
}
greeting();

// array arrow function 
let personDetails=[{ fname:'ram',lname:'kumar',
age:4, cost:56,
city:'chennai',
isIndian:true},{ fname:'rajesh', lname:'M',
age:14,cost:78,
city:'trichy',
isIndian:true},{ fname:'lmn',lname:'R',
age:24, cost:89,
city:'bangalore',
isIndian:true}]

personDetails.forEach(item=>{
    console.log("forEach*****",item)
})
personDetails.forEach((item,i)=>{
console.log("forEach--->",item,i)
let data=document.createElement('li')
data.innerHTML=i+1  + "<mark> " +item.fname + "</mark> "+ item.age + " " + item.city
document.body.appendChild(data)
})
//ternary operator-> condn ? expr1 : expr2
//... -spred operator
let modifyPerson=personDetails.map(item=>{
    return {
        // city:item.city,
        // fname:item.fname,
        // lname:item.lname,
        ...item,
        fullname:`${item.fname} ${item.lname}`,
        cost:'Rs: '+item.cost,
        isApproved:item.age >18 ? true :false
    }
})
console.log("modify",modifyPerson)

let filterizedPerson=personDetails.filter(item=>{
    return (item.cost >50 && item.cost <75) || item.age >18
})

console.log(personDetails,filterizedPerson)


let loginDetails=[{user:'abc',pwd:'abc@123'},{user:'ram',pwd:'ram@123'}]

let username="ram";
let password='ram@123';


let checkValidUser=loginDetails.some(item=>{
    return item.user === username && item.pwd ===password
})

console.log("some",checkValidUser)


let tripDetails=[...personDetails]

console.log(tripDetails)

let checkValidData=tripDetails.every(item=>{
    return item.cost>50
})

console.log("every",checkValidData)

let number =[7,9,78,90];
let total= number.reduce((curr,sum)=>curr+sum);
console.log(total)