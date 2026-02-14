// копирование IP
function copyIP(){
  navigator.clipboard.writeText("play.sweet-land.fun");
  const notice=document.getElementById("copyNotice");
  notice.style.opacity="1";
  setTimeout(()=>{ notice.style.opacity="0"; },2000);
}

// переключатель темы
function toggleTheme(){
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

// повтор анимаций
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".animate").forEach(el=>{
  observer.observe(el);
});

// снег
const canvas=document.getElementById('snow');
const ctx=canvas.getContext('2d');
let W=canvas.width=window.innerWidth;
let H=canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<200;i++){
  particles.push({
    x:Math.random()*W,
    y:Math.random()*H,
    r:Math.random()*4+1,
    d:Math.random()*1
  });
}

function draw(){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='white';
  ctx.beginPath();
  for(let i=0;i<particles.length;i++){
    let p=particles[i];
    ctx.moveTo(p.x,p.y);
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
  }
  ctx.fill();
  update();
}

let angle=0;
function update(){
  angle+=0.01;
  for(let i=0;i<particles.length;i++){
    let p=particles[i];
    p.y+=Math.cos(angle+p.d)+1+p.r/2;
    p.x+=Math.sin(angle)*2;

    if(p.x>W+5||p.x<0||p.y>H){
      if(i%3>0){ particles[i]={x:Math.random()*W,y:-10,r:p.r,d:p.d}; }
      else{ if(Math.sin(angle)>0){particles[i]={x:-5,y:Math.random()*H,r:p.r,d:p.d};}
            else{particles[i]={x:W+5,y:Math.random()*H,r:p.r,d:p.d};} }
    }
  }
}

setInterval(draw,33);
window.addEventListener('resize',()=>{
  W=canvas.width=window.innerWidth;
  H=canvas.height=window.innerHeight;
});
