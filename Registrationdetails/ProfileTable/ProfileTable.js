let get_person=localStorage.getItem('personDetails');
let personDetails=JSON.parse(get_person);

let table=document.getElementById('table')
let tbody=document.createElement('tbody')
personDetails.forEach(item=>{
    let tr=document.createElement('tr')
    // for(let val of Object.values(item)){
    //     let td=document.createElement('td')
    //     td.innerHTML=val
    //     tr.appendChild(td);
    // }
    let td1=document.createElement('td')
    let img=document.createElement('img')
    img.src=item.profileImage;
    img.alt="not-found"
    img.className="my-profile";
    td1.appendChild(img)

    let td2=document.createElement('td')
    td2.innerHTML=item.name;
    let td3=document.createElement('td');
    td3.innerHTML=item.age;
    let td4=document.createElement('td');
    td4.innerHTML=item.dob;
    let td5=document.createElement('td');
    td5.innerHTML=item.address;

    tr.appendChild(td1); 
    tr.appendChild(td2); 
    tr.appendChild(td3); 
    tr.appendChild(td4); 
    tr.appendChild(td5); 

    tbody.appendChild(tr);   
})

table.appendChild(tbody);
document.body.appendChild(table)


let handleRedirect=()=>{
    window.location.href="../Register/Register.html"
}