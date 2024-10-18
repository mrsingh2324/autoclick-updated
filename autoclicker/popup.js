// Start button functionality
document.getElementById('start').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: startAutoClick
      });
    });
  });
  
  // Stop button functionality
  document.getElementById('stop').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: stopAutoClick
      });
    });
  });
  
  // Function to start auto-clicking
  function startAutoClick() {
    window.autoClickInterval = setInterval(function() {
      const dialNextButton = document.querySelector('.dialing-btn');
      if (dialNextButton && !dialNextButton.disabled) {
        console.log('Dial Next button is active, clicking it...');
        dialNextButton.click();
      }
    }, 20000);
    console.log('Auto Click started.');
  }
  
  // Function to stop auto-clicking
  function stopAutoClick() {
    clearInterval(window.autoClickInterval);
    console.log('Auto Click stopped.');
  }
  