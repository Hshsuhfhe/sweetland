// --- 1. ФУНКЦИЯ БЕСКОНЕЧНОЙ АНИМАЦИИ (ВВЕРХ И ВНИЗ) ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 100;

        // Если блок в поле зрения — добавляем класс, если ушел — убираем
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active"); 
        }
    }
}

// Запуск при скролле и при загрузке страницы
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// --- 2. БОКОВАЯ ПАНЕЛЬ (SIDE PANEL) ---
function togglePanel() { 
    document.getElementById("side-panel").classList.toggle("active"); 
}

// --- 3. ПРАВИЛА (MODAL RULES) ---
function openRules() { 
    const modal = document.getElementById("rules-modal");
    modal.style.display = "block";
    // Небольшая задержка, чтобы анимация плавности (CSS) сработала
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = "hidden"; // Запрет прокрутки сайта под модалкой
}

function closeRules() { 
    const modal = document.getElementById("rules-modal");
    modal.classList.remove('show');
    setTimeout(() => { 
        modal.style.display = 'none'; 
        document.body.style.overflow = "auto"; 
    }, 500); // Время должно совпадать с переходом в CSS
}

// --- 4. КОПИРОВАНИЕ IP ---
function copyIP() {
    const ip = 'play.sweet-land.fun';
    navigator.clipboard.writeText(ip).then(() => {
        let note = document.getElementById("copyNotice");
        note.style.opacity = "1";
        setTimeout(() => note.style.opacity = "0", 2000);
    });
}

// --- 5. ЭФФЕКТ СНЕГА (SNOW EFFECT) ---
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];

// Создаем снежинки
for(let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 1,
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
    
    // Движение снега
    for(let p of particles) { 
        p.y += 1.6; 
        if(p.y > H) p.y = -10; 
    }
}

// Обновление снега
setInterval(draw, 30);

// Изменение размера холста при ресайзе окна
window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});

// --- 6. ЗАЩИТА КОНТЕНТА (ОТКЛЮЧЕНО ПО ЖЕЛАНИЮ) ---
// Запрет правой кнопки мыши
document.addEventListener('contextmenu', e => e.preventDefault());

// Запрет горячих клавиш (Ctrl+C, Ctrl+U и т.д.)
document.addEventListener('keydown', e => {
    if(e.ctrlKey && ['c','u','s','a','i','p'].includes(e.key.toLowerCase())) e.preventDefault();
});
