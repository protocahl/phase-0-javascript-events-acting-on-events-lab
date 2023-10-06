document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight(); // Add this line
    }
  });
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left) || 0;
    const gameWidth = parseInt(game.style.width) || 400; // Assuming 'game' is the game field element
    const dodgerWidth = 40; // Width of the dodger
  
    // Calculate the new position for the dodger
    const newLeft = left + 1;
  
    // Check if the dodger is within the game field boundaries
    if (newLeft + dodgerWidth <= gameWidth) {
      dodger.style.left = `${newLeft}px`;
    }
  }  function moveDodgerLeft() {
    const left = parseInt(dodger.style.left) || 0;
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Add the event listener after defining moveDodgerLeft
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });
  