const stars = document.querySelectorAll('.star');
const current_rating = document.querySelector('#current-rating');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        let new_rating = index + 1;

        current_rating.innerText = `${new_rating} of 5`;

        stars.forEach((star, i) => {
            if (new_rating >= i + 1) {
                star.innerHTML = "&starf;";
            } else {
                star.innerHTML = "&star;";
            }
        });

    });
});