import data from './Data.json' assert { type: 'JSON' };
console.log(data);

let searchBox = document.querySelector('.searchbox');
         searchBox.addEventListener('keypress', function (event) {
           // event key has the information about key
           console.log('keypress');
           console.log(searchBox.value);
       
           if (event.keycode === 'Enter') {
               search_Results(searchBox.value);
           }
       })
       function search_Results() {
  
        fetch('./Data.json')
        .then((response) => response.json())
        .then((json) => console.log(json));}
    let input = document.querySelector('.searchbox').value
    input = input.toLowerCase();
    let x = document.getElementById('#mydata');
	x.innerHTML ="";
	

  if(   document.getElementById('mydata').value ==="1" || document.getElementById('mydata').value ==="1" )
  {
    for (i = 0; i < data.length; i++) {
      let obj = data[i];
	
      if (obj.basics.toLowerCase().includes(input))/* || obj.location.toLowerCase().includes(input) || obj.profiles.toLowerCase().includes(input) || obj.skills.toLowerCase().includes(input) || obj.id.includes(input) || obj.work.toLowerCase().includes(input) || obj.Internship.toLowerCase().includes(input) || obj.projects.toLowerCase().includes(input) || obj.education.toLowerCase().includes(input) || obj.Senior-Secondary.toLowerCase().includes(input) || obj.High-School.toLowerCase().includes(input) || obj.achievements.toLowerCase().includes(input) || obj.interests.toLowerCase().includes(input))*/ {
        const elem = document.createElement("div");
        elem.innerHTML =` ${obj.basics}`; /*- ${obj.location} - ${obj.profiles} - ${obj.skills} - ${obj.work} - ${obj.Internship} - ${obj.projects} - ${obj.education} - ${obj.Senior-Secondary} - ${obj.High-School} -${obj.achievements} - ${obj.interests}`*/
        x.appendChild(elem);
     
    }
    else {
      return "fail.html";
    }
    }
};



