let greeting="Hello Morning";
console.log(greeting.length)

// Extracting part of an str ->
// slice,substring,substr

//slice(start,end) -> 0-<5 , 0,1,2,3,4 -allow negative index ,last charcter start -1
console.log("slice",greeting.slice(6,13),greeting.slice(0,5),greeting.slice(-4))

let data=document.createElement('p')
// data.innerHTML=greeting.slice(5,10)
data.innerHTML=greeting
document.body.appendChild(data)

//substring

console.log("substring",greeting.substring(6,13))
//substr
console.log('substr',greeting.substr(6,13),greeting.substr(-4))

//replace(old,new)
let txt ='Good Morning !! Good Afternoon';
console.log(txt.replace('Good','Better'))

//replace all 
let txt_1 ='Good Morning !! Good Afternoon';

console.log(txt_1.replace(/Good/g,'Better'))

//case -lowercase , uppercase
console.log(txt_1.toLowerCase(),txt_1.toUpperCase())

//concat -combine two text
let fname="Ram"
let lname="Kumar"
console.log("fullName",fname.concat(lname))

//split -> convert str -array
let fruits='Apple-Banana-Orange'
console.log(fruits.split("-"))

//trim -start &end remove space
let address="   kk     nagar  "
let get_address=address.trim();
console.log(address.trim(),get_address.replace(/ /g,''))

//chartAt
console.log("chartAt",lname.charAt(3))

//charCodeAt
console.log("chartCodeAt",lname.charCodeAt(3))



//Number methods

//num to str--> toString(),
// decimal to whole num -> toFixed(),
// str to num ->parseInt(),parseFloat(),Number()

let num = 2;
let convert_num =num.toString()
console.log(convert_num,typeof convert_num)

let x=9.846;
console.log(x,x.toFixed(0),x.toFixed(2))


let y="67.86";
console.log(y, Number(y),parseInt(y),parseFloat(y))



//array methods.
//push ->add new ele in last position
let names=['abc','xyz','vijay'];
console.log(names)
names.push('lkm')
console.log(names)
//pop -> remove the last position;
names.pop();
console.log(names)
//splice ->remove & add in particular index
// arrName.splice(startIndex,deleteCount,addElement (optional))
//0,1 -2 -count
names.splice(0,2,'Ram','Kumar','ajith')
console.log(names)
//remove only
names.splice(1,1)
console.log(names)
//adding only using splice
//ram,ajith,vijay
names.splice(2,0,'radha')
console.log(names)
// create new refrence 
let get_names=names.slice(0,3)
console.log(get_names)


let get_value=names.indexOf('radha')
console.log(get_value)

// shift -> remove first position
console.log("before shift",names)
names.shift();
console.log("shift",names)
//unshift -> add from the first position

names.unshift('Arun','Arul');
console.log("unshift",names)