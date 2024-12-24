 // addition

 // substraction

 // division

 // multiplication

 
const buttonsContainer = document.querySelector('.buttons');

const buttons = buttonsContainer.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonClass = button.classList[0]; 

    switch (buttonClass) {
      case 'num':
        // Handle number button clicks
        break;
      case 'op':
        // Handle operator button clicks
        break;
      case 'symbol':
        // Handle symbol button clicks
        break;
      case 'all-clear':
        // Handle AC button click
        break;
      default:
        break;
    }
  });
});
