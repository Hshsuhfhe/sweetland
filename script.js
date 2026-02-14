// Запрет правой кнопки мыши
document.addEventListener('contextmenu', e => e.preventDefault());

// Запрет горячих клавиш (Ctrl+C, Ctrl+U, Ctrl+S и т.д.)
document.addEventListener('keydown', e => {
    if(e.ctrlKey && ['c','u','s','a','i','p'].includes(e.key.toLowerCase())) e.preventDefault();
});

// Side panel
function togglePanel() { document.getElementById("side-panel").classList.toggle("active"); }

// Rules modal с анимацией
function openRules() {
    const modal = document.getElementById("rules-modal");
    modal.classList.add('show');
    document.body.style.overflow = "hidden";
    revealOnScroll();
}
function closeRules() {
    const modal = document.getElementById("rules-modal");
    modal.classList.remove('show');
    setTimeout(()=>{ modal.style.display='none'; document.body.style.overflow="auto"; }, 500);
}

// Copy IP
function copyIP() {
    const el=document.createElement('textarea');
    el.value='play.sweet-land.fun';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    let note=document.getElementById("copyNotice");
    note.style.opacity="1";
    setTimeout(()=>note.style.opacity="0",2000);
}

// Snow effect
const canvas=document.getElementById('snow');
const ctx=canvas.getContext('2d');
let W=canvas.width=window.innerWidth;
let H=canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<150;i++) particles.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*3+1,d:Math.random()*1});
function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='white';
    ctx.beginPath();
    for(let p of particles){
        ctx.moveTo(p.x,p.y);
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
    }
    ctx.fill();
    for(let p of particles){ p.y+=1.6; if(p.y>H)p.y=-10; }
}
setInterval(draw,30);

// Fade+slide при скролле модалки
function revealOnScroll() {
    const elements = document.querySelectorAll(".rules-scroll-area p, .rules-scroll-area h3");
    const scrollContainer = document.querySelector(".rules-scroll-area");
    if(!scrollContainer) return;
    const containerTop = scrollContainer.getBoundingClientRect().top;
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top - containerTop;
        if(top < scrollContainer.clientHeight - 50) el.classList.add("visible");
        else el.classList.remove("visible");
    });
}
document.querySelector(".rules-scroll-area")?.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);
