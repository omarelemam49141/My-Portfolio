//portfolio projects
let websites = [
    {
        title: "Mobile Phone Online Store",
        image: "./images/portfolio/elkory.png",
        github: "",
        live: "https://elkoryphone.web.app/"
    },
    {
        title: "Eccomerce Angular",
        image: "./images/portfolio/ecommerce-angular.jpg",
        github: "https://github.com/omarelemam49141/Market-Store-Website",
        live: "https://eccomerce-971b5.web.app/"
    },
    {
        title: "Eccomerce JavaScript",
        image: "./images/portfolio/mnohm.png",
        github: "https://github.com/omarelemam49141/JS-Modified-Version",
        live: "https://omarelemam49141.github.io/JS-Modified-Version/"
    }
]

let templates = [
    {
        title: "Template 1 Css & HTML",
        image: "./images/portfolio/template1.png",
        github: "https://github.com/omarelemam49141/HTML_CSS_TEMPLATE_ONE",
        live: "https://omarelemam49141.github.io/HTML_CSS_TEMPLATE_ONE/"
    },
    {
        title: "Template 2 Css & HTML",
        image: "./images/portfolio/template2.png",
        github: "https://github.com/omarelemam49141/HTML-CSS-TEMPLATE-TWO",
        live: "https://omarelemam49141.github.io/HTML-CSS-TEMPLATE-TWO/"
    },
    {
        title: "Template 3 Css & HTML & javascript",
        image: "./images/portfolio/template3.png",
        github: "https://github.com/omarelemam49141/HTML_CSS_TEMPLATE_THREE",
        live: "https://omarelemam49141.github.io/HTML_CSS_TEMPLATE_THREE/"
    },
    {
        title: "Template 4 Bootstrap & Javascript",
        image: "./images/portfolio/bootstrap-1.png",
        github: "https://github.com/omarelemam49141/Template-Bootstrap-1",
        live: "https://omarelemam49141.github.io/Template-Bootstrap-1/"
    }
]

let javaScriptApps = [
    {
        title: "The hangman game",
        image: "./images/portfolio/hangman.png",
        github: "https://github.com/omarelemam49141/HTML_CSS_TEMPLATE_THREE",
        live: "https://omarelemam49141.github.io/HTML_CSS_TEMPLATE_THREE/"
    },
    {
        title: "Typing speed game",
        image: "./images/portfolio/wordsGame.png",
        github: "https://github.com/omarelemam49141/HTML_CSS_TEMPLATE_THREE",
        live: "https://omarelemam49141.github.io/HTML_CSS_TEMPLATE_THREE/"
    },
    {
        title: "Memory cards game",
        image: "./images/portfolio/memoryGame.png",
        github: "https://github.com/omarelemam49141/memory-game",
        live: "https://omarelemam49141.github.io/memory-game/"
    },
    {
        title: "Exam 1",
        image: "./images/portfolio/exam1.png",
        github: "https://github.com/omarelemam49141/Quiz",
        live: "https://omarelemam49141.github.io/Quiz/"
    },
    {
        title: "Exam 2",
        image: "./images/portfolio/exam2.png",
        github: "https://github.com/omarelemam49141/Exam",
        live: "https://omarelemam49141.github.io/Exam/"
    },
    {
        title: "To Do List 1",
        image: "./images/portfolio/todolist.png",
        github: "https://github.com/omarelemam49141/To-Do-List2",
        live: "https://omarelemam49141.github.io/To-Do-List2/"
    },
    {
        title: "To Do List 2",
        image: "./images/portfolio/todolist2.png",
        github: "https://github.com/omarelemam49141/To-Do-List",
        live: "https://omarelemam49141.github.io/To-Do-List/"
    },
    {
        title: "Currency convertor",
        image: "./images/portfolio/currency.png",
        github: "https://github.com/omarelemam49141/Currency-Converting-Serial-Number-Generator",
        live: "https://omarelemam49141.github.io/Currency-Converting-Serial-Number-Generator/"
    },
    {
        title: "Data table",
        image: "./images/portfolio/datatable-1.png",
        github: "https://github.com/omarelemam49141/Data-Table-1",
        live: "https://omarelemam49141.github.io/Data-Table-1/"
    },
    {
        title: "Video html5",
        image: "./images/portfolio/video.png",
        github: "https://github.com/omarelemam49141/video-html5",
        live: "https://omarelemam49141.github.io/video-html5/"
    },
    {
        title: "Detect your location",
        image: "./images/portfolio/your location.png",
        github: "https://github.com/omarelemam49141/Detect-Location",
        live: "https://omarelemam49141.github.io/Detect-Location/"
    },
]

