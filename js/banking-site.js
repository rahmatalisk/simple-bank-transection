document.getElementById('submit-deposit').addEventListener('click',function(){

     //get input amount
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositText =inputDeposit.value;
    const inputDepositAmount = parseFloat(inputDepositText);
    //get previous amount
    const depositPreviousText = document.getElementById('deposit-text').innerText;
    const depositPreviousAmount = parseFloat(depositPreviousText);
    document.getElementById('deposit-text').innerText = parseFloat(inputDepositAmount + depositPreviousAmount);

    //main balance
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const totalMainBalance = mainBalance + inputDepositAmount;
    document.getElementById('main-balance').innerText =totalMainBalance;
    //clear
    document.getElementById('input-deposit').value = '';
})



document.getElementById('submit-withdraw').addEventListener('click',function(){

    //get input amount
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdarwText =inputWithdraw.value;
    const inputWithdarwAmount = parseFloat(inputWithdarwText);

    //get previous amount
    const withdrawPreviousText = document.getElementById('withdraw-text').innerText;
    const withdrawPreviousAmount = parseFloat(withdrawPreviousText);
    // document.getElementById('withdraw-text').innerText = parseFloat(inputWithdarwAmount + withdrawPreviousAmount);

    //main balance
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const totalMainBalance = mainBalance - inputWithdarwAmount;

    
    if(totalMainBalance < 0){
        
        alert('You have not Nedded Balance!!')
    }else{
        document.getElementById('main-balance').innerText =totalMainBalance;
        document.getElementById('withdraw-text').innerText = parseFloat(inputWithdarwAmount + withdrawPreviousAmount);
    }
    
    //clear
    document.getElementById('input-withdraw').value = '';
})
