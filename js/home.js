// Deposite 

document.getElementById('btn-Deposite').addEventListener('click', function (event) {
    event.preventDefault();

    // Get amount from user and convert in number
    const amountFild = document.getElementById('amount-input').value;
    const amountFildNumber = parseFloat(amountFild);
    // console.log(amountFildNumber);

    // Get pin from user and convert in number
    const pinInputFildDeposite = document.getElementById('pin-input-Deposite').value;
    // console.log(pinInputFildDeposite );

    // Get current Balance
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);


    if (pinInputFildDeposite === '1234' && amountFild > 0) {
        // Add the balance
        const newBalance = currentBalanceNumber + amountFildNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert("Sorry!Try again");
    }

})


// Withdraw

document.getElementById('btn-Withdraw').addEventListener('click', function (event) {
    event.preventDefault();

    // Get amount from user and convert in number
    const amountFildWithdraw = document.getElementById('amount-input-Withdraw').value;
    const amountFildWithdrawNumber = parseFloat(amountFildWithdraw);
    // console.log(amountFildNumber);

    // Get pin from user and convert in number
    const pinInputFildWithdraw = document.getElementById('pin-input-Withdraw').value;
    // console.log(pinInputFildWithdraw );

    // Get current Balance
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);


    if (pinInputFildWithdraw === '1234' && amountFildWithdraw > 0) {
        // Add the balance
        const newBalance = currentBalanceNumber - amountFildWithdrawNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert("Sorry!Try again");
    }

})