let designs = [
    {
        title: "Presentation 1 using canva",
        image: "./images/portfolio/presentation1.png",
        github: "",
        live: "https://www.canva.com/design/DAF8mkyiENY/St0Dj664uSqmWCRagWag7Q/view?utm_content=DAF8mkyiENY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
        title: "Presentation 2 using canva",
        image: "./images/portfolio/presentation2.png",
        github: "",
        live: "https://www.canva.com/design/DAF5gzD7iPs/3jLKsFngdzzVIHUoZNsVdQ/view?utm_content=DAF5gzD7iPs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
        title: "Presentation 3 using canva",
        image: "./images/portfolio/presentation3.png",
        github: "",
        live: "https://www.canva.com/design/DAF17zf3SU8/nydxaa2lYz-zFFiMFxG9Ig/view?utm_content=DAF17zf3SU8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
]

function DisplayPortfolioItems(elem, arrayOfWorks) {
    let allButtons = document.querySelectorAll(".portfolio-heading button");
    for(let i = 0; i < allButtons.length; i++)
    {
        allButtons[i].classList.add("not-active");
        allButtons[i].classList.remove("active");
    }
    elem.classList.add("active");
    elem.classList.remove("not-active");

    let portfolioItemsContainer = document.querySelector("#portfolio-items");
    portfolioItemsContainer.innerHTML = "";

    arrayOfWorks.forEach(element => {
        let portfolioItemDiv = document.createElement("div");
        portfolioItemDiv.classList = "portfolio-item padd-15";

        let portfolioItemInnerDiv = document.createElement("div");
        portfolioItemInnerDiv.classList = "portfolio-item-inner shadow-dark";
        portfolioItemDiv.appendChild(portfolioItemInnerDiv);

        let portfolioImgDiv = document.createElement("div");
        portfolioImgDiv.classList = "portfolio-img";

        let img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", "not-found");
        portfolioImgDiv.appendChild(img);

        portfolioItemInnerDiv.appendChild(portfolioImgDiv);


        let liveDiv = document.createElement("div");
        liveDiv.classList = "live";
        portfolioItemDiv.appendChild(liveDiv);

        let title = document.createElement("h3");
        title.innerText = element.title;
        liveDiv.appendChild(title);
        
        if(element.github != "")
        {
            let buttonGithub = document.createElement("button");
            buttonGithub.classList = "git-btn btn";
            let linkGithub = document.createElement("a");
            linkGithub.setAttribute("href", element.github);
            linkGithub.setAttribute("target", "blank");
            linkGithub.innerText = "Github";
            buttonGithub.appendChild(linkGithub);
            liveDiv.appendChild(buttonGithub);
        }

        if(element.live != "")
        {
            let buttonLive = document.createElement("button");
            buttonLive.classList = "git-btn btn";
            let linkLive = document.createElement("a");
            linkLive.setAttribute("href", element.live);
            linkLive.setAttribute("target", "blank");
            linkLive.innerText = "Live"; 
            buttonLive.appendChild(linkLive);
            liveDiv.appendChild(buttonLive);
        }
        
        portfolioItemsContainer.appendChild(portfolioItemDiv);
    });
}

window.addEventListener("load", function() {
    //click the website button to display the website projects
    let websiteButton = document.querySelector(".portfolio-heading button");
    DisplayPortfolioItems(websiteButton, websites);

    /* typed animation */
    let typed = new Typed(".typing", {
        strings: ["", "Web Designer", "web Developer", "Graphic Designer"],
        typeSpeed:100,
        BackSpeed: 60,
        loop: true
    })

    /* aside */
    this.document.querySelector(".nav").addEventListener("click", function(e){
        if (e.target.nodeName == "A") {
            Array.from(document.querySelectorAll(".nav li a")).forEach(link=>{
                link.classList.remove("active");
            })
            e.target.classList.add("active");
            //remove the active class from all sections
            Array.from(document.querySelectorAll(".section")).forEach(section=>{
                if (section.classList.contains("active")) {
                    section.classList.add("prev-section");
                } else {
                    section.classList.add("back-section");
                }
                section.classList.remove("active");
            })
            //get the section to which the link belongs and make it active
            document.querySelector(e.target.getAttribute("href")).classList.add("active");
            document.querySelector(e.target.getAttribute("href")).classList.remove("back-section");
            document.querySelector(e.target.getAttribute("href")).classList.remove("prev-section");

            //close the aside
            if (window.innerWidth < 1200) {
                slideAside();
            }
        }
    })

    /*when clicking hiring me do the same for when clicking contact a*/
    document.querySelector(".hire-me").addEventListener("click", openContactSection);

    document.querySelector(".nav-toggler").addEventListener("click", slideAside);
})

/* slide the aside when clicking the aside toggler */
function slideAside() {
    document.querySelector(".aside").classList.toggle("slider");
    document.querySelectorAll(".section").forEach(section=> {
        section.classList.toggle("slider");
    })
    document.querySelector(".nav-toggler").classList.toggle("slider");
}

function openContactSection() {
    document.querySelector("#contactBtn").click();
}

