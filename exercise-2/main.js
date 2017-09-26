let images = [
    'img/1.png',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.png',
    'img/5.png'
];

let image_idx = 0;

window.onload = function() {
    document.getElementById('slideshow_img').src = images[0];
};

let goNext = function() {
    ++image_idx;
    if(image_idx > 4) {
        image_idx = 0;
    }

    document.getElementById('slideshow_img').src = images[image_idx];
};

let goPrev = function() {
    --image_idx;
    if(image_idx < 0) {
        image_idx = 4;
    }

    document.getElementById('slideshow_img').src = images[image_idx];
};