function copyIP(){
navigator.clipboard.writeText("play.sweet-land.fun");
const notice=document.getElementById("copyNotice");
notice.style.opacity="1";
setTimeout(()=>{notice.style.opacity="0";},2000);
}

function toggleTheme(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");

const label=document.querySelector(".theme-label");
label.textContent=document.body.classList.contains("light") ? "LIGHT" : "DARK";
}

function togglePanel(){
document.getElementById("sidePanel").classList.toggle("open");
}

/* Анимации */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});

/* СНЕГ */
const canvas=document.getElementById("snow");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let snowflakes=[];

for(let i=0;i<120;i++){
snowflakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*1
});
}

function drawSnow(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
ctx.beginPath();
for(let i=0;i<snowflakes.length;i++){
let f=snowflakes[i];
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
}
ctx.fill();
moveSnow();
}

let angle=0;
function moveSnow(){
angle+=0.01;
for(let i=0;i<snowflakes.length;i++){
let f=snowflakes[i];
f.y+=Math.pow(f.d,2)+1;
f.x+=Math.sin(angle)*2;

if(f.y>canvas.height){
f.y=0;
f.x=Math.random()*canvas.width;
}
}
}

setInterval(drawSnow,33);
