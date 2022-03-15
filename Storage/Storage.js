let handleSubmit=()=>{
    event.preventDefault();
    let firstName=document.getElementById('firstName')
    let lastName=document.getElementById('lastName')
    let age=document.getElementById('age')


    let data={
        firstName:firstName.value,
        lastName:lastName.value,
        age:age.value
    }

    let fruits=['apple','orange']
    localStorage.setItem('person',JSON.stringify(data))
    localStorage.setItem('fruits',JSON.stringify(fruits))



    console.log(firstName.value)

    localStorage.setItem('local_first',firstName.value)
    localStorage.setItem('local_last',lastName.value)
    localStorage.setItem('local_age',age.value)

    sessionStorage.setItem('session_first',firstName.value)


     let link= document.createElement('a')
     link.href="./PersonDetails/PersonDetails.html";
     link.click();

}