var dragItem = null;
const items = document.getElementsByClassName('list-item');
const dropBoxs = document.getElementsByClassName('drop-box');

for (item of items) {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = 'none', 0);
}
function dragEnd() {
    setTimeout(() => this.style.display = 'flex', 0);
    dragItem = null;
    setTimeout(()=> this.parentElement.classList.remove('drop-box-hover'),1000);
}

for(dropBox of dropBoxs){
    dropBox.addEventListener("dragover", dragOver);
    dropBox.addEventListener("dragenter", dragEnter);
    dropBox.addEventListener("dragleave", dragLeave);
    dropBox.addEventListener("drop", drop);
}

function drop(){
    this.append(dragItem);
}
function dragOver(e){
    e.preventDefault();
    this.classList.add('drop-box-hover');
}
function dragEnter(e){
e.preventDefault();
//setTimeout(()=> this.classList.remove('drop-box-hover'),0);
}
function dragLeave(){
   this.classList.remove('drop-box-hover');
}