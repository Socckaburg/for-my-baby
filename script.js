const music = document.getElementById("music");

function playMusic() {
  music.play();
}

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = "❀";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 7000);
}

setInterval(createFlower, 400);

function growYes() {
  const yes = document.getElementById("yesBtn");
  yes.style.transform = "scale(4)";
  yes.style.position = "fixed";
  yes.style.top = "50%";
  yes.style.left = "50%";
  yes.style.transform = "translate(-50%, -50%) scale(4)";
}

function yesClicked() {
  document.body.innerHTML = `
    <div class="container">
      <h1>aku tau kok kalo kamu masih sayang aku 💙</h1>
    </div>
  `;
}
