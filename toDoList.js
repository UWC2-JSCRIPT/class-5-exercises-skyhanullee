// If an li element is clicked, toggle the class "done" on the <li>
const todayList = document.querySelector('.today-list');
todayList.addEventListener('click', (e) => {
  // checks if li element
  if(e.target.tagName.toLowerCase() === 'li') {
    // adds "done" to li element
    e.target.classList.toggle('done');
    console.log(`list element is clicked: ${e.target.innerHTML}`);
  }
  // checks if span element
  else if(e.target.tagName.toLowerCase() === 'span') {
    // adds "done" to parent element (li)
    e.target.parentNode.classList.toggle('done');
    console.log(`span element is clicked.`)
  }
});

  
// If a delete link is clicked, delete the li element / remove from the DOM
todayList.addEventListener('click', (e) => {
  // checks if clicked element has class name "delete"
  if(e.target.classList.contains('delete')) {
    // removes list node
    todayList.removeChild(e.target.parentNode);
    console.log(`delete link was clicked.`);
  }
});


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  console.log(`addListItem was called.`);
  
  // create li and span nodes
  const newListNode = document.createElement('li');
  const newSpan = document.createElement('span');

  // set span text from input
  newSpan.textContent = text;

  // append span into list node
  newListNode.appendChild(newSpan);
  
  // create delete node
  const deleteEl = document.createElement('a');
  deleteEl.setAttribute('class', 'delete');
  deleteEl.textContent = 'Delete';

  // append delete to list node
  newListNode.appendChild(deleteEl);

  // append list node to the rest of the to do list
  todayList.appendChild(newListNode);


  // create delete node
  const upEl = document.createElement('a');
  upEl.setAttribute('class', 'up');
  upEl.textContent = 'Up';

  const downEl = document.createElement('a');
  downEl.setAttribute('class', 'down');
  downEl.textContent = 'Down';

  // append delete to list node
  newListNode.appendChild(upEl);
  newListNode.appendChild(downEl);

  // append list node to the rest of the to do list
  todayList.appendChild(newListNode);

  // clear input textbox
  input.value = '';
};


// add item
const addButton = document.querySelector('.add-item');
addButton.addEventListener('click', addListItem);


// extra credit: move list nodes up and down
todayList.addEventListener('click', (e) => {
  let currentListNode = e.target.parentNode;
  let previousListNode = e.target.parentNode.previousElementSibling;
  let nextListNode = e.target.parentNode.nextElementSibling;

  // up button
  if(e.target.classList.contains('up') && previousListNode != null) {
    todayList.insertBefore(currentListNode, previousListNode);
    console.log(`up link was clicked.`);
  }

  // down button
  if(e.target.classList.contains('down') && nextListNode != null) {
    todayList.insertBefore(currentListNode, nextListNode.nextElementSibling);
    console.log(`down link was clicked.`);
  }
});
