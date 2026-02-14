function copyIP(){
navigator.clipboard.writeText("play.sweet-land.fun");

const notice=document.getElementById("copyNotice");
notice.style.opacity="1";

setTimeout(()=>{
notice.style.opacity="0";
},2000);
}

function toggleTheme(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
}

/* Фикс анимаций (без бага при краю текста) */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.intersectionRatio>0.25){
entry.target.classList.add("show");
}
});
},{
threshold:[0.25]
});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});
