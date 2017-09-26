let images = [
    'https://i.imgur.com/jIieD5A.png',
    'https://i.redd.it/kyktro2pgwkz.jpg',
    'https://i.redd.it/cyw0nduqiaiz.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cubic_with_double_point.svg/1200px-Cubic_with_double_point.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cokernel-02.png/200px-Cokernel-02.png'
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