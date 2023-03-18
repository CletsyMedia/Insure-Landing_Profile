const bars = document.querySelector(".fa-bars");
const navItems = document.querySelector(".items");

bars.addEventListener("click", ()=>{
    bars.classList.toggle("fa-times");
    if(bars.classList.contains("fa-times")){
        navItems.classList.add("nav-toggle");
    }else{
        navItems.classList.remove("nav-toggle");
    }
})