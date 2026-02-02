const music = document.getElementById("music");
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  }
}

function goPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

function flowerRain() {
  const f = document.createElement("div");
  f.className = "flower";
  f.innerHTML = "❀";
  f.style.left = Math.random() * 100 + "vw";
  f.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 7000);
}

setInterval(flowerRain, 400);

function growYes() {
  const yes = document.getElementById("yesBtn");
  yes.style.position = "fixed";
  yes.style.top = "50%";
  yes.style.left = "50%";
  yes.style.transform = "translate(-50%, -50%) scale(4)";
}

function yesClicked() {
  document.body.innerHTML = `
    <div class="page active">
      <h1>aku tau kok kalo kamu masih sayang aku 💙</h1>
    </div>
  `;
}
