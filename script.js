const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('pawssword');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const seterror=(element,message)=>{
    const inputcontrol=element.parentelement();
    const errordisplay=inputcontrol.queryselector('.error');
    errordisplay.innertext=message;
    inputcontrol.classlist.add('.error.');
    inputcontrol.classlist.remove('sucess');
};
const setsucess=(element)=>{
    const inputcontrol=element.parentelement();
    const errordisplay=inputcontrol.queryselector('.error');
    errordisplay.innertext=message;
    inputcontrol.classlist.add('sucess');
    inputcontrol.classlist.remove('.error');
};
const validateInputs=()=>{
    const usernamevalue=username.value.trim();
    const passwordvalue=password.value.trim();

    if(usernamevalue===''){
        seterror(username,'username is required');
    }else{
        setsucess(username);
    }
    if(passwordvalue===){
        seterror(password,'password is required')
    }else if(passwordvalue.length<8){
        seterror(password,'password must be atleast 8 character.');
    }else{
        setsucess(password);
    }

}


