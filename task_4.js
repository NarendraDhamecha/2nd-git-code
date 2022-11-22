
var items=document.getElementsByClassName("list-group-item");

items[3].style.backgroundColor= "green";

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight= 'bold';
    items[i].style.color= 'red';
}