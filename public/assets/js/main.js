/*-------------------- Sidebar --------------------*/
const liItem = document.querySelectorAll(".sidebar ul li");
const imgItem = document.querySelectorAll(".product-container");

liItem.forEach((li) => {
    li.addEventListener("click", function () {
        // remove active class from all li elements
        liItem.forEach((li) => {
            li.classList.remove("active");
        });
        // add active class to the clicked li element
        this.classList.add("active");

        // get the text content of the clicked li element
        const value = this.textContent.toLowerCase();

        // loop over all the images and show/hide them based on the value of their data-filter attribute
        imgItem.forEach((img) => {
            if (img.getAttribute("data-filter") === value) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});

/*-------------------- Header --------------------*/
const menu = document.getElementById('menu')
const menuItem = document.getElementById('menu-item')
const close = document.getElementById('close')

function showNavbar(){
    menuItem.style.top = "0";
}

function hideNavbar() {
    menuItem.style.top = "-100%";
}

menu.onclick = showNavbar;
close.onclick = hideNavbar;