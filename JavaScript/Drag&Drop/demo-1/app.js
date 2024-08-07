const itemList = document.getElementsByClassName('list-item');
const leftBox = document.getElementById('left');
const rightBox = document.getElementById('right');

for (item of itemList) {
    item.addEventListener('dragstart', function (e) {
        let selectedItem = e.target;
        leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function (e) {
            leftBox.appendChild(selectedItem);
            selectedItem = null;
        });

        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function (e) {
            rightBox.appendChild(selectedItem);
            selectedItem = null;
        });
    });
}