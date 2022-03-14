var navlisticon = document.querySelector("#navlisticon")
var mql_expand = window.matchMedia('(min-width: 1353px)')
var navitems = document.querySelectorAll(".navitems");
var navbar = document.querySelector("nav")
navlisticon.addEventListener('click', ShownavList)
function ShownavList() {

    let navstylecheck = 0;
    for (let item of navitems) {
        if (item.style.display == "flex") {
            item.style.display = "none";
            navstylecheck = 0;

        }
        else {
            item.style.display = "flex";
            navstylecheck = 1;
        }
    }
    if (navstylecheck == 1) {
        navbar.style.maxHeight = "30em";
    }
    else {
        navbar.style.maxHeight = "3.5em";
    }
};
mql_expand.onchange = (e) => {
    if (e.matches) {
        navbar.style.maxHeight = "3.5em";
        for (let item of navitems) {
            item.style.display = "flex";
        }

    }
    else {
        for (let item of navitems) {
            item.style.display = "none";
        }
    }
}