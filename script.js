function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
    const correctAnswer = "mi amor por ti";
  
    if (userAnswer === correctAnswer) {
      document.getElementById("game").style.display = "none";
      document.getElementById("choice").style.display = "block";
      document.getElementById("feedback").textContent = "";
    } else {
      document.getElementById("feedback").textContent = "¡Intenta de nuevo, mi amor!";
    }
  }
  
  function leftPath() {
    document.getElementById("choice").style.display = "none";
    document.getElementById("left").style.display = "block";
  }
  
  function rightPath() {
    document.getElementById("choice").style.display = "none";
    document.getElementById("right").style.display = "block";
  }
  
  function playSong() {
    const song = document.getElementById("song");
    song.play();
  }
  
  function showLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
  
    letter.classList.remove("slide-up");
    void letter.offsetWidth;
    letter.classList.add("slide-up");
  }
  
  // 🎈 Animación de corazones
  const container = document.querySelector('.heart-container');
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(heart);
  }
  
