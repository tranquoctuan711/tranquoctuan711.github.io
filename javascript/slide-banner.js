let slideImg = document.querySelectorAll(".slide__banner-img img");
let slideButton = document.querySelectorAll(".slide__banner-button--item");

for (let i = 0; i < slideButton.length; i++) {
    slideButton[i].onclick = function () {
        // ? xoá các class có tên showing
        for (let img = 0; img < slideImg.length; img++) {
            slideImg[img].classList.remove("showing");
        };

        slideImg[i].classList.add("showing");
    };
    
};