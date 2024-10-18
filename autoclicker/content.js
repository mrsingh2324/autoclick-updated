// content.js

function clickDialNextButton() {
    // Targeting the button with the class 'dialing-btn'
    const dialNextButton = document.querySelector('.dialing-btn');
    
    // Check if the button exists and is enabled (not disabled)
    if (dialNextButton && !dialNextButton.disabled) {
      console.log('Dial Next button is active, clicking it...');
      dialNextButton.click();
    }
  }
  
  // Run the function every 3 seconds to check the button's state
//   setInterval(clickDialNextButton, 3000);
  