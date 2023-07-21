window.onload = function () {
    // loader
    setTimeout(() => {
        let loader_con = document.querySelector("#container");
        let main = document.querySelector(".wrapper");
        main.classList.remove('unloaded');
        loader_con.classList.add('loaded');

        AOS.init();
    }, 2000);

    // text animation 
    let titles = document.querySelectorAll(".animation-title");
    [...titles].map(elem => {
        elem.innerHTML = elem.textContent.replace(/\S/g, "<span class='animation-title-char'>$&</span>");
    })

    let letters = document.querySelectorAll(".animation-title-char");
    [...letters].map(letter => {
        var width = letter.offsetWidth;
        letter.innerHTML = "<div style='display:inline-block;width:" + width.toString() + "px" + ">" + "<span class='animation-title-char'>" + letter.textContent + "</span>" + "</div>";
    })
}

//accordion
let acc_items = [...document.querySelectorAll(".accordion__item")];
let accordion_h = document.querySelector(".accordion").offsetHeight ;
acc_items.map(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active");
    });
})

// burger
let burger = document.querySelector(".burger");
let adap_nav = document.querySelector(".adaptive__navigation");
burger.addEventListener("click", () => {
    adap_nav.classList.toggle("active");
})


// adaptive menu click
let adaptive_menu_items = [...document.querySelectorAll(".adaptive__navigation__inner .menu .menu__item")];
adaptive_menu_items.map(elem => {
    elem.addEventListener("click", () => {
        adap_nav.classList.remove("active");
    })
})