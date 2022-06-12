let btnToTop = document.querySelector("#btn-to-top");

window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;
    let nav = document.querySelector("#navigation");
    console.log(scroll);
    if (scroll > 378) {
        nav.classList.add("bg-white");
        btnToTop.classList.add("show");
    } else {
        nav.classList.remove("bg-white");
        btnToTop.classList.remove("show");
    }
};

// button to top
btnToTop.addEventListener("click", function() {
    document.getElementById("header").scrollIntoView({
        behavior: "smooth"
    });
});