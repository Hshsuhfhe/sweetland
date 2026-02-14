// --- Копирование IP ---
function copyIP(){
  navigator.clipboard.writeText("play.sweet-land.fun");
  const notice=document.getElementById("copyNotice");
  notice.style.opacity="1";
  setTimeout(()=>{ notice.style.opacity="0"; },2000);
}

// --- Переключатель темы ---
function toggleTheme(){
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

// --- Анимация появления ---
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("show");}
    else{entry.target.classList.remove("show");}
  });
},{threshold:0.2});
document.querySelectorAll(".animate").forEach(el=>observer.observe(el));

// --- Снег ---
const canvas=document.getElementById('snow');
const ctx=canvas.getContext('2d');
let W=canvas.width=window.innerWidth;
let H=canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<300;i++){
  particles.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*5+1,d:Math.random()*2});
}
function draw(){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='white';
  ctx.beginPath();
  for(let p of particles){ctx.moveTo(p.x,p.y);ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);}
  ctx.fill();
  update();
}
let angle=0;
function update(){
  angle+=0.01;
  for(let p of particles){
    p.y+=Math.cos(angle+p.d)+1+p.r/2;
    p.x+=Math.sin(angle)*2;
    if(p.x>W+5||p.x<0||p.y>H){p.x=Math.random()*W;p.y=-10;}
  }
}
setInterval(draw,25);
window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;});
