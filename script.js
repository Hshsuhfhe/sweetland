// анимации
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add("show");
});
});

document.querySelectorAll(".animate")
.forEach(el=>obs.observe(el));

// копирование
function copyIP(){
navigator.clipboard.writeText("play.sweet-land.fun");

const n=document.getElementById("copyNotice");
n.style.opacity="1";
n.style.transform="translateY(0)";

setTimeout(()=>{
n.style.opacity="0";
n.style.transform="translateY(20px)";
},2000);
}
