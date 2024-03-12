function acceptData(){

    let username = document.getElementById("username").value
    validateUsername(username)

    let email = document.getElementById("email").value
    validateEmail(email)
    
    let password = document.getElementById("password").value
    validatePassword(password)

    let gender = document.querySelector("input[name='gender']:checked")
    let genClicked = gender ? gender.value :false
    validateGender(genClicked)
    

    let date = document.getElementById("date").value
    validateDate(date)

    let month = document.getElementById("month").value
    validateMonth(month)

    let year = document.getElementById("year").value
    validateYear(year)

    var formData="Name : "+username +"\nEmail : "+email +"\nPassword : "+password +"\nGender : "+genClicked +"\nDOB : "+date+'-'+month+'-'+year;
    alert(formData)
}


/* this is one way
function validateUsername(username)
{
    if(username === ' ')
    {
        alert("username cannot be empty")
    }
    else if(username.length < 5 || username.length > 15)
    {
        alert("username should contain min 5 to max 15 characters")
    }
    else
    {
        if((username >= 'a' && username <='z') || (username >= 'A' && username <='Z')||(username >= 0 && username <= 9))
        {
            alert("Valid username")
        }
        else
        {
            alert("invalid username")
        }
    }
}*/

function validateUsername(username)
{
    let regex = /^[A-Za-z0-9]+$/          //regular expression
    if(username === ' ')
    {
        alert("username cannot be empty")
    }
    else if(username.length < 3 || username.length > 15)
    {
        alert("username should contain min 3 to max 15 characters")
    }
    else if(regex.test(username) == false)
    {
        alert("username should contain only digits and alphabets")
    }
    else
    {
        alert("Valid username")
    }
}

//email: alphanumeric @ alphabets . alphabets
function  validateEmail(email){
    let regex = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/
    if(email  === ''){
        alert("email cannot be empty")
    }
    else if(regex.test(email) == false){
        alert("email should follow the format- alphanumeric @ alphabets . alphabets")
    }
    else{
        alert("valid email")
    }
}

function validatePassword(password){
    let digRegex =/[0-9]/
    let lowerRegex = /[a-z]/
    let upperRegex = /[A-Z]/
    if(password === ' ')
    {
        alert("password cannot be empty")
    }
    else if(password.length < 8 || password.length > 15)
    {
        alert("username should contain min 5 to max 15 characters")
    }
    else if(digRegex.test(password) == false)
    {
        alert("password should contain atleast 1 digit")
    }
    else if(lowerRegex.test(password) == false)
    {
        alert("password should contain atleast 1 lower case alphabet")
    }
    else if(upperRegex.test(password) == false)
    {
        alert("password should contain atleast 1 upper case alphabet")
    }
    else
    {
        alert("valid password")
    }
}


function validateGender(gender){
    if(!gender)
    {
        alert("Gender cannot be empty")
    }
    else
    {
        alert("valid gender")
    } 
 }

function validateDate(date)
{
    if(date === ' ')
    {
        alert("date cannot be empty")
    }
    else
    {
        alert("valid date")
    } 
}

function validateMonth(month)
{
    if(month === ' ')
    {
        alert("month cannot be empty")
    }
    else
    {
        alert("valid month")
    } 
}

function validateYear(date)
{
    if(year === ' ')
    {
        alert("year cannot be empty")
    }
    else
    {
        alert("valid year")
    } 
}
