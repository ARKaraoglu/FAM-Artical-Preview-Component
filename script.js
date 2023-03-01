console.log("hello");

const activeContainer = document.querySelector(".active-container");

const desktopActiveContainer = document.querySelector(
    ".desktop-active-container"
);

const shareButtons = document.querySelectorAll(".forward-image");

for (let x = 0; x < shareButtons.length; x++) {
    shareButtons[x].addEventListener("click", function () {
        activeContainer.classList.toggle("display-none");
        desktopActiveContainer.classList.toggle("display-none");
    });
}
