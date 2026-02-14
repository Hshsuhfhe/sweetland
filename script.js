function copyIP(){
navigator.clipboard.writeText("play.sweet-land.fun");

const notice=document.getElementById("copyNotice");
notice.style.opacity="1";
notice.style.transform="translate(-50%,-50%) scale(1)";

setTimeout(()=>{
notice.style.opacity="0";
notice.style.transform="translate(-50%,-50%) scale(.8)";
},2000);
}

function toggleTheme(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
}

function togglePanel(){
document.getElementById("sidePanel").classList.toggle("open");
}

/* АНИМАЦИИ ВНИЗ-ВВЕРХ */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}else{
entry.target.classList.remove("show");
}
});
},{threshold:0.25});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});

/* СНЕГ */
const canvas=document.getElementById("snow");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let snowflakes=[];
for(let i=0;i<100;i++){
snowflakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()+1
});
}

function drawSnow(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
ctx.beginPath();
snowflakes.forEach(f=>{
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
});
ctx.fill();
moveSnow();
}

function moveSnow(){
snowflakes.forEach(f=>{
f.y+=f.d;
if(f.y>canvas.height){
f.y=0;
f.x=Math.random()*canvas.width;
}
});
}

setInterval(drawSnow,33);
