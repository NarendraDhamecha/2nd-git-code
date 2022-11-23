var listNodes = document.querySelector('#items');
listNodes.parentElement.style.backgroundColor='lightblue';
listNodes.lastElementChild.style.color='lightgreen';
//console.log(listNodes.lastChild) this gives only blank text
listNodes.firstElementChild.style.color = 'red';
//console.log(listNodes.firstChild) this gives only space text
//console.log(listNodes.nextSibling) next sibling is just a space text
//console.log(listNodes.nextElementSibling) there is no nextelementsibling available its null
listNodes.previousSibling.previousSibling.style.fontWeight='bold';
listNodes.previousElementSibling.style.color = 'coral';

let newEle = document.createElement('div');

newEle.className='hello';
newEle.id='hello_1';

newEle.setAttribute('title', 'hello div');

let newText= document.createTextNode('hello world');
newEle.appendChild(newText);

var con = document.querySelector('header .container');
var h1= document.querySelector('header h1');
con.insertBefore(newEle,h1);

let ul = document.getElementById('items');
let li = document.createElement('li');
//let text = document.createTextNode('hello world');

li.appendChild(document.createTextNode('hello'));
ul.appendChild(li);


