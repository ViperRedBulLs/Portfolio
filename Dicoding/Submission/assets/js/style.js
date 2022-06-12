let nav = document.querySelector("#navbar");
let btnToTop = document.querySelector("#btn-to-top");

window.addEventListener("scroll", function(event) {
    console.log(this.window.pageYOffset)
    if (this.window.pageYOffset > 220) {
        nav.classList.add("changed");
        btnToTop.classList.add("show");
    } else {
        nav.classList.remove("changed");
        btnToTop.classList.remove("show");
    }
});

// Btn to top
btnToTop.addEventListener("click", function() {
    window.scrollTo(0, document.getElementById("header").offsetTop);
})

let links = document.querySelectorAll("a[data-scroll-to*='#']");
let idName = "";

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let id = this.attributes[0].nodeValue.split("#")
        window.scrollTo(0, document.getElementById(id[1]).offsetTop - 70);
        console.log(this)
        idName = String(this.attributes[0].nodeValue)
    });
}

console.log(idName);

function hasClass(list, name) {
    var res = false;
    if (list == name) {
        res = true;
    } else {
        res = false
    }
    return res;
}