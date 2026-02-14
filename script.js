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

// анимация при скролле
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
