const logInBTN = document.getElementById("logInBTN");
logInBTN.addEventListener('click', function(event){
  event.preventDefault();

  const userID = document.getElementById('userID').value
  // console.log(userID);
  const userPin = document.getElementById('userPin').value
  const convatePin = parseInt(userPin);
  // console.log(userPin);

  if( userID.length === 11){
    if(userPin.length === 4){
        window.location.href="./main.html"
    }
    else{
      alert('Wrong Pin...........');
    }
  }
  else{
    alert('Input user number 11 and pin 4');
  }
});
