
// Run Clock
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

setInterval(runClock, 1000);

function runClock() {
    const time = new Date();
    const sec = time.getSeconds() / 60;
    const min = (sec + time.getMinutes()) / 60;
    const hrs = (min + time.getHours()) / 12;

    second.style.setProperty('--rotation', sec * 360);
    minute.style.setProperty('--rotation', min * 360);
    hour.style.setProperty('--rotation', hrs * 360);
}
runClock();

// Select Clock BG Image 
const uploadImage = document.getElementById('upload-img');
const bgImage = document.querySelector('.bg-img');
//console.log(bgImage);
uploadImage.onchange = function () {
    console.log(uploadImage.files[0]);
    //console.log(URL.createObjectURL(uploadImage.files[0]));
    bgImage.src = URL.createObjectURL(uploadImage.files[0]);
    console.log(bgImage.src);
};

// Zoom image size
const imgZoomRange = document.getElementById('img-zoom');
imgZoomRange.addEventListener('change', () => {
    bgImage.style.width = `${imgZoomRange.value}%`;
    bgImage.style.height = `${imgZoomRange.value}%`;
    console.log(bgImage);
    console.log(imgZoomRange.value);
});

// Clock shape
const listOfShapes = document.querySelectorAll('li.shape');
const analogClock = document.getElementById('analog-clock');

listOfShapes.forEach((shape) => {
    shape.addEventListener('click', () => {
        let oldClockShape = analogClock.classList[1];
        const newClockShape = `clock-shape-${shape.dataset.value}`;
        analogClock.classList.remove(oldClockShape);
        analogClock.classList.add(newClockShape);
    });
});


//const dragButton = document.getElementById('drag-button');
const dragImgContainer = document.getElementById('drag-img-container');

dragImgElement(dragImgContainer);

function dragImgElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // Clock BG image draggable
    const draggableArea = document.getElementById('analog-clock');
    if (document.getElementById('drag-button')) {
        document.getElementById('drag-button').onmousedown = dragMouseDown;
    } else
        el.onmousedown = dragMouseDown;


    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || draggableArea.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || draggableArea.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }


}


