let handleFirstName=()=>{
   let name= document.getElementById('name').value
     let nameField=document.getElementById('name')
     console.log(nameField)
   if(name ===''){
    nameField.style.border="1px solid red"
       document.getElementById('nameError').innerHTML="*FirstName is required"
   }
   else{
    nameField.style.border="none"

    document.getElementById('nameError').innerHTML=""
   }
    console.log('trigger',name )
}
//default function 
// let handleAge=()=>{
// let age=document.getElementById('age');
// if(!age.checkValidity()){
//     document.getElementById('ageError').innerHTML=age.validationMessage;
// }
// else{
//     document.getElementById('ageError').innerHTML=''
// }
// }


//customise message
let handleAge=()=>{
    let age=document.getElementById('age').value;
    if(age === ''){
        document.getElementById('ageError').innerHTML='Age is required';
    }
    else if(age < 18 || age >21 ){
        document.getElementById('ageError').innerHTML='Age should be greater than 18 and less than 21'
    }
    else{
        document.getElementById('ageError').innerHTML=''
    }
    }


let handleAlert=()=>{
    alert("hii")
}
let handleSubmit=()=>{
    handleFirstName();
    handleAge();
    event.preventDefault();
  let data={
      firstName: document.getElementById('name').value,
      age:document.getElementById('age').value
  }
  console.log(data)
    alert('form has been submited')
}