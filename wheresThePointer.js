// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tbody = document.querySelector('tbody');
tbody.addEventListener('click', (e) => {
    let td = e.target;
    td.innerHTML = `${e.clientX}, ${e.clientY}`;
    console.log(`Coordinates are ${e.clientX}, ${e.clientY}`);
})

