document.addEventListener('DOMContentLoaded', () => {
  const balloonColors = ['#ff69b4', '#ff6347', '#1e90ff', '#32cd32'];
  const messages = [
    'You make my heart soar! 💕',
    'Every day with you is a gift! 🎁',
    'You are my sunshine! ☀️',
    'You light up my life! ✨'
  ];
  const balloonCount = 10;

  const balloonsContainer = document.getElementById('balloons');
  const messageElement = document.getElementById('message');
  const popSound = document.getElementById('pop-sound');

  function createBalloon() {
    const balloon = document.createElement('div');
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];

    balloon.classList.add('balloon');
    balloon.style.backgroundColor = color;
    balloon.addEventListener('click', () => popBalloon(message, balloon));

    balloonsContainer.appendChild(balloon);

    setTimeout(() => {
      balloon.style.bottom = '100%'; // Move balloon to top
    }, 100);
  }

  function popBalloon(message, balloonElement) {
    popSound.play(); // Play pop sound

    balloonElement.style.display = 'none'; // Hide balloon

    messageElement.innerHTML = `<p>${message}</p>`;
    messageElement.classList.add('show'); // Show message

    setTimeout(() => {
      messageElement.classList.remove('show'); // Hide message after 3 seconds
    }, 3000);
  }

  // Create multiple balloons
  for (let i = 0; i < balloonCount; i++) {
    createBalloon();
  }
});