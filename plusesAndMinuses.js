let counter = 0;

// When a user clicks the + element, the count should increase by 1 on screen.
const plusEl = document.getElementById('plus');

plusEl.addEventListener('click', (e) => {
    counter++;
    // console.log(counter);
    document.getElementById('counter').textContent = counter;
});


// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById('minus');

minusEl.addEventListener('click', (e) => {
    counter--;
    document.getElementById('counter').textContent = counter;
});