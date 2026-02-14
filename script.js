// --- ЛОГИКА ПАНЕЛИ ---
function togglePanel() { 
    document.getElementById("side-panel").classList.toggle("active"); 
}

// --- ЛОГИКА ПРАВИЛ ---
function openRules() { 
    document.getElementById("rules-modal").style.display = "block"; 
    document.body.style.overflow = "hidden"; 
}
function closeRules() { 
    document.getElementById("rules-modal").style.display = "none"; 
    document.body.style.overflow = "auto"; 
}

// Закрытие по клику вне окна
window.onclick = function(e) { 
    if (e.target == document.getElementById("rules-modal")) closeRules(); 
}

// --- КОПИРОВАНИЕ ---
function copyIP() {
    navigator.clipboard.writeText("play.sweet-land.fun");
    let notice = document.getElementById("copyNotice");
    notice.style.opacity = "1";
    setTimeout(() => { notice.style.opacity = "0"; }, 2500);
}

// --- ПОЛНЫЙ СКРИПТ СНЕГА (КАК РАНЬШЕ) ---
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
        d: Math.random() * 1.5,
        v: Math.random() * 0.5 + 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for(let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
}

function update() {
    for(let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(0.1) * 2;
        if(p.x > W + 5 || p.x < -5 || p.y > H) {
            particles[i] = {x: Math.random() * W, y: -10, r: p.r, d: p.d, v: p.v};
        }
    }
}
setInterval(draw, 30);

// Анимация при скролле
const animItems = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.2 });
animItems.forEach(item => observer.observe(item));
