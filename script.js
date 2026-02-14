function copyIP(){
const ip="play.sweet-land.fun";
navigator.clipboard.writeText(ip);

const n=document.getElementById("copyNotice");
n.style.opacity="1";
n.style.bottom="50px";

setTimeout(()=>{
n.style.opacity="0";
n.style.bottom="30px";
},2000);
}

/* scroll animation */

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
},{threshold:.1});

document.querySelectorAll(".animate").forEach(el=>observer.observe(el));

/* snow */

const canvas=document.getElementById("snow");
const ctx=canvas.getContext("2d");

let W=window.innerWidth;
let H=window.innerHeight;

canvas.width=W;
canvas.height=H;

const particles=[];

for(let i=0;i<140;i++){
particles.push({
x:Math.random()*W,
y:Math.random()*H,
r:Math.random()*3+1,
d:Math.random()*1
});
}

function drawSnow(){
ctx.clearRect(0,0,W,H);
ctx.fillStyle="rgba(255,255,255,.6)";
ctx.beginPath();

particles.forEach(p=>{
ctx.moveTo(p.x,p.y);
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
});

ctx.fill();
updateSnow();
}

function updateSnow(){
particles.forEach(p=>{
p.y+=Math.cos(p.d)+1+p.r/2;
p.x+=Math.sin(.1)*2;

if(p.y>H){
p.y=-10;
p.x=Math.random()*W;
}
});
}

function anim(){
drawSnow();
requestAnimationFrame(anim);
}

anim();

window.addEventListener("resize",()=>{
W=window.innerWidth;
H=window.innerHeight;
canvas.width=W;
canvas.height=H;
});
