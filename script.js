// Копирование IP
function copyIP() {
    const ip = "play.sweet-land.fun";
    navigator.clipboard.writeText(ip);
    
    const notice = document.getElementById("copyNotice");
    notice.style.opacity = "1";
    
    setTimeout(() => {
        notice.style.opacity = "0";
    }, 2000);
}

// Появление элементов при скролле
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// Снег
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = window.innerWidth, H = window.innerHeight;
canvas.width = W; canvas.height = H;

const particles = [];
for(let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1
    });
}

function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.beginPath();
    for(let p of particles) {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    update();
}

function update() {
    for(let p of particles) {
        p.y += Math.cos(p.d) + 1 + p.r/2;
        p.x += Math.sin(0.1) * 1;
        if(p.y > H) { p.y = -10; p.x = Math.random() * W; }
    }
}

function loop() { draw(); requestAnimationFrame(loop); }
loop();

window.onresize = () => { W = window.innerWidth; H = window.innerHeight; canvas.width = W; canvas.height = H; };
