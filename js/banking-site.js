
//get Input Amount
function getInputValue(input){
    const inputFiled = document.getElementById(input);
    const inputText = inputFiled.value;
    const inputAmount = parseFloat(inputText);
    //clear
    document.getElementById(input).value = '';
    return inputAmount;
};

//update Total Amount Deposit and Withdraw
function totalAmount(textid,amount){
    const previousText = document.getElementById(textid).innerText;
    const PreviousAmount = parseFloat(previousText);
    document.getElementById(textid).innerText = amount + PreviousAmount;

};
        //Upadate Balance
function updateBalance(amount,isAdd){
     const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
     if(isAdd == true){
        const totalMainBalance = mainBalance + amount;
        document.getElementById('main-balance').innerText =totalMainBalance;
     }else{
        const totalMainBalance = mainBalance - amount;
        document.getElementById('main-balance').innerText =totalMainBalance;
     }
     
     
}


document.getElementById('submit-deposit').addEventListener('click',function(){

     //get input amount
    // const inputDeposit = document.getElementById('input-deposit');
    // const inputDepositText =inputDeposit.value;
    // const inputDepositAmount = parseFloat(inputDepositText);


    

    //get previous amount
    // const depositPreviousText = document.getElementById('deposit-text').innerText;
    // const depositPreviousAmount = parseFloat(depositPreviousText);
    // document.getElementById('deposit-text').innerText = parseFloat(inputDepositAmount + depositPreviousAmount);
    

    //main balance
    //  const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    //  const totalMainBalance = mainBalance + inputDepositAmount;
    //  document.getElementById('main-balance').innerText =totalMainBalance;
    const inputDepositAmount =getInputValue('input-deposit');
    if(inputDepositAmount > 0){
        totalAmount('deposit-text',inputDepositAmount);
        updateBalance(inputDepositAmount,true);
    }
    
    
})



document.getElementById('submit-withdraw').addEventListener('click',function(){

    //get input amount
    // const inputWithdraw = document.getElementById('input-withdraw');
    // const inputWithdarwText =inputWithdraw.value;
    // const inputWithdarwAmount = parseFloat(inputWithdarwText);
    
    //get previous amount
    // const withdrawPreviousText = document.getElementById('withdraw-text').innerText;
    // const withdrawPreviousAmount = parseFloat(withdrawPreviousText);
    // document.getElementById('withdraw-text').innerText = parseFloat(inputWithdarwAmount + withdrawPreviousAmount);
    

    
    //main balance
    // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    // const totalMainBalance = mainBalance - inputWithdarwAmount;
    const inputWithdarwAmount =getInputValue('input-withdraw');
    if(inputWithdarwAmount > 0){
        totalAmount('withdraw-text',inputWithdarwAmount);
        updateBalance(inputWithdarwAmount,false)
    }
    
    
    // if(totalMainBalance < 0){
        
    //     alert('You have not Nedded Balance!!')
    // }else{
    //     document.getElementById('main-balance').innerText =totalMainBalance;
    //     // document.getElementById('withdraw-text').innerText = parseFloat(inputWithdarwAmount + withdrawPreviousAmount);
    // }
    
    
})
