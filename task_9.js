var filter = document.getElementById('filter');
var itemList = document.getElementById('items');
var form = document.getElementById('addForm');

filter.addEventListener('keyup',filterItems);
form.addEventListener('submit', addItem);


function filterItems(e)
{
    var text= e.target.value.toLowerCase();
    var item= itemList.getElementsByTagName('li');
    Array.from(item).forEach(function(item){
        
        var itemName = item.firstChild.textContent;
        var des = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || des.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    })
}

function addItem(e){
    e.preventDefault();
  
   
    var newItem = document.getElementById('item').value;
    var newItem_1 = document.getElementById('item_1').value;
  
    var li = document.createElement('li');
    
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem_1));
   
    itemList.appendChild(li);
  }