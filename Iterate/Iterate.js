let personDetails = [{
    name: 'abc',
    age: 24,
    city: 'chennai',
    isIndian: true
}, {
    name: 'xyz',
    age: 24,
    city: 'trichy',
    isIndian: true
}, {
    name: 'lmn',
    age: 24,
    city: 'bangalore',
    isIndian: true
}]
let person = {
    name: 'abc',
    age: 24,
    city: 'chennai',
    isIndian: true
}
// for in -> key/index -obj,array
 for (let ele in person){
     console.log(ele,person[ele])
     let item=document.createElement('li')
     item.innerHTML= person[ele]
     document.body.appendChild(item)
 }

 for(let ele in personDetails){
     console.log(ele, personDetails[ele].name)
     let item=document.createElement('li')
     item.innerHTML=ele + " " +personDetails[ele].name
     document.body.appendChild(item)
 }
//for of -> value ->array
for (let ele of personDetails){
    console.log(ele.name,ele.age,ele.city)
    let item=document.createElement('li')
    item.innerHTML=ele.name+" "+ele.age +" "+ele.city
    document.body.appendChild(item)
}