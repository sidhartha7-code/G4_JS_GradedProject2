import data from './Data.json' assert { type: 'json' };

var index=0;
var technicalSkills=null;
var candidateSearchList = {};
var searchIndex=0;

const searchBox=document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

var searchData=data.resume;
console.log(searchData);

function setQuery(event){
    if (event.keyCode==13){
        search_results(searchBox.value);
    }
}

function search_results(value){
    var candidateResult=searchData.filter((candidate)=>candidate.basics.AppliedFor.toLowerCase()==value.toLowerCase());
    console.log(candidateResult);
    if(candidateResult.length==0){
        location.replace("fail.html");
    }

    //var candidateSearchList = {};
    candidateSearchList.resume = [];
    for (let i = 0; i < candidateResult.length; i++) {
       candidateSearchList.resume.push(candidateResult[i]);
    }

    searchIndex=0;   
    console.log(candidateSearchList);
    displayItem(candidateSearchList,searchIndex);
}

// Get the elements Button : Previous and Next
var previous = document.getElementById('prev-button');
var next = document.getElementById('next-button');

// Get all the other elements in the page by Id

// Get Candidate name and position applied for
var candidateName = document.getElementById('candidate-name');
var candidatePosition = document.getElementById('candidate-position');

// Get Candidate Phone,Email and Linkedin profile
var candidatePhone = document.getElementById('phone');
var candidateEmail = document.getElementById('email');
var candidateLinkedIn = document.getElementById('linkedin');

// Get Candidate Skills
var technicalSkills=document.getElementById('technical');


// Get Candidate Hobbies
var hobbies=document.getElementById('hobby');

//  Get Candidate Work Info
var companyName=document.getElementById('company-info');
var positionName=document.getElementById('position-info');
var workStartDate=document.getElementById('start-date');
var workEndDate=document.getElementById('end-date');
var workSummary=document.getElementById('summary-description');

// Get Candidate project Info
var projectDescription=document.getElementById('project-description');

// Get Candidate Education Info
var educationUG=document.getElementById('education-ug');
var educationSC=document.getElementById('education-sc');
var educationHS=document.getElementById('education-hs');

// Get Candidate Internship Info
var internCompany=document.getElementById('intern-company');
var internPosition=document.getElementById('intern-position');
var internStartDate=document.getElementById('intern-start-date');
var internEndDate=document.getElementById('intern-end-date');
var internSummary=document.getElementById('intern-summary-description');

// Get Candidate Achievement Info
var achievements=document.getElementById('achievement-info');


//displayItem(item);
displayItem(data,index);

previous.addEventListener('click', function() {
    //displayItem(data.resume[--index]);
    console.log("Value:"+ typeof searchBox.value);
    if (searchBox.value!="")  {
        searchIndex=searchIndex-1;
        displayItem(candidateSearchList,searchIndex);
         
    }
    else{
        index=index-1;
        displayItem(data,index);
    }
});

next.addEventListener('click', function() {
    //displayItem(data.resume[++index]);
    if (searchBox.value!="")  {
        searchIndex=searchIndex+1;
        displayItem(candidateSearchList,searchIndex);
         
    }
    else{
    index=index+1;
    displayItem(data,index);
    }
});

function displayItem(data,index){
    
    var item = data.resume[index];

    console.log(data);

    candidateName.innerText = item.basics.name;
    candidatePosition.innerText = `Applied For: ${item.basics.AppliedFor}`;
    candidatePhone.innerText=`Phone:${item.basics.phone}`;
    candidateEmail.innerText=`Email:${item.basics.email}`;
    candidateLinkedIn.innerText=`LinkedIn: ${item.basics.profiles.url}`;

    var skills=item.skills.keywords;

    while (technicalSkills.hasChildNodes()) {
        technicalSkills.removeChild(technicalSkills.firstChild);
      }

    skills.forEach(element => {
  
        var skillName=document.createElement('ul');
            skillName.setAttribute('id','skill-name');
            skillName.setAttribute('class','skill-data');
            skillName.innerText=element;
            technicalSkills.appendChild(skillName);
    });

    var hobbyList=item.interests.hobbies;

    while (hobbies.hasChildNodes()) {
        hobbies.removeChild(hobbies.firstChild);
      }

      hobbyList.forEach(element => { 
        var hobbyName=document.createElement('ul');
            hobbyName.setAttribute('id','hobby-name');
            hobbyName.innerText=element;
            hobbies.appendChild(hobbyName);
    });

    companyName.innerText=item.work['Company Name'];
    positionName.innerText=item.work['Position'];
    workStartDate.innerText=item.work['Start Date'];
    workEndDate.innerText=item.work['End Date'];
    workSummary.innerText=item.work['Summary'];

    internCompany.innerText=item.Internship['Company Name'];
    internPosition.innerText=item.Internship['Position'];
    internStartDate.innerText=item.Internship['Start Date'];
    internEndDate.innerText=item.Internship['End Date'];
    internSummary.innerText=item.Internship['Summary'];

    projectDescription.innerText=`${item.projects['name']} : ${item.projects['description']}`;

    educationUG.innerText= `${item.education.UG['institute']} , ${item.education.UG['course']} , ${item.education.UG['Start Date']} , ${item.education.UG['End Date']} ,${item.education.UG['cgpa']}`;
    educationSC.innerText=`${item.education['Senior Secondary'].institute} , ${item.education['Senior Secondary'].cgpa}`;
    educationHS.innerText=`${item.education['High School'].institute} , ${item.education['High School'].cgpa}` ;

    var achievementList=item.achievements.Summary;

    while (achievements.hasChildNodes()) {
        achievements.removeChild(achievements.firstChild);
      }

      achievementList.forEach(element => { 
        var achievementName=document.createElement('li');
            achievementName.setAttribute('id','achievement-name');
            achievementName.innerText=element;
            achievements.appendChild(achievementName);
    });

    previous.disabled = index <= 0;
    next.disabled = index >= data.resume.length -1;
}

history.pushState(null, null, 'resume.html');






