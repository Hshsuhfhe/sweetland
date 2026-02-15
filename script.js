// 1. БЕСКОНЕЧНАЯ АНИМАЦИЯ (ВВЕРХ И ВНИЗ)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active"); 
        }
    }
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// 2. БОКОВАЯ ПАНЕЛЬ
function togglePanel() { 
    document.getElementById("side-panel").classList.toggle("active"); 
}

// 3. ПРАВИЛА
function openRules() { 
    const modal = document.getElementById("rules-modal");
    modal.style.display = "block";
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = "hidden";
}
function closeRules() { 
    const modal = document.getElementById("rules-modal");
    modal.classList.remove('show');
    setTimeout(() => { 
        modal.style.display = 'none'; 
        document.body.style.overflow = "auto"; 
    }, 500);
}

// 4. КОПИРОВАНИЕ IP
function copyIP() {
    navigator.clipboard.writeText('play.sweet-land.fun').then(() => {
        let note = document.getElementById("copyNotice");
        note.style.opacity = "1";
        setTimeout(() => note.style.opacity = "0", 2000);
    });
}

// 5. СНЕГ
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];
for(let i = 0; i < 150; i++) particles.push({x: Math.random()*W, y: Math.random()*H, r: Math.random()*3+1});
function draw() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for(let p of particles) {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    for(let p of particles) { p.y += 1.5; if(p.y > H) p.y = -10; }
}
setInterval(draw, 30);

// 6. ЗАЩИТА
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if(e.ctrlKey && ['c','u','s','i'].includes(e.key.toLowerCase())) e.preventDefault();
});
