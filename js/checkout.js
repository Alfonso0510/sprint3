// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameToEvaluate = document.querySelector('.name');
var lastName = document.querySelector('.surname');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var form = document.querySelector(".form");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email


    //Evaluacion longitud del nombre usuario
    if((nameToEvaluate.value.length < 3) || (validateOnlyLetters(nameToEvaluate.value))){
        nameToEvaluate.style.border = '2px solid red';
        document.getElementById('errorName').style.display = 'block';
    };

    //Evaluacion longitud apellido
    if((lastName.value.length < 3) || (validateOnlyLetters(lastName.value))) {
        lastName.style.border = '2px solid red';
        document.getElementById('errorLastName').style.display = 'block';
    };

    //Evaluacion del mail
    if(validateMail(email.value)){
        email.style.border = '2px solid red';
        document.getElementById('errorMail').style.display = 'block'; 
        console.log('Email incorrecto');
    }else{
        console.log('Email correcto');
    }
    
    //Evaluacion de la longitud del password
    if(password.value.length < 3){
        password.style.border = '2px solid red';
        document.getElementById('errorPassword').style.display = 'block';
    }else{
        console.log('Password correcto');
    }

    //Evaluacion de la direccion 
    if(address.value.length < 3){
        address.style.border  = '2px solid red';
        document.getElementById('errorAddress').style.display = 'block';
    }else{
        console.log('Direccion correcta');
    }

    //Evaluacion del numero de telefono
    if(phone.value > 0 && phone.value < 999999999){
        console.log('Telefono correcto');
        
    }else{
        console.log('Telefono incorrecto')
        phone.style.border = '2px solid red';
        document.getElementById('errorPhone').style.display = 'block';
    }
}

//Codigo añadido
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validate();
})

//Funcion validacion letras nombre y apellido
function validateOnlyLetters(inputtxt){
    let letters = /^[A-Za-z]+$/;
    console.log(inputtxt);
    if(inputtxt.match(letters)){
        return false;
    }else{
        return true;
    }
}

//Funcion validacion email
function validateMail(inputtxt){
    let letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    console.log('El mail es el siguiente ' + inputtxt);
    if(inputtxt.match(letters)){
        return false;
    }else{
        return true;
    }
}





