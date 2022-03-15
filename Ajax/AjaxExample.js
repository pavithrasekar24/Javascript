function displayDetails() {
    var xml = new XMLHttpRequest();
    console.log('after create obj', xml.readyState)
    // xml.open('GET','db.json');
    xml.open('GET', 'http://127.0.0.1:5501/Javascript/Ajax/db.json')
    console.log("after open", xml.readyState)
    //  xml.onreadystatechange=function(){
    //      console.log('inside onreadystate()',xml.readyState)
    //      if(xml.readyState == 4){
    //          let data= xml.responseText;
    //          // str to obj convert  JSON.parse
    //          //obj to str convert   JSON.stringify
    //          console.log("data",data)
    //          let convert_data=JSON.parse(data)
    //          console.log(convert_data)
    //          let person=document.createElement('li')
    //          person.innerHTML=convert_data.person.name + " " + convert_data.person.age + " "+ convert_data.person.place;
    //          document.body.appendChild(person)
    //      }
    //  }

    xml.onload = function () {
        let data = xml.responseText;
        console.log("data", data)
        let convert_data = JSON.parse(data)
        console.log(convert_data)
        let person = document.createElement('li')
        person.innerHTML = convert_data.person.name + " " + convert_data.person.age + " " + convert_data.person.place;
        document.body.appendChild(person)
    }
    xml.send()
}

