document.getElementById("cashOutSec").style.display='none';

document
  .getElementById("addMoney-box")
  .addEventListener("click", function () {
    document.getElementById("addmoneySec").style.display='block';
    document.getElementById("cashOutSec").style.display='none';
  });

document
  .getElementById("cashOut-box")
  .addEventListener("click", function () {
    document.getElementById("addmoneySec").style.display='none';
    document.getElementById("cashOutSec").style.display='block';
  });
