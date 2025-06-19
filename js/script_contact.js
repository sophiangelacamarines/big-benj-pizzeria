// Declaration of Variables
let nm = document.getElementById("name");
let eml = document.getElementById("email");
let msg = document.getElementById("message");
let frm = document.getElementById("form");

function validForm(){
    if(nm.value.trim() == "" && eml.value.trim() == "" && msg.value.trim() == ""){
        onError(nm, "Name cannot be empty.");
        onError(eml, "Email cannot be empty.");
        onError(msg, "Message cannot be empty.");
    }
    else if(nm.value.trim() == "" && !isValidEmail(eml.value.trim()) && msg.value.trim() == ""){
        onError(nm, "Name cannot be empty.");
        onError(eml, "Email is invalid.");
        onError(msg, "Message cannot be empty.");
    }
    else if(nm.value.trim() == "" && eml.value.trim() == ""){
        onError(nm, "Name cannot be empty.");
        onError(eml, "Email cannot be empty.");
        onSuccess(msg);
    }
    else if(nm.value.trim() == "" && !isValidEmail(eml.value.trim())){
        onError(nm, "Name cannot be empty.");
        onError(eml, "Email is invalid.");
        onSuccess(msg);
    }
    else if(eml.value.trim() == "" && msg.value.trim() == ""){
        onSuccess(nm);
        onError(eml, "Email cannot be empty.");
        onError(msg, "Message cannot be empty.");
    }
    else if(!isValidEmail(eml.value.trim()) && msg.value.trim() == ""){
        onSuccess(nm);
        onError(eml, "Email is invalid.");
        onError(msg, "Message cannot be empty.");
    }
    else{
        if(!isValidEmail(eml.value.trim())){
            onSuccess(nm);
            onError(eml, "Email is invalid.");
            onSuccess(msg);
        }
        else{
            onSuccess(nm);
            onSuccess(eml);
            onSuccess(msg);
            alert("The form has been submitted.");
        }
    }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validForm();
});

// Showing the success message if input field is valid
function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = input;
}

// Showing the error message if input field is invalid
function onError(input, message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
}

// Email Validation
function isValidEmail(eml){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eml);
}