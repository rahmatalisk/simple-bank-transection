document.getElementById('submit-button').addEventListener('click',function(){
    //get user email
    const inputEmail = document.getElementById('input-email');
    const userEmail = inputEmail.value;
    //get user password
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value;
    //Condition
    if(userEmail == 'my@bank.com' && userPassword == "mybank"){
        window.location.href ='banking-site.html'
        
    }

});