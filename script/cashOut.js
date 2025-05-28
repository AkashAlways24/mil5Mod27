const cashOutBTN = document
  .getElementById("cashOutBTN")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById("cashOut-amount").value;
    const convatedCashOutAmount = parseFloat(cashOutAmount);

    const pin = document.getElementById("cashOut-userPin").value;
    const convatePin = parseInt(pin);

    const mainBalance = document.getElementById("mainbalance").innerText;
    const convateMainBL = parseFloat(mainBalance);

    if(convatePin === 1234){
      const cashOut = convateMainBL - convatedCashOutAmount;
      document.getElementById("mainbalance").innerText = cashOut;
    }
    else{
      alert('Worng Pin')
    }
  });
