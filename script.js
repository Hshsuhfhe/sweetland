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

// повторяющиеся анимации
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
