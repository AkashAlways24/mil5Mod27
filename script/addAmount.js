const addMoney = document
  .getElementById("addMoneyBTN")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountADD = document.getElementById("amoundADD").value;
    const convateAmount = parseFloat(amountADD);

    const mainBalance = document.getElementById("mainbalance").innerText;
    const convateMainBL = parseFloat(mainBalance);

    const pin = document.getElementById("userPin").value;
    const convatePin = parseInt(pin);

    if (convatePin === 1234) {
      const sum = convateMainBL + convateAmount;
      document.getElementById("mainbalance").innerText = sum;

    }
    else{
      alert('type pin 1234')
    }
  });
