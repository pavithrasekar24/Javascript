var profileImage;
let handlefile=(event)=>{
var reader = new FileReader();
reader.onload = function (e) {
    profileImage=e.target.result
}
reader.readAsDataURL(event.target.files[0]);
}

let handleSubmit=()=>{
event.preventDefault();
let name=document.getElementById('name').value;
let age =document.getElementById('age').value;
let dob=document.getElementById('dob').value;
let address=document.getElementById('address').value;
let detail={
    profileImage:profileImage,
    name:name,
    age:age,
    dob:dob,
    address:address
}
let personForm=document.getElementById('personForm');
personForm.reset();
console.log("details",detail)
let get_person=localStorage.getItem('personDetails')
let personDetails=JSON.parse(get_person) || []
personDetails.push(detail)
localStorage.setItem('personDetails',JSON.stringify(personDetails))
window.location.href="../ProfileTable/ProfileTable.html"
}