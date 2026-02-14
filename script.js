// Открытие/Закрытие шторки
function togglePanel() {
    document.getElementById("side-panel").classList.toggle("active");
}

// Открытие правил
function openRules() {
    document.getElementById("rules-modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Запрет скролла фона
}

// Закрытие правил
function closeRules() {
    document.getElementById("rules-modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Закрытие по клику вне окна
window.onclick = function(e) {
    if (e.target == document.getElementById("rules-modal")) {
        closeRules();
    }
}

// Копирование IP
function copyIP() {
    navigator.clipboard.writeText("play.sweet-land.fun");
    let note = document.getElementById("copyNotice");
    note.style.opacity = "1";
    setTimeout(() => { note.style.opacity = "0"; }, 2500);
}

// Снег (полная версия)
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];
for(let i=0; i<120; i++) {
    particles.push({x:Math.random()*W, y:Math.random()*H, r:Math.random()*4+1, d:Math.random()*1});
}
function draw() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for(let p of particles) {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    for(let p of particles) {
        p.y += 1.5;
        if(p.y > H) p.y = -10;
    }
}
setInterval(draw, 30);
