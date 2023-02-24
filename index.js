

document.getElementById('deposit-btn').addEventListener('click', function() {
    const newDeposit = document.getElementById('new-deposit');
    const newDeposit_string = newDeposit.value;
    const newDeposit_number = parseFloat(newDeposit_string);
    // console.log(newDeposit_number);
    newDeposit.value = "";

    if(isNaN(newDeposit_number)) {
        alert("Please Enter a valid Number.");
        return;
    }

    
    const previous_deposit = document.getElementById('total-deposit');
    const previous_deposit_string = previous_deposit.innerText;
    const previous_deposit_number = parseFloat(previous_deposit_string);


    const new_amount = newDeposit_number + previous_deposit_number;
    previous_deposit.innerText = new_amount;


    const previous_totalBalance = document.getElementById('previous-total-balance');
    const previous_totalBalance_string = previous_totalBalance.innerText;
    const previous_totalBalance_number = parseFloat(previous_totalBalance_string);


    const new_total_balance = previous_totalBalance_number + newDeposit_number;

    previous_totalBalance.innerText = new_total_balance;
})



document.getElementById('Withdraw-btn').addEventListener('click', function() {

    const new_withdraw = document.getElementById('new-withdraw');
    const new_withdraw_string = new_withdraw.value;
    const new_withdraw_number = parseFloat(new_withdraw_string);
    // console.log(new_withdraw_number);
    new_withdraw.value = "";

    if(isNaN(new_withdraw_number)) {
        alert("Please Enter a valid Number.");
        return;
    }


    const previous_withdraw = document.getElementById('total-withdraw');
    const previous_withdraw_string = previous_withdraw.innerText;
    const previous_withdraw_number = parseFloat(previous_withdraw_string);


    const previous_totalBalance = document.getElementById('previous-total-balance');
    const previous_totalBalance_string = previous_totalBalance.innerText;
    const previous_totalBalance_number = parseFloat(previous_totalBalance_string);
    if(new_withdraw_number > previous_totalBalance_number) {
        alert("Insuffient balance");
        return;
    }

    const new_total_withdraw = previous_withdraw_number + new_withdraw_number;
    previous_withdraw.innerText = new_total_withdraw;

    const new_withdraw_balance = previous_totalBalance_number - new_withdraw_number;

    previous_totalBalance.innerText = new_withdraw_balance;
})