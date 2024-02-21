window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY>0)
})

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open");
        // Icon change
        const icon = faq.querySelector(".faq_icon i");
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus"
        }
    })
})

const menu = document.querySelector(".nav_menu")
const openBtn = document.querySelector("#open-menu-button")
const closeBtn = document.querySelector("#close-menu-button")
openBtn.addEventListener("click", ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    openBtn.style.display = "none"
})
closeBtn.addEventListener("click",()=>{
    menu.style.display ="none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})