/* toggle style switcher */
window.addEventListener("load", function() {
    document.querySelector(".style-switcher-toggler").addEventListener("click", ()=>{
        document.querySelector(".style-switcher").classList.toggle("open");
    })
})

/* Hide the style selector on scrolling */
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
}) 

/* theme colors */
let themesLinks = document.querySelectorAll(".alternate-style");

function setActiveStyle (color) {
    themesLinks.forEach(link=>{
        
        if (link.title == color) {
            link.disabled = false;
        } else {
            link.disabled = true;
        }
    })
}

/*theme dark and day mode*/
document.querySelector(".day-night").addEventListener("click", function() {
    this.children[0].classList.toggle("fa-sun");
    this.children[0].classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})