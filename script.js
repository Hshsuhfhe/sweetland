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

// анимации (фикс — один раз)
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

// снег
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let snowflakes = [];

for(let i=0;i<60;i++){
snowflakes.push({
x:Math.random()*300,
y:Math.random()*300,
r:Math.random()*3+1,
d:Math.random()+0.5
});
}

function drawSnow(){
ctx.clearRect(0,0,300,300);
ctx.fillStyle="white";
ctx.beginPath();

snowflakes.forEach(f=>{
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
});
ctx.fill();
updateSnow();
}

function updateSnow(){
snowflakes.forEach(f=>{
f.y+=f.d;
if(f.y>300){
f.y=0;
f.x=Math.random()*300;
}
});
}

setInterval(drawSnow,30);
