var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
// adding a item
function addItem(e){
    e.preventDefault();
    var newItem= document.getElementById("item").value;
    var li =document.createElement("li");
    li.className="list-group-item";
    // var nitem=document.createTextNode(livalue);
    li.appendChild(document.createTextNode(newItem));


//create button
var delButton =document.createElement("button");
delButton.className="btn btn-danger btn-sm float-right delete";
delButton.appendChild(document.createTextNode('X'));
li.appendChild(delButton);


itemList.appendChild(li);

}

function removeItem(e)
{
if(e.target.classList.contains('delete')){
    if(confirm('are you sure ?'))
    {
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}




// filter items

var filter=document.getElementById("filter");
filter.addEventListener('keyup', filterItems);


function filterItems(e){
    var filterValue = e.target.value.toLowerCase();
  
 var items=document.getElementsByTagName('li');
    
   
Array.from(items).forEach(function(items){
    var itemName = items.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(filterValue) != -1){
      items.style.display = 'block';
    } else {
      items.style.display = 'none';
    }
  })};
