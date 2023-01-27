
var entry = {
    username: "admin",
    password:"admin"
};

var allEntries = [entry];
localStorage.setItem("entry", JSON.stringify(entry));
localStorage.setItem("allEntries", JSON.stringify(allEntries));

function validlogin(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var entriesJSON = localStorage.getItem('allEntries');
    if (!entriesJSON) {
        alert("Nothing stored!");
        event.preventDefault();
        return;
    }
    var allEntries = JSON.parse(entriesJSON);
    for (var i = 0; i < allEntries.length; i++) {
        var entry = allEntries[i];
        var storedUserName = entry.username;
        var storedPassWord = entry.password;
        //var storedEmailAddress = entry.email;
        if (username == storedUserName && password == storedPassWord) {
            //alert("validation succeeded!");
            location.href="resume.html"
            return;
    }
    alert('Invalid Username or Password! Please try again.');
    //event.preventDefault();
    window.location="Login.html";}}

   
function preventBack() { 
            window.history.forward();  
        }           
setTimeout("preventBack()", 0); 
window.onunload = function () { return "Your work will be lost."}; 




        
