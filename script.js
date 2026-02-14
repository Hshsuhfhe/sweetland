// Панель (Шторка)
function togglePanel() {
    document.getElementById("side-panel").classList.toggle("active");
}

// Правила
function openRules() {
    document.getElementById("rules-modal").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeRules() {
    document.getElementById("rules-modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Закрытие модалки по клику на фон
window.onclick = function(e) {
    if (e.target == document.getElementById("rules-modal")) closeRules();
}

// Копирование IP
function copyIP() {
    navigator.clipboard.writeText("play.sweet-land.fun");
    let n = document.getElementById("copyNotice");
    n.style.opacity = "1";
    setTimeout(() => n.style.opacity = "0", 2000);
}

// Снег (полная рабочая версия)
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];

for(let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 1,
        d: Math.random() * 1
    });
}

function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for(let p of particles) {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
}

function update() {
    for(let p of particles) {
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(0.1) * 2;
        if(p.y > H) {
            p.x = Math.random() * W;
            p.y = -10;
        }
    }
}
setInterval(draw, 30);

// Обновление размера холста при ресайзе окна
window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});
