//animación navbar desktop

function efectoScroll() {
    let mql = window.matchMedia("(min-width:769px)")
    let suerte = (mql.matches)

    if (document.documentElement.scrollTop > 50 & suerte) {
        document.querySelector(".downnav").style.height = "1.5rem";
        document.getElementById("logo").style.width = "2rem"

    } else if (suerte) {
        document.querySelector(".downnav").style.height = "3.7rem";
        document.getElementById("logo").style.width = "3.5rem"
    }
    else if (!suerte) {
        document.getElementById("logo").style.width = "2rem"
        document.querySelector(".downnav").style.height = "2rem";
    }
}
window.addEventListener("scroll", efectoScroll)
window.addEventListener("resize", efectoScroll)

////////////////////////////////////////////////////////Menu hamburger

let menu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close-menu")
let openMenu = document.querySelector(".open-menu")

openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show() {
    menu.style.height = "100vh";
    menu.style.display = "flex";
    menu.style.top = "0";
}

function close() {
    menu.style.top = "-120%";
    // menu.style.height = "auto";
}

/////////////////////////////Cierre Menu responsive

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", close)
})



////////////////////////////////////////////////////////Texto banner

let texto = document.querySelector(".banner-texto-animate").children
let index = 0
let textInTimer = 3000
let textOutTimer = 2800

function animarTexto() {
    for (let i = 0; i < texto.length; i++) {
        texto[i].classList.remove("text-in", "text-out");
    }

    texto[index].classList.add("text-in");

    setTimeout(function () {
        texto[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {
        if (index == texto.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animarTexto()
    }, textInTimer)
}

window.onload = animarTexto

////////////////////////////////////////////////////////slider

let slider = tns({
    container: ".my-slider",
    "slideBy": "1",
    "speed": 300,
    "nav": false,
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1200: {
            items: 4,
            gutter: 20
        },
        992: {
            items: 4,
            gutter: 20
        },
        768: {
            items: 3,
            gutter: 20
        },
        576: {
            items: 2,
            gutter: 20
        },

    }
})

/////////////////////////////////////////////////// preguntas frecuentes

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faqs.forEach(function (item) {
            if (item !== faq) {
                item.classList.remove("active")
            }
        })
        faq.classList.toggle("active")
    })
}

)





