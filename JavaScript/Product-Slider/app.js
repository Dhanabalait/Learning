const images = document.querySelectorAll('.thumb-img li');

let img_id = 1;

images.forEach((img) => {

    img.addEventListener('click', (e) => {
        e.preventDefault();
        img_id = img.dataset.id;
        //console.log(img_id)
        slideImage();
    });
});

function slideImage() {
    const imgWidth = document.querySelector('.main-img img:first-child').clientWidth;
    const imgFrame = document.querySelector('.main-img');
    let width = (img_id - 1) * imgWidth;
    imgFrame.style.transform = `translateX(${-width}px)`;
    console.log(width)

}