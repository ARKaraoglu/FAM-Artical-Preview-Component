console.log("hello");

const activeContainer = document.querySelector(".active-container");

const shareButtons = document.querySelectorAll(".forward-image");

for (let x = 0; x < shareButtons.length; x++) {
    shareButtons[x].addEventListener("click", function () {
        activeContainer.classList.toggle("display-none");
    });
}
