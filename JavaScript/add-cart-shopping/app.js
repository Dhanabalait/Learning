const cartBtn = document.querySelector('#cart-icon');
const cartClose = document.querySelector('#cart-close');
const cartSection = document.querySelector('.cart-section');

cartBtn.addEventListener('click', () => {
    cartSection.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cartSection.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', loadItems);

function loadItems() {
    loadContent();
}

function loadContent() {
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((removeCart) => {
        removeCart.addEventListener('click', removeCart_Item);
    });

    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((inputQty) => {
        inputQty.addEventListener('change', changeQty);
    });
}

// Remove Cart Items
function removeCart_Item() {
    if (confirm('Are you sure to remove')) {
        this.closest('.cart-details').parentElement.remove();
    }
}

// Quantity Change
function changeQty() {

    if (isNaN(this.value) || this.value < 0) {
        this.value = 1;
    }

}