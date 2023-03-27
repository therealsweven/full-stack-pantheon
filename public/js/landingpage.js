var ticket_items;
var menuDisplay;
var ticket_id;
var tableMap;
var tabMap;
var checkout;
var kitchen;

$(function(){
    menuDisplay = document.getElementById('menuDisplay');
    ticket_items = document.getElementById('ticket-items');
    tableMap = document.getElementById('table-map');
    tabMap = document.getElementById('bar-tab');
    checkout = document.getElementById('checkout');
    kitchen = document.getElementById('kitchen');
    console.log(tableMap);

    var url = document.URL;
    ticket_id = url.substring(url.lastIndexOf('/')+1, url.length);

    retrieveMenuData('food');

    tableMap.addEventListener('click', () =>{
      document.location.replace(`/pos/tables`);
    });
    
    tableMap.addEventListener('click', () =>{
      document.location.replace(`/pos/tables`);
    });
    
    checkout.addEventListener('click', ()=>{
      document.location.replace(`/pos/checkout/${ticket_id}`);
    })
})

function renderMenuRow(data){
    console.log(data);
    //create row container
    var row = document.createElement('div');
    row.setAttribute('class','d-flex justify-content-evenly col-md-12');

    for (let index = 0; index < data.length; index++) {
        //create div container
        var item = document.createElement('div');
        item.setAttribute('class','item-' + index);
        item.setAttribute('id', 'menu-items');
        //create image
        var img = document.createElement('img');
        img.setAttribute('src',data[index].image);
        img.setAttribute('class','images');
        //add button
        var addButton = document.createElement('button');
        addButton.setAttribute('class', 'btn btn-default border border-danger-subtle btn-add');
        addButton.setAttribute('onclick','increaseQuantity(' + data[index].id + ',' + ticket_id + ')');
        addButton.textContent='Add';
        //create name paragraph
        var name = document.createElement('p');
        name.textContent = data[index].item_name;
        name.setAttribute('class','fw-semibold')
        //create price paragraph
        var price = document.createElement('p');
        price.textContent = '$' + data[index].price;
        //create allergen paragraph
        var allergens = document.createElement('p');
        allergens.textContent = 'Allergens: ' + data[index].allergens.map(allergen => allergen.type.charAt(0));
        //append
        price.append(addButton);
        item.append(img, name, price, allergens);
        row.append(item);
    }
    menuDisplay.append(row);
}

function renderMenuItems(data){
    for (let index = 1; index <= data.length; index++) {
         if(index % 4 == 0 || index == data.length){
            renderMenuRow(data.slice(index-4, index));
         }
    }
}

async function retrieveMenuData(type){
    await fetch("http://localhost:3001/api/menu", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        renderMenuItems(data.filter(item => item.type == type));
      })
}

async function increaseQuantity(menu_item_id, ticket_id){
    await fetch("http://localhost:3001/api/tickets/item", {
        method: "POST",
        body: JSON.stringify({
            ticket_id: ticket_id,
            menu_item_id: menu_item_id
        }),
        headers: { "Content-Type": "application/json"},
      })
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        console.log(data);
        document.location.reload();
      })
}

async function decreaseQuantity(id){
    await fetch("http://localhost:3001/api/tickets/removeitem/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json"},
      })
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        console.log(data);
        document.location.reload();
      })
}

