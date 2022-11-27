// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aBuyNow = document.createElement('a');
aBuyNow.setAttribute('id', 'cta')
aBuyNow.textContent = 'Buy Now!';

const lastP = document.getElementsByTagName('p')[0];
lastP.appendChild(aBuyNow);


// Access (read) the data-color attribute of the <img>,
// log to the console
const imgDataColor = document.getElementsByTagName('img')[0];
console.log(imgDataColor.getAttribute('data-color'));


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdLi = document.getElementsByTagName('li')[2];
console.log(`The third li element is "${thirdLi.innerHTML}"`);
// thirdLi.textContent = 'highlight';
thirdLi.classList.add('highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const mainEl = document.getElementsByTagName('main')[0];
let removedP = mainEl.removeChild(lastP);
