// ЗАПРЕТ ПРАВОЙ КНОПКИ МЫШИ
document.addEventListener('contextmenu', e => e.preventDefault());

// ЗАПРЕТ ГОРЯЧИХ КЛАВИШ КОПИРОВАНИЯ
document.addEventListener('keydown', e => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'a' || e.key === 'i')) {
        e.preventDefault();
    }
});

function togglePanel() {
    document.getElementById("side-panel").classList.toggle("active");
}

function openRules() {
    document.getElementById("rules-modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeRules() {
    document.getElementById("rules-modal").style.display = "none";
    document.body.style.overflow = "auto";
}

function copyIP() {
    const el = document.createElement('textarea');
    el.value = 'play.sweet-land.fun';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    let note = document.getElementById("copyNotice");
    note.style.opacity = "1";
    setTimeout(() => { note.style.opacity = "0"; }, 2500);
}

// Снег
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];
for(let i=0; i<150; i++) particles.push({x:Math.random()*W, y:Math.random()*H, r:Math.random()*3+1, d:Math.random()*1});

function draw() {
    ctx.clearRect(0,0,W,H); ctx.fillStyle='white'; ctx.beginPath();
    for(let p of particles) { ctx.moveTo(p.x, p.y); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true); }
    ctx.fill();
    for(let p of particles) { p.y += 1.8; if(p.y > H) p.y = -10; }
}
setInterval(draw, 30);
