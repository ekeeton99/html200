function start() {
  let input = prompt('What would you like to do?');
  switch (input.toLowerCase()) {
    case 'q':
    case '': {
      break;
    }
    case 'b': {
      return showBalance();
      break;
    }
    case 'd': {
      return deposit();
      break;
    }
    case 'w': {
      return withdraw();
      break;
    }
    default: {
      return 'Please make a valid selection. Enter B to view balance, D to make a deposit, W to make a withdrawl, or use Q or enter to quit.';
    }
  }
}

let balance = 0;
function showBalance() {
  alert("Your current balance is $" + balance.toFixed(2));
  start();
}

function deposit() {
  let depositAmount = prompt('Please enter the amount you would like to deposit');
  balance += Number(depositAmount);
  return showBalance();
  start();
}

function withdraw() {
  let withdawAmount = prompt('Please enter the amount you would like to withdraw');
  balance -= Number(withdawAmount);
  return showBalance();
  start();
}
