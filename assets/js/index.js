/* Validate Form */

function validate(){
    var form = document.getElementById("validate-form");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorfname = document.getElementById("error-fname");
    var errorlname = document.getElementById("error-lname");
    var erroremail = document.getElementById("error-email");
    var errorpassword = document.getElementById("error-password");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



    if(fname == ""){
        form.classList.remove("valid");
        form.classList.add("invalid");
        document.getElementById("fname").style.borderColor = "red";
        errorfname.innerHTML = ("First Name cannot be empty");
        errorfname.style.color = "red";
    }

    if(lname == ""){
        form.classList.remove("valid");
        form.classList.add("invalid");
        document.getElementById("lname").style.borderColor = "red";
        errorlname.innerHTML = ("Last Name cannot be empty");
        errorlname.style.color = "red";
    }

    if(password == ""){
        form.classList.remove("valid");
        form.classList.add("invalid");
        document.getElementById("password").style.borderColor = "red";
        errorpassword.innerHTML = ("Password cannot be empty");
        errorpassword.style.color = "red";
    }
    

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        document.getElementById("email").style.borderColor = "red";
        erroremail.innerHTML = ("Looks like this is not an email");
        erroremail.style.color = "red";
       
    }
}