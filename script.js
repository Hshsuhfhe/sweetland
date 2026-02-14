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
