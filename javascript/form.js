function formvalidation(event){
    event.preventDefault();
    //collecting information from user panel
    let username=document.forms["myforms"]["username"].value;
    let email=document.forms["myforms"]["email"].value;
    let password=document.forms["myforms"]["password"].value;
    let confirmpassword=document.forms["myforms"]["confirmpassword"].value;
    //regular expressions
    let usernameRegex=/^[a-zA-Z0-9]{3,}$/;
    //john12@gmail.com
    let emailRegex=/^[a-z0-9]+@[a-z]+\.[a-z]{2-4}$/;
    //asfd@1234
    let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_$@!%]).{6,8}$/;
    //testing the user information
    //.test
    if(!usernameRegex.test(username)){
        alert("username is wrong");
        return false;
    }
    if(!emailRegex.test(email)){
        alert("email is wrong");
        return false;
    }
    if(!passwordRegex.test(password)){
        alert("password is wrong");
        return false;
    }
    if(password !==confirmpassword){
        alert("password doesnt match");
        return false;
    }
    alert("form submitted successfully !");
    console.log(username+email+password+confirmpassword);
    return false;
}