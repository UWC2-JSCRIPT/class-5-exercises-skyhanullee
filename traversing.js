// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainElFromBody = body.children[0];
console.log(mainElFromBody);


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyElFromUl = ul.parentNode.parentNode
console.log(bodyElFromUl);


// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
// p.parentNode -> main
// .children[1] -> ul
// .children[2] -> third li
const thirdLiFromP = p.parentNode.children[1].children[2];
console.log(thirdLiFromP.innerHTML);
