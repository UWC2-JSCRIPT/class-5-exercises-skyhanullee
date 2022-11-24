// If an li element is clicked, toggle the class "done" on the <li>

const todayList = document.querySelector('.today-list');
todayList.addEventListener('click', (e) => {
  // checks if li element
  if(e.target.tagName.toLowerCase() === 'li') {
    // adds "done" to li element
    e.target.setAttribute('class', 'done');
    console.log(`list element is clicked: ${e.target.innerHTML}`);
  }
  // checks if span element
  else if(e.target.tagName.toLowerCase() === 'span') {
    // adds "done" to parent element (li)
    e.target.parentNode.setAttribute('class', 'done');
    console.log(`span element is clicked.`)
  }
  // // checks if the parent node is li element
  // else if(e.target.parentNode.tagName.toLowerCase() === 'li') {
  //   e.target.parentNode.setAttribute('class', 'done');
  //   console.log(`li child element is clicked.`)
  // }
  
})

  
// If a delete link is clicked, delete the li element / remove from the DOM
todayList.addEventListener('click', (e) => {
  // checks if clicked element has class name "delete"
  if(e.target.getElementsByClassName('delete')) {
    // removes list node
    todayList.removeChild(e.target.parentNode);
    console.log(`delete link was clicked.`);
  }
})


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  console.log(`addListItem was called.`);
  


  const newListNode = document.createElement('li');
  const newSpan = document.createElement('span');
  newSpan.textContent = text;
  newListNode.appendChild(newSpan);
  const deleteEl = document.createElement('a');
  deleteEl.textContent = 'Delete';
  newListNode.appendChild(deleteEl);

};

const addButton = document.querySelector('.add-item');
addButton.addEventListener('click', (e) => {
  console.log(`add button clicked.`)
  console.log(`input: ${e.previousElementSibling}`);
  addListItem;
})
