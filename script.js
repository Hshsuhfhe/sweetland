// копирование IP
function copyIP(){
navigator.clipboard.writeText("play.sweet-land.fun");

const notice=document.getElementById("copyNotice");
notice.style.opacity="1";

setTimeout(()=>{
notice.style.opacity="0";
},2000);
}

// темы
function setTheme(theme){
document.body.className=theme;
}

// анимации (один раз)
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
},{threshold:0.2});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});

// ❄ снег (полноэкранный)
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resizeSnow(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resizeSnow();
window.addEventListener("resize", resizeSnow);

let snowflakes = [];

for(let i=0;i<120;i++){
snowflakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
speed:Math.random()*1+0.5
});
}

function drawSnow(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(255,255,255,0.8)";
ctx.beginPath();

snowflakes.forEach(f=>{
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
});
ctx.fill();
updateSnow();
requestAnimationFrame(drawSnow);
}

function updateSnow(){
snowflakes.forEach(f=>{
f.y+=f.speed;
if(f.y>canvas.height){
f.y=0;
f.x=Math.random()*canvas.width;
}
});
}

drawSnow();
