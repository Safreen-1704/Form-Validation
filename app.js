const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true
form.addEventListener('sumbit',(e)=>{
    if(!vailidateInputs()){
    e.preventDefault()
}
})
function vailidateInputs(){
    const usernameVal = username.ValueMax.trim()
    const emailVal = email.ValueMax.trim()
    const passwordVal = password.ValueMax.trim();
    const cpasswordVal = cpassword.ValueMax.trim();

    if(usernameVal === ''){
        success = false;
        setError(username,'Username is Required')
    }
    else{
        setSuccess(username) }

        if(emailVal === ''){
            success =false
            setError(email,'Email is Required')
        }
        else if(!validateEmail(emailVal)){
            success =false
             setError(email, 'Email is invalid')
        }
        else{
            setSuccess(email)}

            if(passwordVal === ''){
                success =false
                setError(Password,'Password is Required')
            }
            else if(passwordVal.length<8){
                success =false
                setError(password,'Password must be atleast 8 characters long')
            }
            else{
                setSuccess(password)}

                if(cpassword === ''){
                    success =false
                    setError(cpassword,'Confirm password is required')
                }
                else if(cpasswordVal != passwordVal){
                    success =false
                    setError(cpassword,'Password does not match')
                }
                else{
                    setSuccess(cpassword)

                }
                return success;
                  
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
     
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
     
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

const validateEmail = (email) => {
    return String(email)
    .toLocaleLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@""]+)*)|(".+"))@((\[[0-9]+\.+[a-zA-Z]{2,}))$/);
    
}


