// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aBuyNow = document.createElement('a');
// const aBuyNowText = document.createTextNode('Buy Now!')
// aBuyNow.appendChild(aBuyNowText);
aBuyNow.textContent('Buy Now!');
aBuyNow.setAttribute('id', 'cta')


const lastP = document.getElementsByTagName('p');
lastP.appendChild(aBuyNow);

// Access (read) the data-color attribute of the <img>,
// log to the console


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
