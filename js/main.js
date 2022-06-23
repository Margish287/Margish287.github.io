const collapsible = document.querySelectorAll(".collapsible");
const author_name = document.querySelector(".name");

collapsible.forEach((item) => {
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    });
});

author_name.addEventListener(
    "mouseover",
    (hideName = () => {
        author_name.innerHTML = "Developer";
    })
);
author_name.addEventListener(
    "mouseout",
    (showName = () => {
        author_name.innerHTML = "Margish";
    })
);