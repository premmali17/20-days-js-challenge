const images = [

    "https://picsum.photos/id/1015/800/500",

    "https://picsum.photos/id/1016/800/500",

    "https://picsum.photos/id/1018/800/500",

    "https://picsum.photos/id/1025/800/500"

];

let currentIndex = 0;

const sliderImage =
document.getElementById("sliderImage");

document
.getElementById("nextBtn")
.addEventListener("click", nextImage);

document
.getElementById("prevBtn")
.addEventListener("click", prevImage);

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    sliderImage.src =
    images[currentIndex];
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    sliderImage.src =
    images[currentIndex];
}