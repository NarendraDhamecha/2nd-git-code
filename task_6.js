

let b = document.querySelector(".list-group-item:nth-child(2)");
 b.style.backgroundColor='green';

let a = document.querySelector(".list-group-item:nth-child(3)");

 a.style.color='white';

let item_2 = document.querySelectorAll('li');
item_2[1].style.color='green';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='green';
}
