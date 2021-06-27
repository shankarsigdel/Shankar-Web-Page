


let images = document.querySelectorAll(".project-image");
let popup = document.querySelector(".popup-wrapper");
let popupImage = document.querySelector("#popup-img");


images.forEach((image) => {
    image.addEventListener("click", (event) => {
        console.log(event.target);
        popupImage.src = event.target.src;
        popup.style.display = "block";
    })
})

popup.addEventListener("click", (event) => {
    if (event.target === popupImage ) {
        return;
    }
     popup.style.display = "none";
})