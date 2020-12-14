/* Validate Form */

function validate(){
    var form = document.getElementById("validate-form");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



    if(fname == '' || lname == '' || password == '' || email == ''){
       errorMessage();
    }
    
    else if(email.match(pattern)){
        success();
    }

    else{
       invalidEmailMessage();
       
    }
}

function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields cannot be empty',
      })
}

function invalidEmailMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is Invalid!',
      })
}

function success(){
    Swal.fire(
        'Good job!',
        'This is just sample and not connected to the database',
        'success'
      )
}
