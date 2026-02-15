const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
});
